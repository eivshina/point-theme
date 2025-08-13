// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Create hover sound effect (matching Framer website)
    const createHoverSound = () => {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        
        const playHoverSound = () => {
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            // Lower frequency to match Framer website
            oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.05);
            
            // Lower volume and shorter duration
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.03, audioContext.currentTime + 0.005);
            gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.05);
        };
        
        return playHoverSound;
    };
    
    // Add hover sound to navigation elements
    const playSound = createHoverSound();
    const navElements = document.querySelectorAll('.nav-sound');
    
    navElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            try {
                playSound();
            } catch (e) {
                // Silently handle audio context issues
            }
        });
    });

    // Smooth scrolling for anchor links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe all animated elements
    const animatedElements = document.querySelectorAll('.hero-text, .about-text, .featured-content, .projects-grid, .expertise-grid, .metrics-content, .testimonials-grid, .contact-content');
    
    animatedElements.forEach(el => {
        observer.observe(el);
    });

    // Counter animation for metrics
    const animateCounters = () => {
        const counters = document.querySelectorAll('.metric-number, .metric-large, .percentage');
        
        counters.forEach(counter => {
            const target = parseInt(counter.textContent.replace(/[^\d]/g, ''));
            const duration = 2000;
            const increment = target / (duration / 16);
            let current = 0;
            
            const updateCounter = () => {
                if (current < target) {
                    current += increment;
                    if (counter.classList.contains('percentage')) {
                        counter.textContent = Math.floor(current) + '%';
                    } else if (counter.textContent.includes('K+')) {
                        counter.textContent = Math.floor(current) + 'K+';
                    } else if (counter.textContent.includes('M+')) {
                        counter.textContent = Math.floor(current) + 'M+';
                    } else {
                        counter.textContent = Math.floor(current);
                    }
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = counter.textContent; // Reset to original
                }
            };
            
            updateCounter();
        });
    };

    // Trigger counter animation when metrics section is visible
    const metricsSection = document.querySelector('.metric-marvels');
    if (metricsSection) {
        const metricsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    metricsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });
        
        metricsObserver.observe(metricsSection);
    }

    // Parallax effect for hero and featured project sections
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroImage = document.querySelector('.hero-image');
        const featuredBg = document.querySelector('.featured-project-bg');
        
        if (heroImage) {
            const rate = scrolled * -0.5;
            heroImage.style.transform = `translateY(${rate}px)`;
        }
        
        if (featuredBg) {
            const featuredSection = document.querySelector('.featured-project');
            const rect = featuredSection.getBoundingClientRect();
            const rate = (scrolled - (featuredSection.offsetTop - window.innerHeight)) * -0.3;
            featuredBg.style.transform = `translateY(${rate}px)`;
        }
    });

    // Navbar background on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.9)';
        }
    });

    // Stagger animation for project items
    const projectItems = document.querySelectorAll('.project-item');
    projectItems.forEach((item, index) => {
        item.style.animationDelay = `${0.1 * index}s`;
    });

    // Stagger animation for testimonials
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach((testimonial, index) => {
        testimonial.style.animationDelay = `${0.15 * index}s`;
    });

    // Hover effect for project items
    projectItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Typing effect for hero tagline
    const heroTagline = document.querySelector('.hero-tagline');
    if (heroTagline) {
        const text = heroTagline.textContent;
        heroTagline.textContent = '';
        
        let i = 0;
        const typeWriter = () => {
            if (i < text.length) {
                heroTagline.textContent += text.charAt(i);
                i++;
                setTimeout(typeWriter, 50);
            }
        };
        
        setTimeout(typeWriter, 1000);
    }

    // Magnetic effect for buttons
    const buttons = document.querySelectorAll('.explore-link, .resume-link');
    buttons.forEach(button => {
        button.addEventListener('mousemove', function(e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            this.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translate(0, 0)';
        });
    });

    // Scroll progress indicator
    const createScrollProgress = () => {
        const progressBar = document.createElement('div');
        progressBar.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 0%;
            height: 3px;
            background: linear-gradient(90deg, #ff6600, #ff8800);
            z-index: 9999;
            transition: width 0.1s ease;
        `;
        document.body.appendChild(progressBar);
        
        window.addEventListener('scroll', () => {
            const scrollTop = window.pageYOffset;
            const docHeight = document.body.offsetHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            progressBar.style.width = scrollPercent + '%';
        });
    };
    
    createScrollProgress();

    // Image lazy loading with fade-in effect (ensuring images stay visible)
    const images = document.querySelectorAll('img');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                
                // Ensure image is visible immediately if already loaded
                if (img.complete && img.naturalHeight !== 0) {
                    img.style.opacity = '1';
                } else {
                    img.style.opacity = '0';
                    img.style.transition = 'opacity 0.5s ease';
                    
                    img.onload = () => {
                        img.style.opacity = '1';
                    };
                }
                
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        // Make sure hero images and social icons are immediately visible
        if (img.closest('.hero-image') || img.closest('.hero') || img.closest('.social-badge') || img.closest('.about-badges')) {
            img.style.opacity = '1';
        } else {
            imageObserver.observe(img);
        }
    });

    // Add floating animation to badges
    const badges = document.querySelectorAll('.social-badge');
    badges.forEach((badge, index) => {
        badge.style.animation = `float 3s ease-in-out infinite`;
        badge.style.animationDelay = `${index * 0.2}s`;
    });

    // Add CSS for floating animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
        
        .project-item {
            animation: fadeInUp 0.8s ease forwards;
            opacity: 0;
            transform: translateY(30px);
        }
        
        .testimonial {
            animation: fadeInUp 0.8s ease forwards;
            opacity: 0;
            transform: translateY(30px);
        }
    `;
    document.head.appendChild(style);
});

