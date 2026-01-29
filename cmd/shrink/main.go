package main

import (
	"fmt"
	"image"
	"image/color"
	"image/draw"
	"image/jpeg"
	"image/png"
	"os"
	"path/filepath"
	"strings"

	_ "image/gif"
)

func main() {
	// Custom parsing to allow flags in any position
	var width, height, quality int
	var inputPath string
	quality = 85 // default quality

	args := os.Args[1:]
	for i := 0; i < len(args); i++ {
		switch args[i] {
		case "-w":
			if i+1 < len(args) {
				fmt.Sscanf(args[i+1], "%d", &width)
				i++
			}
		case "-h":
			if i+1 < len(args) {
				fmt.Sscanf(args[i+1], "%d", &height)
				i++
			}
		case "-q":
			if i+1 < len(args) {
				fmt.Sscanf(args[i+1], "%d", &quality)
				i++
			}
		default:
			if inputPath == "" && !strings.HasPrefix(args[i], "-") {
				inputPath = args[i]
			}
		}
	}

	if inputPath == "" {
		fmt.Println("Usage: shrink <input_file> [-w width] [-h height] [-q quality]")
		fmt.Println("  -w: Target width (maintains aspect ratio if -h not specified)")
		fmt.Println("  -h: Target height (maintains aspect ratio if -w not specified)")
		fmt.Println("  -q: JPEG quality 1-100 (default: 85)")
		fmt.Println("  Both -w and -h: Crops to fit the specified dimensions")
		os.Exit(1)
	}

	if width == 0 && height == 0 {
		fmt.Println("Error: At least one of -w or -h must be specified")
		os.Exit(1)
	}

	// Open the input file
	inputFile, err := os.Open(inputPath)
	if err != nil {
		fmt.Printf("Error opening file: %v\n", err)
		os.Exit(1)
	}
	defer inputFile.Close()

	// Decode the image
	img, format, err := image.Decode(inputFile)
	if err != nil {
		fmt.Printf("Error decoding image: %v\n", err)
		os.Exit(1)
	}

	bounds := img.Bounds()
	origWidth := bounds.Dx()
	origHeight := bounds.Dy()

	var newWidth, newHeight int
	var needsCrop bool

	if width > 0 && height > 0 {
		// Both dimensions specified: crop to fit
		newWidth = width
		newHeight = height
		needsCrop = true
	} else if width > 0 {
		// Only width specified: maintain aspect ratio
		newWidth = width
		newHeight = int(float64(origHeight) * float64(width) / float64(origWidth))
	} else {
		// Only height specified: maintain aspect ratio
		newHeight = height
		newWidth = int(float64(origWidth) * float64(height) / float64(origHeight))
	}

	var resultImg image.Image

	if needsCrop {
		// Calculate the crop area to maintain aspect ratio before resizing
		targetRatio := float64(newWidth) / float64(newHeight)
		origRatio := float64(origWidth) / float64(origHeight)

		var cropRect image.Rectangle

		if origRatio > targetRatio {
			// Original is wider - crop the sides
			cropHeight := origHeight
			cropWidth := int(float64(cropHeight) * targetRatio)
			xOffset := (origWidth - cropWidth) / 2
			cropRect = image.Rect(bounds.Min.X+xOffset, bounds.Min.Y, bounds.Min.X+xOffset+cropWidth, bounds.Min.Y+cropHeight)
		} else {
			// Original is taller - crop top and bottom
			cropWidth := origWidth
			cropHeight := int(float64(cropWidth) / targetRatio)
			yOffset := (origHeight - cropHeight) / 2
			cropRect = image.Rect(bounds.Min.X, bounds.Min.Y+yOffset, bounds.Min.X+cropWidth, bounds.Min.Y+yOffset+cropHeight)
		}

		// Create cropped image
		croppedImg := image.NewRGBA(image.Rect(0, 0, cropRect.Dx(), cropRect.Dy()))
		draw.Draw(croppedImg, croppedImg.Bounds(), img, cropRect.Min, draw.Src)

		// Now resize the cropped image
		resultImg = resize(croppedImg, newWidth, newHeight)
	} else {
		// Just resize
		resultImg = resize(img, newWidth, newHeight)
	}

	// Generate output filename
	dir := filepath.Dir(inputPath)
	ext := filepath.Ext(inputPath)
	baseName := strings.TrimSuffix(filepath.Base(inputPath), ext)
	outputFilename := fmt.Sprintf("%s.%dx%d%s", baseName, newWidth, newHeight, ext)
	outputPath := filepath.Join(dir, outputFilename)

	// Create output file
	outputFile, err := os.Create(outputPath)
	if err != nil {
		fmt.Printf("Error creating output file: %v\n", err)
		os.Exit(1)
	}
	defer outputFile.Close()

	// Encode and save
	switch strings.ToLower(format) {
	case "jpeg":
		err = jpeg.Encode(outputFile, resultImg, &jpeg.Options{Quality: quality})
	case "png":
		err = png.Encode(outputFile, resultImg)
	default:
		// Default to JPEG for unknown formats
		err = jpeg.Encode(outputFile, resultImg, &jpeg.Options{Quality: quality})
	}

	if err != nil {
		fmt.Printf("Error encoding image: %v\n", err)
		os.Exit(1)
	}

	fmt.Printf("Created: %s (%dx%d)\n", outputPath, newWidth, newHeight)
}

