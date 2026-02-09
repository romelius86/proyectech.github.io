// PROYECTECH - Script Principal
// Manejo de navegación y funcionalidades interactivas

document.addEventListener('DOMContentLoaded', function () {

    // ========================================
    // 1. MENÚ MÓVIL - Hamburguesa
    // ========================================
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', function () {
            mobileMenu.classList.toggle('active');

            // Cambiar icono del botón
            const icon = this.querySelector('svg path');
            if (mobileMenu.classList.contains('active')) {
                icon.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // Icono X
            } else {
                icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16'); // Icono hamburguesa
            }
        });

        // Cerrar menú al hacer click en un enlace
        const mobileLinks = mobileMenu.querySelectorAll('a');
        mobileLinks.forEach(link => {
            link.addEventListener('click', function () {
                mobileMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('svg path');
                icon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            });
        });
    }

    // ========================================
    // 2. NAVBAR - Efecto Scroll
    // ========================================
    const navbar = document.getElementById('navbar');

    if (navbar) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 50) {
                navbar.classList.add('shadow-lg');
            } else {
                navbar.classList.remove('shadow-lg');
            }
        });
    }





    // ========================================
    // 3. LAZY LOADING - Videos
    // ========================================
    const lazyVideos = document.querySelectorAll('.lazy-video');

    if (lazyVideos.length > 0) {
        const videoObserver = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const video = entry.target;
                    const videoSrc = video.getAttribute('data-src');
                    if (videoSrc && !video.getAttribute('src')) {
                        video.setAttribute('src', videoSrc);
                    }
                    videoObserver.unobserve(video);
                }
            });
        }, { rootMargin: '100px' });

        lazyVideos.forEach(video => videoObserver.observe(video));
    }


    // ========================================
    // 4. LAZY LOADING - Google Maps
    // ========================================
    const googleMap = document.getElementById('google-map');

    if (googleMap) {
        const loadMap = function () {
            const mapSrc = googleMap.getAttribute('data-src');
            if (mapSrc && !googleMap.getAttribute('src')) {
                googleMap.setAttribute('src', mapSrc);
            }
        };

        // Cargar mapa cuando esté visible
        const mapObserver = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    loadMap();
                    mapObserver.unobserve(entry.target);
                }
            });
        }, { rootMargin: '100px' });

        mapObserver.observe(googleMap);
    }


    // ========================================
    // 5. FORMULARIO DE CONTACTO - WhatsApp
    // ========================================
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Obtener valores del formulario
            const nombre = document.getElementById('nombre').value.trim();
            const producto = document.getElementById('producto').value;
            const mensaje = document.getElementById('mensaje').value.trim();

            // Validaciones
            if (!nombre) {
                alert('Por favor, ingresa tu nombre');
                document.getElementById('nombre').focus();
                return false;
            }

            if (!producto) {
                alert('Por favor, selecciona un producto');
                document.getElementById('producto').focus();
                return false;
            }

            if (!mensaje) {
                alert('Por favor, escribe un mensaje');
                document.getElementById('mensaje').focus();
                return false;
            }

            // Construir mensaje para WhatsApp
            const mensajeWhatsApp = `
*Nuevo contacto desde PROYECTECH*

👤 *Nombre:* ${nombre}
📦 *Producto de interés:* ${producto}

💬 *Mensaje:*
${mensaje}

---
Enviado desde www.proyectech.com
            `.trim();

            // Número de WhatsApp (cambiar por el número real)
            const numeroWhatsApp = '51984225797';

            // Codificar mensaje para URL
            const mensajeCodificado = encodeURIComponent(mensajeWhatsApp);

            // Construir URL de WhatsApp
            const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

            // Abrir WhatsApp en nueva ventana
            window.open(urlWhatsApp, '_blank');

            // Opcional: Limpiar formulario después de enviar
            contactForm.reset();

            // Mostrar mensaje de confirmación
            alert('¡Gracias! Serás redirigido a WhatsApp para completar tu consulta.');

            return false;
        });

        // Validación en tiempo real
        const inputs = contactForm.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('blur', function () {
                if (this.hasAttribute('required') && !this.value.trim()) {
                    this.classList.add('border-red-500');
                } else {
                    this.classList.remove('border-red-500');
                }
            });

            input.addEventListener('input', function () {
                if (this.classList.contains('border-red-500') && this.value.trim()) {
                    this.classList.remove('border-red-500');
                }
            });
        });
    }

    // ========================================
    // 6. ANIMACIONES AL SCROLL
    // ========================================
    const animateOnScroll = function () {
        const elements = document.querySelectorAll('.card-hover, .icon-box, .gallery-item');

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '0';
                    entry.target.style.transform = 'translateY(20px)';

                    setTimeout(() => {
                        entry.target.style.transition = 'all 0.6s ease';
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }, 100);

                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        elements.forEach(element => observer.observe(element));
    };

    animateOnScroll();

    // ========================================
    // 7. SMOOTH SCROLL PARA ENLACES INTERNOS
    // ========================================
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ========================================
    // 8. ACCESIBILIDAD - Focus visible
    // ========================================
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Tab') {
            document.body.classList.add('user-is-tabbing');
        }
    });

    document.addEventListener('mousedown', function () {
        document.body.classList.remove('user-is-tabbing');
    });



    // ========================================
    // 9. PERFORMANCE - Preload de imágenes críticas
    // ========================================
    const preloadImages = function () {
        const images = document.querySelectorAll('img[data-src]');
        images.forEach(img => {
            const src = img.getAttribute('data-src');
            if (src) {
                img.setAttribute('src', src);
                img.removeAttribute('data-src');
            }
        });
    };

    // Precargar después de que la página esté completamente cargada
    if (document.readyState === 'complete') {
        preloadImages();
    } else {
        window.addEventListener('load', preloadImages);
    }


    // ========================================
    // 10. HERO CAROUSEL
    // ========================================
    let currentSlide = 0;
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.indicator-dot');
    let slideInterval;

    const goToSlide = function (index) {
        if (slides.length === 0) return;

        // Asegurar que el índice sea válido (ciclico)
        if (index < 0) index = slides.length - 1;
        if (index >= slides.length) index = 0;

        // Remove active class from current slide and dot
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));

        // Target index
        currentSlide = index;

        // Add active class to new slide and dot
        if (slides[currentSlide]) slides[currentSlide].classList.add('active');
        if (dots[currentSlide]) dots[currentSlide].classList.add('active');
    };

    const nextSlide = function () {
        goToSlide(currentSlide + 1);
    };

    // Event Listeners para los dots
    dots.forEach(dot => {
        dot.addEventListener('click', function () {
            const index = parseInt(this.getAttribute('data-index'));
            goToSlide(index);
            resetInterval(); // Reiniciar timer al interactuar manualmente
        });
    });

    // Auto cycle con capacidad de pausa/reinicio
    const startInterval = () => {
        if (slides.length > 0) {
            slideInterval = setInterval(nextSlide, 5000);
        }
    };

    const resetInterval = () => {
        clearInterval(slideInterval);
        startInterval();
    };

    startInterval();

    // ========================================
    // 11. FAQ ACCORDION
    // ========================================
    const faqButtons = document.querySelectorAll('.faq-btn');

    faqButtons.forEach(btn => {
        btn.addEventListener('click', function () {
            // Toggle icon rotation
            const icon = this.querySelector('svg');
            icon.classList.toggle('rotate-180');

            // Toggle content visibility
            const content = this.nextElementSibling;
            
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                // Opcional: Cerrar otros acordeones
                /* 
                faqButtons.forEach(otherBtn => {
                    if (otherBtn !== btn) {
                        otherBtn.querySelector('svg').classList.remove('rotate-180');
                        otherBtn.nextElementSibling.classList.add('hidden');
                    }
                }); 
                */
            } else {
                content.classList.add('hidden');
            }
        });
    });

    // ========================================
    // 12. CONSOLE LOG - Información del sitio
    // ========================================
    console.log('%c🏗️ PROYECTECH', 'color: #e74c3c; font-size: 24px; font-weight: bold;');
    console.log('%cTu proyecto garantizado', 'color: #2c3e50; font-size: 14px;');
    console.log('%cDesarrollado con HTML5, Tailwind CSS y JavaScript Vanilla', 'color: #95a5a6; font-size: 12px;');

});

// ========================================
// FUNCIONES AUXILIARES
// ========================================

// Función para formatear números de teléfono
function formatPhoneNumber(phone) {
    return phone.replace(/\D/g, '');
}

// Función para validar email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Función para detectar dispositivo móvil
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Exportar funciones si se necesitan en otros scripts
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        formatPhoneNumber,
        validateEmail,
        isMobileDevice
    };
}
