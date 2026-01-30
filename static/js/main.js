// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navList = document.querySelector('.nav-list');
    
    // Function to open mobile menu
    function openMobileMenu() {
        navList.classList.add('active');
        menuToggle.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Function to close mobile menu
    function closeMobileMenu() {
        navList.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.style.overflow = '';
        
        // Close all dropdowns when closing menu
        const openDropdowns = document.querySelectorAll('.nav-item.dropdown-open');
        openDropdowns.forEach(item => item.classList.remove('dropdown-open'));
    }
    
    // Toggle menu on button click
    if (menuToggle && navList) {
        menuToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            if (navList.classList.contains('active')) {
                closeMobileMenu();
            } else {
                openMobileMenu();
            }
        });
    }
    
    // Handle dropdown toggles in mobile
    const navItems = document.querySelectorAll('.nav-item');
    navItems.forEach(item => {
        const navLink = item.querySelector('.nav-link');
        const dropdown = item.querySelector('.dropdown');
        
        if (dropdown && navLink) {
            navLink.addEventListener('click', function(e) {
                // Only handle dropdown toggle on mobile
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    // Toggle this dropdown
                    item.classList.toggle('dropdown-open');
                }
            });
        }
    });
    
    // Close mobile menu when clicking on dropdown links
    const dropdownLinks = document.querySelectorAll('.dropdown-link');
    dropdownLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                closeMobileMenu();
            }
        });
    });
    
    // Close menu when clicking on nav links without dropdown
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const parentItem = link.closest('.nav-item');
        const hasDropdown = parentItem.querySelector('.dropdown');
        
        if (!hasDropdown) {
            link.addEventListener('click', function() {
                if (window.innerWidth <= 768) {
                    closeMobileMenu();
                }
            });
        }
    });
    
    // Handle window resize - close menu if resizing to desktop
    let resizeTimer;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function() {
            if (window.innerWidth > 768 && navList.classList.contains('active')) {
                closeMobileMenu();
            }
        }, 250);
    });
    
    // Close menu on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navList.classList.contains('active')) {
            closeMobileMenu();
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to current navigation item
function setActiveNavItem() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });
}

// Initialize on page load
setActiveNavItem();

// Update on navigation (for single page apps)
window.addEventListener('popstate', setActiveNavItem);

// Handle window resize for mobile menu
window.addEventListener('resize', function() {
    const navList = document.querySelector('.nav-list');
    const menuToggle = document.querySelector('.menu-toggle');
    
    if (window.innerWidth > 768 && navList.classList.contains('active')) {
        navList.classList.remove('active');
        menuToggle.classList.remove('active');
        document.body.style.overflow = '';
    }
});


/**
 * Sistema de tarjetas de usuario interactivas
 * Crea tarjetas dinámicamente desde data attributes
 */

class UserCardManager {
  constructor() {
    this.activeCard = null;
    this.activeTrigger = null;
    this.overlay = null;
    this.card = null;
    this.init();
  }

  init() {
    this.createOverlay();
    this.createCard();
    this.initTriggers();
    this.setupGlobalListeners();
  }

  createOverlay() {
    this.overlay = document.createElement('div');
    this.overlay.className = 'user-card-overlay';
    document.body.appendChild(this.overlay);
    this.overlay.addEventListener('click', () => this.hideCard());
  }

  createCard() {
    this.card = document.createElement('div');
    this.card.className = 'user-card';
    this.card.innerHTML = `
      <div class="team-member-photo"></div>
      <div class="team-member-info">
        <h3 class="team-member-name"></h3>
        <p class="team-member-position"></p>
        <p class="team-member-institution"></p>
        <p class="team-member-bio"></p>
        <div class="team-member-contact"></div>
      </div>
      <button class="user-card-close" aria-label="Cerrar tarjeta">&times;</button>
    `;
    document.body.appendChild(this.card);

    this.card.querySelector('.user-card-close').addEventListener('click', (e) => {
      e.stopPropagation();
      this.hideCard();
    });

    this.card.addEventListener('click', (e) => {
      e.stopPropagation();
    });
  }

  initTriggers() {
    const triggers = document.querySelectorAll('.user-data-trigger[data-user-id]');
    
    triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        
        if (this.activeTrigger === trigger && this.card.classList.contains('active')) {
          this.hideCard();
        } else {
          this.showCard(trigger);
        }
      });
    });
  }

  showCard(trigger) {
    this.activeTrigger = trigger;
    
    const data = {
      name: trigger.dataset.userName || '',
      prefix: trigger.dataset.userPrefix || '',
      suffix: trigger.dataset.userSuffix || '',
      position: trigger.dataset.userPosition || '',
      institution: trigger.dataset.userInstitution || '',
      bio: trigger.dataset.userBio || '',
      photo: trigger.dataset.userPhoto || '',
      email: trigger.dataset.userEmail || '',
      phone: trigger.dataset.userPhone || '',
      linkedin: trigger.dataset.userLinkedin || ''
    };

    // Update photo
    const photoEl = this.card.querySelector('.team-member-photo');
    if (data.photo) {
      photoEl.innerHTML = `<img src="${data.photo}" alt="${data.name}" loading="lazy">`;
      photoEl.classList.remove('placeholder');
    } else {
      photoEl.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/></svg>`;
      photoEl.classList.add('placeholder');
    }

    // Update name
    const nameEl = this.card.querySelector('.team-member-name');
    const fullName = [data.prefix, data.name, data.suffix].filter(Boolean).join(' ');
    nameEl.textContent = fullName;
    nameEl.style.display = fullName ? '' : 'none';

    // Update position
    const positionEl = this.card.querySelector('.team-member-position');
    positionEl.textContent = data.position;
    positionEl.style.display = data.position ? '' : 'none';

    // Update institution
    const institutionEl = this.card.querySelector('.team-member-institution');
    institutionEl.textContent = data.institution;
    institutionEl.style.display = data.institution ? '' : 'none';

    // Update bio
    const bioEl = this.card.querySelector('.team-member-bio');
    bioEl.textContent = data.bio;
    bioEl.style.display = data.bio ? '' : 'none';

    // Update contact links
    const contactEl = this.card.querySelector('.team-member-contact');
    let contactHtml = '';
    
    if (data.email) {
      contactHtml += `<a href="mailto:${data.email}" class="contact-link" aria-label="Email"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></a>`;
    }
    if (data.phone) {
      contactHtml += `<a href="tel:${data.phone}" class="contact-link" aria-label="Teléfono"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg></a>`;
    }
    if (data.linkedin) {
      contactHtml += `<a href="${data.linkedin}" target="_blank" rel="noopener" class="contact-link" aria-label="LinkedIn"><svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>`;
    }
    
    contactEl.innerHTML = contactHtml;
    contactEl.style.display = contactHtml ? '' : 'none';

    // Position and show card
    this.positionCard(trigger);
    this.card.classList.add('active');
    this.overlay.classList.add('active');
  }

  hideCard() {
    this.card.classList.remove('active');
    this.overlay.classList.remove('active');
    this.activeTrigger = null;
  }

  positionCard(trigger) {
    // Center the card on screen
    this.card.style.position = 'fixed';
    this.card.style.left = '50%';
    this.card.style.top = '50%';
    this.card.style.transform = 'translate(-50%, -50%)';
  }

  setupGlobalListeners() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        this.hideCard();
      }
    });

    document.addEventListener('click', (e) => {
      if (this.card.classList.contains('active') && !e.target.closest('.user-data-trigger')) {
        this.hideCard();
      }
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new UserCardManager();
  });
} else {
  new UserCardManager();
}