// resize uses bilinear interpolation to resize an image
func resize(src image.Image, width, height int) image.Image {
	srcBounds := src.Bounds()
	srcW := srcBounds.Dx()
	srcH := srcBounds.Dy()

	dst := image.NewRGBA(image.Rect(0, 0, width, height))

	xRatio := float64(srcW) / float64(width)
	yRatio := float64(srcH) / float64(height)

	for y := 0; y < height; y++ {
		for x := 0; x < width; x++ {
			// Calculate source position
			srcX := float64(x) * xRatio
			srcY := float64(y) * yRatio

			// Bilinear interpolation
			x0 := int(srcX)
			y0 := int(srcY)
			x1 := x0 + 1
			y1 := y0 + 1

			// Clamp to bounds
			if x1 >= srcW {
				x1 = srcW - 1
			}
			if y1 >= srcH {
				y1 = srcH - 1
			}

			// Fractional parts
			xFrac := srcX - float64(x0)
			yFrac := srcY - float64(y0)

			// Get the four neighboring pixels
			r00, g00, b00, a00 := src.At(srcBounds.Min.X+x0, srcBounds.Min.Y+y0).RGBA()
			r10, g10, b10, a10 := src.At(srcBounds.Min.X+x1, srcBounds.Min.Y+y0).RGBA()
			r01, g01, b01, a01 := src.At(srcBounds.Min.X+x0, srcBounds.Min.Y+y1).RGBA()
			r11, g11, b11, a11 := src.At(srcBounds.Min.X+x1, srcBounds.Min.Y+y1).RGBA()

			// Interpolate
			r := bilinear(r00, r10, r01, r11, xFrac, yFrac)
			g := bilinear(g00, g10, g01, g11, xFrac, yFrac)
			b := bilinear(b00, b10, b01, b11, xFrac, yFrac)
			a := bilinear(a00, a10, a01, a11, xFrac, yFrac)

			dst.Set(x, y, color.RGBA{
				R: uint8(r >> 8),
				G: uint8(g >> 8),
				B: uint8(b >> 8),
				A: uint8(a >> 8),
			})
		}
	}

	return dst
}

func bilinear(v00, v10, v01, v11 uint32, xFrac, yFrac float64) uint32 {
	top := float64(v00)*(1-xFrac) + float64(v10)*xFrac
	bottom := float64(v01)*(1-xFrac) + float64(v11)*xFrac
	return uint32(top*(1-yFrac) + bottom*yFrac)
}
