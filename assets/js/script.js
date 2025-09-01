 // Set current year
            document.getElementById('year').textContent = new Date().getFullYear();

            // Mobile menu toggle
            const menuToggle = document.getElementById('menuToggle');
            const navLinks = document.getElementById('navLinks');

            menuToggle.addEventListener('click', () => {
                navLinks.classList.toggle('active');
            });

            // Close mobile menu when clicking on a link
            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('active');
                });
            });

            // Header scroll effect
            const header = document.getElementById('header');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 100) {
                    header.classList.add('scrolled');
                } else {
                    header.classList.remove('scrolled');
                }
            });

            // Smooth scrolling for anchor links
            document.querySelectorAll('a[href^="#"]').forEach(anchor => {
                anchor.addEventListener('click', function (e) {
                    e.preventDefault();
                    const target = document.querySelector(this.getAttribute('href'));
                    if (target) {
                        window.scrollTo({
                            top: target.offsetTop - 100,
                            behavior: 'smooth'
                        });
                    }
                });
            });

            // Form submission
           

            // Animation on scroll
            const animateElements = document.querySelectorAll('.animate');

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = 1;
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            }, {
                threshold: 0.1
            });

            animateElements.forEach(el => {
                el.style.opacity = 0;
                el.style.transform = 'translateY(20px)';
                el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                observer.observe(el);
            });

            // Initialize animations
            document.addEventListener('DOMContentLoaded', function () {
                // Trigger initial animation check
                setTimeout(() => {
                    animateElements.forEach(el => {
                        if (el.getBoundingClientRect().top < window.innerHeight) {
                            el.style.opacity = 1;
                            el.style.transform = 'translateY(0)';
                        }
                    });
                }, 100);
            });

        document.addEventListener('DOMContentLoaded', function() {
            const projectImg = document.querySelector('.project-img');
            const modal = document.querySelector('.modal');
            const closeBtn = document.querySelector('.close-btn');
            const prevBtn = document.querySelector('.prev');
            const nextBtn = document.querySelector('.next');
            const slideshowImages = document.querySelectorAll('.slideshow-image');
            const dots = document.querySelectorAll('.dot');
            
            let currentImageIndex = 0;
            
            // Show modal when clicking on the project image or "Voir plus"
            projectImg.addEventListener('click', function() {
                modal.classList.add('active');
                document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
            });
            
            // Close modal
            closeBtn.addEventListener('click', function() {
                modal.classList.remove('active');
                document.body.style.overflow = ''; // Restore scrolling
            });
            
            // Close modal when clicking outside the content
            modal.addEventListener('click', function(e) {
                if (e.target === modal) {
                    modal.classList.remove('active');
                    document.body.style.overflow = '';
                }
            });
            
            // Navigate to previous image
            prevBtn.addEventListener('click', function() {
                slideshowImages[currentImageIndex].style.display = 'none';
                dots[currentImageIndex].classList.remove('active');
                
                currentImageIndex = (currentImageIndex - 1 + slideshowImages.length) % slideshowImages.length;
                
                slideshowImages[currentImageIndex].style.display = 'block';
                dots[currentImageIndex].classList.add('active');
            });
            
            // Navigate to next image
            nextBtn.addEventListener('click', function() {
                slideshowImages[currentImageIndex].style.display = 'none';
                dots[currentImageIndex].classList.remove('active');
                
                currentImageIndex = (currentImageIndex + 1) % slideshowImages.length;
                
                slideshowImages[currentImageIndex].style.display = 'block';
                dots[currentImageIndex].classList.add('active');
            });
            
            // Navigate to specific image via dots
            dots.forEach((dot, index) => {
                dot.addEventListener('click', function() {
                    slideshowImages[currentImageIndex].style.display = 'none';
                    dots[currentImageIndex].classList.remove('active');
                    
                    currentImageIndex = index;
                    
                    slideshowImages[currentImageIndex].style.display = 'block';
                    dots[currentImageIndex].classList.add('active');
                });
            });
        });


         // document.addEventListener('DOMContentLoaded', function() {
        //     const form = document.getElementById('contactForm');
        //     const messageDiv = document.getElementById('message');
            
        //     form.addEventListener('submit', function(e) {
        //         e.preventDefault();
                
        //         // Récupérer les valeurs du formulaire
        //         const name = document.getElementById('name').value;
        //         const email = document.getElementById('email').value;
        //         const phone = document.getElementById('phone').value || 'Non fourni';
        //         const subject = document.getElementById('subject').value;
        //         const message = document.getElementById('message').value;
                
        //         // Créer le corps de l'email
        //         const mailtoLink = `mailto:yamodigitalsolutions@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        //             `Nouveau message de contact\n\n` +
        //             `Nom: ${name}\n` +
        //             `Email: ${email}\n` +
        //             `Téléphone: ${phone}\n\n` +
        //             `Message:\n${message}`
        //         )}`;
                
        //         // Afficher le message de confirmation
        //         messageDiv.innerHTML = 'Préparation de l\'envoi du message...';
        //         messageDiv.className = 'message';
        //         messageDiv.style.display = 'block';
                
        //         // Rediriger vers le client email
        //         try {
        //             window.location.href = mailtoLink;
                    
        //             // Message de confirmation
        //             setTimeout(() => {
        //                 messageDiv.innerHTML = 'Le client de messagerie s\'est ouvert. Veuillez envoyer le message depuis votre application de messagerie.';
        //                 messageDiv.className = 'message success';
        //             }, 1000);
                    
        //         } catch (error) {
        //             messageDiv.innerHTML = 'Une erreur est survenue. Veuillez réessayer.';
        //             messageDiv.className = 'message error';
        //         }
                
        //         // Réinitialiser le formulaire
        //         form.reset();
        //     });
        // });