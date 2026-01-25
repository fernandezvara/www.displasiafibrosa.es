#!/bin/bash

# Script para compilar SCSS a CSS
echo "Compilando SCSS a CSS..."

# Compilar main.scss a main.css
npx sass assets/css/main.scss:static/css/main.css --no-source-map

echo "✅ CSS compilado exitosamente"
echo "📁 Archivo generado: static/css/main.css"