// Cursor trail effect
document.addEventListener('mousemove', (e) => {
    const trail = document.createElement('div');
    trail.style.cssText = `
        position: fixed;
        width: 6px;
        height: 6px;
        background: #ff6600;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9998;
        left: ${e.clientX - 3}px;
        top: ${e.clientY - 3}px;
        opacity: 0.7;
        animation: trailFade 0.5s ease-out forwards;
    `;
    
    document.body.appendChild(trail);
    
    setTimeout(() => {
        trail.remove();
    }, 500);
});

// Add CSS for trail fade animation
const trailStyle = document.createElement('style');
trailStyle.textContent = `
    @keyframes trailFade {
        to {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
document.head.appendChild(trailStyle);


// Project Modal Functions
function openProjectModal(projectId) {
    const modal = document.getElementById('projectModal');
    const modalContent = document.getElementById('modalContent');
    
    const projectData = {
        'ai-education': {
            title: 'AI Education Series',
            subtitle: 'Making AI Accessible to Everyone',
            description: 'Through my educational AI videos, I break down complex artificial intelligence concepts into digestible, engaging content. My approach focuses on practical applications and real-world examples that help viewers understand how AI impacts their daily lives.',
            highlights: [
                'Created comprehensive AI curriculum for beginners',
                'Developed interactive learning modules',
                'Reached over 50,000 students globally',
                'Featured in educational technology conferences'
            ],
            instagramPosts: [
                {
                    url: 'https://www.instagram.com/katya.ivshina/',
                    description: 'Introduction to Machine Learning Basics'
                },
                {
                    url: 'https://www.instagram.com/katya.ivshina/',
                    description: 'Neural Networks Explained Simply'
                },
                {
                    url: 'https://www.instagram.com/katya.ivshina/',
                    description: 'AI Ethics and Responsible Development'
                }
            ]
        },
        'mathematics': {
            title: 'Speaker',
            subtitle: 'International keyonte speaker',
            description: 'Katya is passionate about increasing access to education and empowering underrepresented students in STEM. Katya’s speaking and outreach work includes keynote addresses and talks at top STEM events in Boston, New York City, and London',
            highlights: [
                'Imperial College London',
                'Northeastern University',
                'City University of New York',
            ],
            instagramPosts: [
                {
                    url: 'https://www.instagram.com/katya.ivshina/',
                    description: 'Beautiful Mathematical Patterns in Nature'
                },
                {
                    url: 'https://www.instagram.com/katya.ivshina/',
                    description: 'Topology and Knot Theory Visualization'
                },
                {
                    url: 'https://www.instagram.com/katya.ivshina/',
                    description: 'Mathematical Modeling in Real Life'
                }
            ]
        },
        'mentor': {
            title: 'Mentor',
            subtitle: 'Inspiring Students in STEM',
            description: 'As a first-generation immigrant woman in STEM, Katya is passionate about creating inclusive spaces and inspiring the next generation of diverse scientists, mathematicians, and engineers. Katya coaches students 1-1 to get into their dream undergraduate, master's, and PhD programs.',
            highlights: [
                'Spoke at 5+ STEM diversity conferences',
                'Mentored underrepresented students',
                'Created research opportunities for women in math',
                'Built supportive STEM communities online',
                'Ran a volunteer tutoring program for refugee students'
            ],
            instagramPosts: [
                {
                    url: 'https://www.instagram.com/katya.ivshina/',
                    description: 'Women in Mathematics Panel Discussion'
                },
                {
                    url: 'https://www.instagram.com/katya.ivshina/',
                    description: 'Breaking Barriers in Academia'
                },
                {
                    url: 'https://www.instagram.com/katya.ivshina/',
                    description: 'STEM Mentorship Program Launch'
                }
            ]
        },
        'creative-generalist': {
            title: 'Creative Generalist',
            subtitle: 'Where Art Meets Science',
            description: 'The intersection of dance and mathematics reveals beautiful patterns, symmetries, and rhythms. Through this unique combination, I explore how creative expression can enhance mathematical understanding.',
            highlights: [
                'Choreographed mathematical concepts',
                'Performed at academic conferences',
                'Created dance-based learning modules',
                'Bridged arts and sciences communities'
            ],
            instagramPosts: [
                {
                    url: 'https://www.instagram.com/katya.ivshina/',
                    description: 'Mathematical Patterns in Ballet'
                },
                {
                    url: 'https://www.instagram.com/katya.ivshina/',
                    description: 'Geometry and Movement Workshop'
                },
                {
                    url: 'https://www.instagram.com/katya.ivshina/',
                    description: 'Creative Expression in STEM Education'
                }
            ]
        }
    };
    
    const project = projectData[projectId];
    
    modalContent.innerHTML = `
        <h2>${project.title}</h2>
        <p class="project-subtitle">${project.subtitle}</p>
        <p class="project-description">${project.description}</p>
        
        <h3>Key Highlights</h3>
        <ul class="project-highlights">
            ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
        </ul>
        
        <h3>Related Instagram Posts</h3>
        <div class="instagram-posts">
            ${project.instagramPosts.map(post => `
                <div class="instagram-post">
                    <a href="${post.url}" target="_blank" rel="noopener noreferrer">
                        <span class="instagram-icon">📸</span>
                        <span class="post-description">${post.description}</span>
                        <span class="external-link">→</span>
                    </a>
                </div>
            `).join('')}
        </div>
    `;
    
    modal.style.display = 'block';
    
    // Add sound effect
    try {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);
        
        oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.05);
        
        gainNode.gain.setValueAtTime(0, audioContext.currentTime);
        gainNode.gain.linearRampToValueAtTime(0.03, audioContext.currentTime + 0.005);
        gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05);
        
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.05);
    } catch (e) {
        // Silently handle audio context issues
    }
}

function closeProjectModal() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'none';
}

// Close modal when clicking outside of it
window.onclick = function(event) {
    const modal = document.getElementById('projectModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

