// ============================================
// SCROLL ANIMATIONS
// ============================================

function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    const animatedElements = document.querySelectorAll('.scroll-animate');
    animatedElements.forEach(element => observer.observe(element));
}

// ============================================
// COUNTDOWN TIMER
// ============================================

function initCountdown() {
    // Set countdown to 3 days from now
    const countdownDate = new Date().getTime() + (3 * 24 * 60 * 60 * 1000);

    function updateCountdown() {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            // If countdown is over, restart it
            const newCountdownDate = new Date().getTime() + (3 * 24 * 60 * 60 * 1000);
            return;
        }

        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update DOM
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');
        const secondsEl = document.getElementById('seconds');

        if (daysEl) daysEl.textContent = String(days).padStart(2, '0');
        if (hoursEl) hoursEl.textContent = String(hours).padStart(2, '0');
        if (minutesEl) minutesEl.textContent = String(minutes).padStart(2, '0');
        if (secondsEl) secondsEl.textContent = String(seconds).padStart(2, '0');
    }

    // Update immediately
    updateCountdown();

    // Update every second
    setInterval(updateCountdown, 1000);
}

// ============================================
// SMOOTH SCROLLING
// ============================================

function initSmoothScrolling() {
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
}

// ============================================
// PARALLAX EFFECT FOR HERO
// ============================================

function initParallax() {
    const hero = document.querySelector('.hero');

    if (!hero) return;

    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const heroContent = hero.querySelector('.hero-content');

        if (heroContent && scrolled < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / window.innerHeight) * 0.5;
        }
    });
}

// ============================================
// CARD HOVER EFFECTS
// ============================================

function initCardEffects() {
    const cards = document.querySelectorAll('.course-card, .problem-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', function (e) {
            this.style.transform = 'translateY(-5px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function (e) {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ============================================
// CODE WINDOW TYPING ANIMATION
// ============================================

function initCodeAnimation() {
    const codeWindow = document.querySelector('.code-window');

    if (!codeWindow) return;

    // Add a subtle floating animation
    let direction = 1;
    let position = 0;

    setInterval(() => {
        position += direction * 0.5;

        if (position > 10 || position < -10) {
            direction *= -1;
        }

        codeWindow.style.transform = `perspective(1000px) rotateY(-5deg) translateY(${position}px)`;
    }, 50);
}

// ============================================
// CTA BUTTON TRACKING
// ============================================

function initCTATracking() {
    const ctaButtons = document.querySelectorAll('.btn-primary');

    ctaButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            // Add click animation
            this.style.transform = 'scale(0.95)';

            setTimeout(() => {
                this.style.transform = '';
            }, 150);

            // You can add analytics tracking here
            console.log('CTA Button clicked:', this.textContent);
        });
    });
}

// ============================================
// LOADING PERFORMANCE
// ============================================

function optimizeImages() {
    // Add lazy loading to images
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// SOCIAL PROOF ANIMATION
// ============================================

function initSocialProof() {
    const avatars = document.querySelectorAll('.avatar');

    avatars.forEach((avatar, index) => {
        // Add staggered animation
        setTimeout(() => {
            avatar.style.animation = 'fadeInScale 0.5s ease-out forwards';
        }, index * 100);
    });
}

// Add the animation to CSS dynamically
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInScale {
        from {
            opacity: 0;
            transform: scale(0);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);

// ============================================
// FLOATING ELEMENTS
// ============================================

function initFloatingElements() {
    // Add floating animation to certain elements
    const floatingElements = document.querySelectorAll('.course-number');

    floatingElements.forEach(element => {
        const randomDelay = Math.random() * 2;
        const randomDuration = 3 + Math.random() * 2;

        element.style.animation = `float ${randomDuration}s ease-in-out ${randomDelay}s infinite`;
    });
}

// Add float animation
const floatStyle = document.createElement('style');
floatStyle.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-10px);
        }
    }
`;
document.head.appendChild(floatStyle);

// ============================================
// INITIALIZE ALL FUNCTIONS
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 Initializing AI-Powered Laravel 12 Landing Page...');

    // Core animations and interactions
    initScrollAnimations();
    initSmoothScrolling();
    initCountdown();

    // Visual effects
    initParallax();
    initCardEffects();
    initCodeAnimation();
    initFloatingElements();

    // User interactions
    initCTATracking();
    initSocialProof();
    initFaqAccordion();

    // Performance optimizations
    optimizeImages();

    console.log('✅ Landing page initialized successfully!');
});

// ============================================
// FAQ ACCORDION
// ============================================

function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (question && answer) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all other items
                faqItems.forEach(otherItem => {
                    if (otherItem !== item) {
                        otherItem.classList.remove('active');
                        const otherAnswer = otherItem.querySelector('.faq-answer');
                        if (otherAnswer) {
                            otherAnswer.style.maxHeight = null;
                        }
                    }
                });

                // Toggle current item
                item.classList.toggle('active');
                if (!isActive) {
                    answer.style.maxHeight = answer.scrollHeight + "px";
                } else {
                    answer.style.maxHeight = null;
                }
            });
        }
    });
}

// ============================================
// HANDLE WINDOW RESIZE
// ============================================

let resizeTimer;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        console.log('Window resized, recalculating layouts...');
        // Add any resize-specific logic here
    }, 250);
});

// ============================================
// PERFORMANCE MONITORING
// ============================================

window.addEventListener('load', () => {
    // Check page load performance
    const perfData = performance.timing;
    const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

    console.log(`📊 Page loaded in ${pageLoadTime}ms`);

    // You can send this to analytics
    if (pageLoadTime > 3000) {
        console.warn('⚠️ Page load time is above 3 seconds. Consider optimization.');
    }
});

// ============================================
// SYLLABUS MODAL FUNCTIONALITY
// ============================================

const courseData = {
    'php8': {
        title: 'Modern PHP 8 & Database Mastery',
        description: 'Pelajari fondasi utama bahasa pemrograman PHP versi terbaru dan teknik pengelolaan database. Inilah modal utama kamu sebelum menjadi developer profesional.',
        syllabus: [
            {
                topic: "PHP 8 dan MySQL: Panduan CRUD Lengkap untuk Pemula",
                materials: [
                    { title: "Introduction", duration: "04:14" },
                    { title: "PHPMyAdmin", duration: "08:12" },
                    { title: "Create Table", duration: "08:46" },
                    { title: "Alter Table", duration: "04:41" },
                    { title: "Insert Data", duration: "13:18" },
                    { title: "Select", duration: "12:45" },
                    { title: "Select Filter", duration: "06:51" },
                    { title: "Update", duration: "11:18" },
                    { title: "Delete", duration: "04:41" },
                    { title: "Pengenalan MySQLi", duration: "05:07" },
                    { title: "Mengkoneksikan database", duration: "12:51" },
                    { title: "Select Query", duration: "09:00" },
                    { title: "Menampilkan data", duration: "08:53" },
                    { title: "Menampilkan data detail", duration: "10:50" },
                    { title: "Menampilkan data detail", duration: "10:32" },
                    { title: "Form Tambah Data", duration: "14:33" },
                    { title: "Insert data", duration: "13:49" },
                    { title: "Form Update", duration: "12:53" },
                    { title: "Update", duration: "05:27" },
                    { title: "Delete", duration: "06:52" },
                    { title: "Search", duration: "13:56" },
                    { title: "Pendahuluan & Connection", duration: "08:51" },
                    { title: "Insert", duration: "10:16" },
                    { title: "List & Search", duration: "11:09" },
                    { title: "Detail", duration: "04:46" },
                    { title: "Update & Delete", duration: "06:17" }
                ]
            }
        ]
    },
    'git': {
        title: 'Professional Workflow dengan Git',
        description: 'Kuasai cara mengelola kode dan kolaborasi tim menggunakan Git. Kamu akan belajar standar kerja yang digunakan oleh tim developer di perusahaan besar.',
        syllabus: [
            {
                topic: "Belajar Git Pemula",
                materials: [
                    { title: "GIT Pendahuluan", duration: "11:40" },
                    { title: "GIT Panduan Instalasi GIT", duration: "03:38" },
                    { title: "GIT Macam-macam Perintah GIT Dasar", duration: "02:44" },
                    { title: "GIT Menginisialisasi project dengan git init dan mencoba clone", duration: "06:12" },
                    { title: "GIT Menambahkan file baru, dan melakukan git add", duration: "03:47" },
                    { title: "GIT Reset perubahan file dengan git reset", duration: "01:54" },
                    { title: "GIT Melakukan commit, mempraktekan diff dan log", duration: "06:51" },
                    { title: "GIT Melakukan unggah file dengan git push", duration: "08:52" },
                    { title: "GIT Melakukan unduh file dengan git pull", duration: "03:16" },
                    { title: "GIT Bermain main dengan fetch dan branch", duration: "05:21" },
                    { title: "GIT Membuat branch baru, melakukan checkout", duration: "07:31" },
                    { title: "GIT Menyatukan branch satu dengan lainnya, git merge", duration: "03:44" },
                    { title: "GIT Menyelesaikan Konflik pada GIT", duration: "07:23" },
                    { title: "GIT Menandai milestone project dengan git tag", duration: "04:21" }
                ]
            }
        ]
    },
    'oop': {
        title: 'Mastering OOP PHP (Object Oriented Programming)',
        description: 'Pelajari cara menulis kode yang rapi, terstruktur, dan mudah dikembangkan. Konsep ini adalah kunci utama untuk memahami kecanggihan framework Laravel.',
        syllabus: [
            {
                topic: "Pengenalan OOP",
                materials: [
                    { title: "Apa itu OOP", duration: "09:05" },
                    { title: "Cara Mendefinisikan Class", duration: "08:06" },
                    { title: "Memahami Instance Object", duration: "05:16" },
                    { title: "Property pada Class OOP", duration: "10:37" },
                    { title: "Method pada Class OOP", duration: "07:32" },
                    { title: "Menggunakan Object", duration: "08:54" },
                    { title: "Mengenal Inheritance", duration: "05:39" },
                    { title: "Mendefinisikan Subclass", duration: "08:39" }
                ]
            },
            {
                topic: "MATERI LANJUTAN",
                materials: [
                    { title: "Extend dan Override", duration: "09:52" },
                    { title: "Visibilitas Object – Encapsulation", duration: "14:24" },
                    { title: "Setter dan Getter", duration: "08:59" },
                    { title: "Static Property dan Method", duration: "10:14" },
                    { title: "Pewarisan Static Property dan Method", duration: "08:07" },
                    { title: "Constant Class", duration: "06:01" },
                    { title: "Merujuk Parent Class", duration: "09:45" },
                    { title: "Construct Method", duration: "06:57" },
                    { title: "Construct Argument", duration: "08:05" },
                    { title: "Destruct Method", duration: "07:30" },
                    { title: "Clone Method", duration: "05:50" },
                    { title: "Autoload Method", duration: "08:50" },
                    { title: "PHP Namespace Overview", duration: "04:17" },
                    { title: "Menggunakan Namespace", duration: "07:18" },
                    { title: "Menggunakan Composer", duration: "08:19" },
                    { title: "Penjelasan Interface", duration: "04:50" },
                    { title: "Membuat Interface", duration: "06:35" },
                    { title: "Penjelasan Trait", duration: "03:11" },
                    { title: "Membuat Trait", duration: "03:55" },
                    { title: "Penjelasan Abstract Class", duration: "02:48" },
                    { title: "Membuat Abstract Class", duration: "04:11" },
                    { title: "Penjelasan Type Hint", duration: "06:04" },
                    { title: "Penjelasan Strict Declaration", duration: "04:49" },
                    { title: "Penjelasan Return Type", duration: "07:15" },
                    { title: "Penjelasan Closure", duration: "07:41" },
                    { title: "Membuat Closure", duration: "08:48" }
                ]
            }
        ]
    },
    'olx': {
        title: 'Membangun Marketplace dengan AI Assist',
        description: 'Praktek langsung membuat website marketplace (OLX Clone) menggunakan PHP yang dipercepat dengan bantuan AI. Belajar cara kerja cerdas sejak awal.',
        syllabus: [
            {
                topic: "PHP Native & MySQL: Membangun Website OLX Clone dengan AI Assist Windsurf",
                materials: [
                    { title: "Introduction", duration: "02:07" },
                    { title: "Mengapa AI", duration: "04:07" },
                    { title: "Apakah AI Akan Menggantikan Programmer", duration: "05:14" },
                    { title: "Skenario Yang Akan Dibuat", duration: "02:54" },
                    { title: "Tools yang dibutuhkan apa saja", duration: "03:21" },
                    { title: "Sekilas Tentang Agentic IDE", duration: "03:46" },
                    { title: "Apa Itu Database", duration: "03:38" },
                    { title: "Instalasi Windsurf Editor", duration: "04:12" },
                    { title: "Instalasi XAMPP", duration: "05:46" },
                    { title: "User Persona", duration: "06:23" },
                    { title: "Merancang Database", duration: "04:52" },
                    { title: "Konfigurasi Dulu", duration: "07:05" },
                    { title: "Relasi dan Table", duration: "15:05" },
                    { title: "Halaman Utama", duration: "11:51" },
                    { title: "Halaman Detail", duration: "06:11" },
                    { title: "Halaman Login dan Register", duration: "04:37" },
                    { title: "Halaman Pasang Iklan", duration: "08:36" },
                    { title: "Konfigurasi Awal", duration: "06:06" },
                    { title: "Skema Register", duration: "11:44" },
                    { title: "Skema Login", duration: "08:19" },
                    { title: "Kategori dinamis pada post ad", duration: "09:22" },
                    { title: "Location dinamis pada post ad", duration: "11:03" },
                    { title: "Post ad bagian 1", duration: "13:31" },
                    { title: "Post ad bagian 2", duration: "06:05" },
                    { title: "Testing pasang iklan", duration: "06:03" },
                    { title: "Skenario Halaman Beranda", duration: "08:42" },
                    { title: "Skenario Halaman Detail", duration: "09:26" },
                    { title: "Percantik Halaman Detail", duration: "05:51" },
                    { title: "Halaman Iklan Saya", duration: "07:36" },
                    { title: "Fitur Edit dan Hapus Iklan Saya", duration: "12:27" },
                    { title: "Session Notice dan Logout", duration: "04:12" },
                    { title: "Halaman Edit Profile", duration: "09:09" },
                    { title: "Testing Semua Fitur", duration: "08:54" },
                    { title: "Persiapan Launch Market", duration: "04:10" },
                    { title: "Hosting Bagian 1", duration: "16:36" },
                    { title: "Hosting Lanjutan dan Final Testing", duration: "08:01" }
                ]
            }
        ]
    },
    'laravel11': {
        title: 'Laravel: The Ultimate Fullstack Framework',
        description: 'Kuasai framework PHP paling populer saat ini. Kamu akan belajar membangun aplikasi web yang utuh, aman, dan berperforma tinggi dari nol.',
        syllabus: [
            {
                topic: "Router",
                materials: [
                    { title: "router - mengenal cara kerja router", duration: "05:05" },
                    { title: "router - kenali http method sebelum praktek", duration: "04:30" },
                    { title: "router - contoh penggunaan method get", duration: "07:36" },
                    { title: "router - cara kerja method post di laravel", duration: "08:55" },
                    { title: "router - mendapatkan data dari user menggunakan method post", duration: "06:27" },
                    { title: "router - mengubah data dengan method put dan cara kirim melalui form", duration: "06:00" },
                    { title: "router - menggunakan route parameter untuk menentukan data", duration: "04:12" },
                    { title: "router - menggunakan method patch untuk ubah data", duration: "04:02" },
                    { title: "router - menggunakan method delete dan kesimpulan", duration: "04:31" }
                ]
            },
            {
                topic: "Middleware",
                materials: [
                    { title: "middleware - pengenalan middleware", duration: "07:16" },
                    { title: "middleware - cek membership dengan middleware", duration: "08:55" },
                    { title: "middleware - melakukan aksi sebelum atau sesudah request dilanjutkan", duration: "05:43" },
                    { title: "middleware - mendefinisikan middleware pada tempatnya", duration: "03:32" },
                    { title: "middleware - satu route bisa banyak middleware", duration: "04:38" },
                    { title: "middleware - cara menerapkan middleware di banyak route", duration: "04:49" }
                ]
            },
            {
                topic: "Controller",
                materials: [
                    { title: "controller - cara membuat controller", duration: "07:02" },
                    { title: "controller - cara mendefinsikan data di controller", duration: "04:28" },
                    { title: "controller - cara menghubungkan router dengan controller", duration: "05:27" },
                    { title: "controller - mendapatkan data berdasarkan parameter di controller", duration: "05:34" },
                    { title: "controller - mengirimkan data dari user ke controller", duration: "05:39" },
                    { title: "controller - mengubah data properti dari class controller", duration: "07:22" },
                    { title: "controller - menghapus nilai property dari class controller", duration: "05:40" },
                    { title: "Controller - Menerapkan Middleware Controller Lebih Spesifik", duration: "04:35" }
                ]
            },
            {
                topic: "Request",
                materials: [
                    { title: "Request - Apa Saja Data Di Dalam Request", duration: "03:45" },
                    { title: "Request - Menggunakan Object Request Sebagai Dependency Injection", duration: "05:58" },
                    { title: "Request - Contoh Method Request Yg Bermanfaat", duration: "05:20" },
                    { title: "Request - Cara Mendapatkan Data", duration: "05:30" },
                    { title: "Request - Cara Mengolah Data Dari Request", duration: "07:33" },
                    { title: "Request - Method Khusus Untuk Data Input Dan Query Params", duration: "04:58" },
                    { title: "Request - Method Khusus Untuk Data Tanggal", duration: "05:31" },
                    { title: "Request - Cek Data Dari Request", duration: "04:04" },
                    { title: "Request - Mencari Request Yg Hilang Dan Menambahkannya", duration: "03:47" }
                ]
            },
            {
                topic: "Response",
                materials: [
                    { title: "Response - Mengenal Response Dan Response Pada Header", duration: "05:16" },
                    { title: "Response - Menambahkan Data Headers Untuk Cache", duration: "06:06" },
                    { title: "Response - Menambahkan Data Cookie Melalui Response", duration: "05:00" },
                    { title: "Response - Menghapus Data Cookie Dari Response", duration: "04:13" },
                    { title: "Redirect - Response Beralih Ke Halaman Lain", duration: "03:58" },
                    { title: "Redirect - Redirect Menggunakan Controller", duration: "04:00" },
                    { title: "Redirect - Redirect Ke Halaman External Atau Menggunakan Url", duration: "02:58" },
                    { title: "Response - Membuat Nilai Balik Dalam Bentuk Json", duration: "03:45" }
                ]
            },
            {
                topic: "View",
                materials: [
                    { title: "View - Cara Menampilkan Halaman", duration: "05:48" },
                    { title: "View - Membuat File View Lebih Terstruktur", duration: "05:17" },
                    { title: "View - Melempar Data Dari Controller Ke View", duration: "04:24" },
                    { title: "View - Cara Lain Mengirimkan Data Ke View", duration: "03:48" },
                    { title: "View - Berbagi Data Di Manapun View Berada", duration: "05:48" },
                    { title: "View - Membuat Service Provider Untuk Sharing Data", duration: "05:32" },
                    { title: "View - Membagikan Data Menggunakan View Composer", duration: "03:43" },
                    { title: "View - Memisahkan Logic Data Untuk View Composer", duration: "05:41" }
                ]
            },
            {
                topic: "Blade",
                materials: [
                    { title: "Blade - Cara Blade Menampilkan Data", duration: "06:36" },
                    { title: "Blade - Kondisi If", duration: "04:46" },
                    { title: "Blade - Cara Ternary If Di Blade", duration: "04:22" },
                    { title: "Blade - Switch Statement", duration: "04:39" },
                    { title: "Blade - Perulangan Di Dalam Blade", duration: "08:42" },
                    { title: "Blade - Penerapan Continue Dan Break Di Perulangan Blade", duration: "05:36" },
                    { title: "Blade - Ada Variabel Tersembunyi Dari Perulangan", duration: "06:16" },
                    { title: "Blade - Menggunakan Kondisi Di Dalam Attribute Class", duration: "04:06" },
                    { title: "Blade - Memecah Tampilan Blade Dengan Fungsi Include", duration: "05:19" }
                ]
            },
            {
                topic: "Layouting",
                materials: [
                    { title: "Layouting - Membuat Master Layout", duration: "05:01" },
                    { title: "Layouting - Membuat Content Dan Component Blade Dinamis", duration: "08:14" },
                    { title: "Layouting - Menampilkan Daftar Movie Dari Array", duration: "07:47" },
                    { title: "Layouting - Menampilkan Detail Movie", duration: "10:20" },
                    { title: "Layouting - Membuat Form Tambah Movie", duration: "08:48" },
                    { title: "Layouting - Menyimpan Data Movie Baru", duration: "09:54" },
                    { title: "Layouting - Menampilkan Halaman Edit Beserta Datanya", duration: "09:13" },
                    { title: "Layouting - Memperbarui Data Movie", duration: "06:00" },
                    { title: "Layouting - Memperbaiki Link Pada Icon Edit Movie", duration: "04:35" },
                    { title: "Layouting - Membuat Action Button Delete Movie Dan Menghapusnya", duration: "06:30" },
                    { title: "Layouting - Mengenal Layouting Dengan Component Anonymous", duration: "07:50" },
                    { title: "Layouting - Membuat Banyak Section Di Satu Component", duration: "05:14" },
                    { title: "Layouting - Mengirimkan Data Ke Child Component Anonymous", duration: "04:54" },
                    { title: "Layouting - Membuat Card Movie Dengan Class Component", duration: "06:39" },
                    { title: "Layouting - Mengirimkan Data Ke Class Component", duration: "04:30" },
                    { title: "Layouting - Memodifikasi Data Di Class Component", duration: "04:48" },
                    { title: "Layouting - Membuat Logic Validasi Di Class Component", duration: "04:09" },
                    { title: "Layouting - Membuat Method Bisa Diakses Di Component View", duration: "04:34" }
                ]
            },
            {
                topic: "Validation",
                materials: [
                    { title: "Validation - Cara Membuat Validasi Requets Input", duration: "06:19" },
                    { title: "Validation - Menampilkan Error Message Berdasarkan Field", duration: "06:44" },
                    { title: "Validation - Menambahkan Rules Validation Lebih Dari Satu", duration: "05:15" },
                    { title: "Validation - Mengembalikan Nilai Inputan Sebelumnya", duration: "04:42" },
                    { title: "Validation - Menulis Rules Validation Pada Tempatnya", duration: "06:09" },
                    { title: "Validation - Membuat Error Message Validasi Sendiri", duration: "04:50" }
                ]
            },
            {
                topic: "Session",
                materials: [
                    { title: "Session - Mengenal Session Dan Konfigurasinya", duration: "07:58" },
                    { title: "Session - Menyimpan Dan Menampilkan Data Session", duration: "04:50" },
                    { title: "Session - Menyimpan Data Array Dan Menampilkan Seluruh Isi Session", duration: "03:31" },
                    { title: "Session - Cara Menghapus Data Session", duration: "04:47" }
                ]
            },
            {
                topic: "Migration",
                materials: [
                    { title: "Configurasi Database di Laravel", duration: "06:17" },
                    { title: "Membuat Desain Tabel dengan Migration", duration: "08:14" },
                    { title: "Menambahkan Kolom Baru Pada Tabel", duration: "07:15" },
                    { title: "Memodifikasi Tabel yang Sudah Ada", duration: "06:12" },
                    { title: "Menghapus Kolom Menggunakan Migration", duration: "03:25" },
                    { title: "Menambahkan Index Kolom pada Tabel", duration: "04:34" }
                ]
            },
            {
                topic: "Seeder",
                materials: [
                    { title: "Membuat Contoh Data dengan Seeder", duration: "09:23" }
                ]
            },
            {
                topic: "Query",
                materials: [
                    { title: "Mendapatkan Data dengan Query Builder", duration: "07:56" }
                ]
            },
            {
                topic: "Query dan ORM",
                materials: [
                    { title: "Mendapatkan Data dengan Eloquent", duration: "06:34" },
                    { title: "Menambahkan Data ke DB dengan Query Builder", duration: "06:58" },
                    { title: "Menambahkan Data ke DB dengan Eloquent", duration: "05:46" },
                    { title: "Mengubah Data ke DB dengan Query Builder", duration: "04:10" },
                    { title: "Mengubah Data ke DB dengan Eloquent", duration: "04:34" },
                    { title: "Menghapus Data di DB with Query Builder and Eloquent", duration: "04:09" }
                ]
            },
            {
                topic: "Database Relationship",
                materials: [
                    { title: "persiapan desain tabel yang berelasi", duration: "05:59" },
                    { title: "one to one - menambahkan data yg berelasi", duration: "08:28" },
                    { title: "one to one - menampilkan data relasi", duration: "05:15" },
                    { title: "one to one - mengubah dan menghapus data", duration: "05:33" },
                    { title: "one to many - persiapan model dan migration", duration: "06:39" },
                    { title: "one to many - mendapatkan parent beserta child", duration: "07:35" },
                    { title: "one to many - Mendapatkan data dari relasi dengan filtering", duration: "09:19" },
                    { title: "many to many - persiapan tabel dan model", duration: "06:41" },
                    { title: "many to many - menambahkan data antar model", duration: "05:47" },
                    { title: "many to many - menghapus data antar model", duration: "03:35" },
                    { title: "many to many - menambahkan dan menghapus data antar model sekaligus", duration: "04:36" }
                ]
            },
            {
                topic: "Auth",
                materials: [
                    { title: "Register", duration: "06:28" },
                    { title: "Register Part 2", duration: "07:47" },
                    { title: "Login", duration: "06:32" },
                    { title: "Penerapan Middleware Auth Pada Halaman dan Logout", duration: "05:44" }
                ]
            }
        ]
    },
    'filament': {
        title: 'Filament Mastery: Membuat Admin Panel Kilat',
        description: 'Pelajari cara membangun dashboard admin yang canggih dan terlihat sangat profesional hanya dalam hitungan menit. Teknik ini akan sangat menghemat waktu kerjamu.',
        syllabus: [
            {
                topic: "Filament untuk Pemula: Laravel Admin Tanpa Pusing ",
                materials: [{ title: "Filament Laravel Admin", duration: "60:01" }]
            }
        ]
    },
    'laravel12': {
        title: 'Proyek Enterprise: Sistem HRIS Laravel 12',
        description: 'Tantang dirimu membangun sistem manajemen karyawan (HRIS) yang kompleks. Gunakan fitur-fitur terbaru Laravel 12 untuk menangani logika bisnis skala besar.',
        syllabus: [
            {
                topic: "Mengembangkan Sistem HRIS Seperti Talenta Menggunakan Laravel 12",
                materials: [
                    { title: "Pembukaan", duration: "01:07" },
                    { title: "Pengenalan Tools", duration: "03:37" },
                    { title: "Konteks & Demo Sisi Admin", duration: "05:31" },
                    { title: "Konteks & Demo Sisi Karyawan", duration: "05:16" },
                    { title: "Database Design (ERD)", duration: "04:48" },
                    { title: "Install Laravel", duration: "02:24" },
                    { title: "Setup ENV dan DB", duration: "05:09" },
                    { title: "Setup Migration", duration: "21:05" },
                    { title: "Run Migration & Bug Fixing", duration: "08:45" },
                    { title: "Seeding", duration: "32:19" },
                    { title: "Install Laravel Breeze", duration: "08:34" },
                    { title: "Install Dashboard Template", duration: "27:14" },
                    { title: "Mengatur Layouts", duration: "14:58" },
                    { title: "Fitur Tasks - Index", duration: "34:12" },
                    { title: "Fitur Tasks - Handle Create", duration: "15:12" },
                    { title: "Fitur Tasks - Install Flatpickr", duration: "07:09" },
                    { title: "Fitur Tasks - Handle Form Edit", duration: "17:19" },
                    { title: "Fitur Tasks - Handle Delete", duration: "06:07" },
                    { title: "Fitur Tasks - Marking Status", duration: "05:59" },
                    { title: "Fitur Tasks - Handle show", duration: "06:51" },
                    { title: "Fitur Employees - Index", duration: "21:21" },
                    { title: "Fitur Employees - Handle Create", duration: "24:04" },
                    { title: "Fitur Employees - Handle show", duration: "05:14" },
                    { title: "Fitur Employees - Update Data", duration: "25:34" },
                    { title: "Fitur Employees - Delete Data", duration: "04:37" },
                    { title: "Fitur Departments - Index", duration: "08:27" },
                    { title: "Fitur Departments - Create", duration: "09:44" },
                    { title: "FItur Departments - Edit", duration: "10:15" },
                    { title: "Fitur Departments - Delete", duration: "02:37" },
                    { title: "Fitur Roles - Index", duration: "04:33" },
                    { title: "Fitur Roles - Create", duration: "01:16" },
                    { title: "Fitur Roles - Update", duration: "06:51" },
                    { title: "Fitur Roles - Delete", duration: "01:36" },
                    { title: "Fitur Presences - Index", duration: "11:36" },
                    { title: "Fitur Presences - Create", duration: "00:10" },
                    { title: "Fitur Presences - Update", duration: "09:04" },
                    { title: "Fitur Presence - Delete", duration: "02:10" },
                    { title: "Fitur Payrolls - Index", duration: "15:12" },
                    { title: "Fitur Payrolls - Create", duration: "14:32" },
                    { title: "Fitur Payrolls - Update", duration: "11:41" },
                    { title: "Fitur Payrolls - Delete", duration: "03:31" },
                    { title: "Fitur Payrolls - Salary Slip", duration: "14:38" },
                    { title: "Fitur Leave Requests - Index", duration: "12:38" },
                    { title: "Fitur Leave Requests - Create", duration: "08:58" },
                    { title: "Fitur Leave Requests - Update", duration: "07:33" },
                    { title: "Fitur Leave Requests - Confirm Reject", duration: "07:08" },
                    { title: "Fitur Leave Requests - Delete", duration: "01:45" },
                    { title: "Konsep Auth & Authorization", duration: "02:52" },
                    { title: "Implementasi Middleware CheckRole", duration: "19:55" },
                    { title: "Memperbaiki Link Sidebar", duration: "03:22" },
                    { title: "Memperbaiki Link Sidebar - Minor Patch", duration: "01:08" },
                    { title: "Fitur Tasks Karyawan", duration: "03:24" },
                    { title: "Fitur Presence Karyawan", duration: "32:58" },
                    { title: "Fitur Payroll Karyawan", duration: "03:49" },
                    { title: "Fitur Leave Request Karyawan", duration: "08:10" },
                    { title: "Handle menu active", duration: "04:05" },
                    { title: "Mempercantik Insight - Total Data", duration: "14:41" },
                    { title: "Mempercantik Insight - Latest Task", duration: "04:57" },
                    { title: "Mempercantik Insight - Presence Chart", duration: "16:56" },
                    { title: "Finishing", duration: "02:13" }
                ]
            }
        ]
    },
    'restoran': {
        title: 'AI-Driven SaaS: Aplikasi Restoran & QR Order',
        description: 'Gunakan bantuan AI tingkat lanjut untuk membangun aplikasi sistem pesanan restoran berbasis QR. Proyek ini sangat berkelas untuk dijadikan portofolio unggulan.',
        syllabus: [
            {
                topic: "Mengembangkan Aplikasi Restoran Berbasis QR dengan Laravel 12 + Copilot AI",
                materials: [
                    { title: "Pendahuluan Gambaran Aplikasi", duration: "02:24" },
                    { title: "Demo Aplikasi - Pembayaran Tunai", duration: "07:19" },
                    { title: "Demo Aplikasi - Pembayaran QRIS", duration: "04:43" },
                    { title: "ER Diagram", duration: "05:22" },
                    { title: "Use Case Diagram", duration: "02:46" },
                    { title: "Instalasi", duration: "03:14" },
                    { title: "Setup ENV", duration: "02:40" },
                    { title: "Setup Repository Git", duration: "02:48" },
                    { title: "Struktur Folder", duration: "02:34" },
                    { title: "Migrations Table Users", duration: "04:53" },
                    { title: "Migrations & Seeder Table Roles", duration: "03:25" },
                    { title: "Migration Table Categories dan Items", duration: "02:58" },
                    { title: "Factory Seeder Categories dan Items", duration: "03:16" },
                    { title: "Factory Seeder Users", duration: "03:10" },
                    { title: "Migrations Table Orders and Order", duration: "03:29" },
                    { title: "Migrate", duration: "01:53" },
                    { title: "Models", duration: "08:48" },
                    { title: "Integrasi Template Menu", duration: "09:50" },
                    { title: "Integrasi Template Cart dan Checkout", duration: "03:18" },
                    { title: "Database Seeder", duration: "04:03" },
                    { title: "MenuController Index", duration: "18:38" },
                    { title: "MenuController AddToCart", duration: "11:23" },
                    { title: "MenuController Empty Cart", duration: "04:26" },
                    { title: "MenuController Update Quantity Cart", duration: "21:36" },
                    { title: "MenuController Remove Cart", duration: "11:33" },
                    { title: "MenuController Checkout Page", duration: "10:50" },
                    { title: "MenuController Checkout Payment Cash", duration: "22:40" },
                    { title: "MenuController Order Success", duration: "24:15" },
                    { title: "Konfigurasi Midtrans Payment Gateway", duration: "05:50" },
                    { title: "Implementasi Midtrans Payment Gateway", duration: "21:49" },
                    { title: "Integrasi Template Admin", duration: "12:07" },
                    { title: "Sidebar & Routes Admin", duration: "08:53" },
                    { title: "Menampilkan Item dengan DataTable", duration: "29:26" },
                    { title: "Store dan Update Data Item", duration: "24:48" },
                    { title: "Delete Data Item dan Alert", duration: "10:47" },
                    { title: "CRUD Role", duration: "07:35" },
                    { title: "CRUD Karyawan", duration: "22:40" },
                    { title: "CRUD Kategori", duration: "12:19" },
                    { title: "Daftar Pesanan", duration: "09:52" },
                    { title: "Melihat Detail Pesanan", duration: "22:54" },
                    { title: "Update Status Menu", duration: "07:56" },
                    { title: "Setup Autentikasi dengan Breeze", duration: "23:50" },
                    { title: "Role Cashier & Konfirmasi Pesanan T", duration: "07:12" },
                    { title: "Role Chef & Update Pesanan Menjadi", duration: "06:30" },
                    { title: "Memperbaiki UI dan Halaman Login", duration: "20:49" },
                    { title: "Recap Project & Pengembangan Selanjutnya", duration: "13:00" }
                ]
            }
        ]
    },
    'deploy': {
        title: 'Deployment Expert: Meng-online-kan Aplikasi',
        description: 'Tahap akhir yang sangat krusial. Pelajari cara menyewa server (VPS), setting keamanan SSL, hingga aplikasi buatanmu resmi online dan bisa diakses seluruh dunia.',
        syllabus: [
            {
                topic: "Introduction",
                materials: [
                    { title: "VPS, Domain Setting dan DNS", duration: "60:00" }
                ]
            }
        ]
    },
    'career': {
        title: 'Strategi Karir Full Stack Web Developer',
        description: 'Roadmap langkah demi langkah menembus industri tech, dari CV hingga negosiasi gaji.',
        syllabus: [
            {
                topic: "Introduction",
                materials: [{ title: "Strategi Karir Full Stack Web Developer", duration: "120:00" }]
            }
        ]
    },
    'branding': {
        title: 'Membangun Personal Branding untuk Programmer',
        description: 'Cara menonjol di antara ribuan developer lain dan dikejar recruiter melalui LinkedIn & GitHub.',
        syllabus: [
            {
                topic: "Introduction",
                materials: [{ title: "Personal Branding", duration: "120:00" }]
            }
        ]
    },
    'english': {
        title: 'English For Developer',
        description: 'Kuasai istilah teknis dan percakapan profesional untuk bekerja di perusahaan internasional.',
        syllabus: [
            {
                topic: "Introduction",
                materials: [{ title: "English For Developer!", duration: "120:00" }]
            }
        ]
    }
};

function formatDuration(minutesStr) {
    // Helper to format "mm:ss" string to total minutes if needed,
    // but here we just pass it through or format nicely.
    // Actually we need to sum "mm:ss".
    return minutesStr;
}

function calculateTotalDuration(syllabus) {
    let totalSeconds = 0;
    syllabus.forEach(topic => {
        topic.materials.forEach(material => {
            const [mins, secs] = material.duration.split(':').map(Number);
            totalSeconds += (mins * 60) + secs;
        });
    });

    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);

    return `${hours > 0 ? hours + ' Jam ' : ''}${minutes} Menit`;
}

function openSyllabus(courseId) {
    const modal = document.getElementById('syllabusModal');
    const data = courseData[courseId];

    if (!data) return;

    // Populate Title & Desc
    document.getElementById('modalTitle').textContent = data.title;
    document.getElementById('modalDesc').textContent = data.description;

    // Calculate Total Duration
    const totalDuration = calculateTotalDuration(data.syllabus);
    document.getElementById('totalDuration').textContent = totalDuration;

    // Build Accordion
    const accordionContainer = document.getElementById('syllabusAccordion');
    accordionContainer.innerHTML = ''; // Clear previous

    data.syllabus.forEach((topic, index) => {
        // Create Accordion Item
        const itemDiv = document.createElement('div');
        itemDiv.className = 'accordion-item';

        // Header
        const headerBtn = document.createElement('button');
        headerBtn.className = 'accordion-header';
        headerBtn.innerHTML = `
            <span class="accordion-title">${topic.topic}</span>
            <i class="fa-solid fa-chevron-down accordion-icon"></i>
        `;

        // Body
        const bodyDiv = document.createElement('div');
        bodyDiv.className = 'accordion-body';

        // Materials List
        const listUl = document.createElement('ul');
        listUl.className = 'materials-list';

        topic.materials.forEach(material => {
            const li = document.createElement('li');
            li.className = 'material-item';
            li.innerHTML = `
                <div class="material-title">
                    <i class="fa-solid fa-circle-play material-icon"></i>
                    <span>${material.title}</span>
                </div>
                <span class="material-duration">${material.duration}</span>
            `;
            listUl.appendChild(li);
        });

        bodyDiv.appendChild(listUl);
        itemDiv.appendChild(headerBtn);
        itemDiv.appendChild(bodyDiv);

        // Click Event
        headerBtn.addEventListener('click', () => {
            const isActive = itemDiv.classList.contains('active');

            // Close other items (Accordion behavior)
            const allItems = accordionContainer.querySelectorAll('.accordion-item');
            allItems.forEach(otherItem => {
                if (otherItem !== itemDiv && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherBody = otherItem.querySelector('.accordion-body');
                    otherBody.style.maxHeight = null;
                }
            });

            itemDiv.classList.toggle('active');

            if (!isActive) {
                bodyDiv.style.maxHeight = bodyDiv.scrollHeight + "px";
            } else {
                bodyDiv.style.maxHeight = null;
            }
        });

        accordionContainer.appendChild(itemDiv);

        // Auto-open first item
        if (index === 0) {
            // We need to wait for the element to be in the DOM to calculate scrollHeight correctly if we rely on it immediately,
            // but since we are appending line by line, it is in the DOM (in the container which is in the modal).
            // However, the modal is display:none initially.
            // We'll set the active class, and handle the height after the modal is shown.
            itemDiv.classList.add('active');
        }
    });

    // Show Modal
    modal.style.display = 'block';

    // Recalculate height for the active item now that modal is visible
    const activeItem = accordionContainer.querySelector('.accordion-item.active');
    if (activeItem) {
        const body = activeItem.querySelector('.accordion-body');
        body.style.maxHeight = body.scrollHeight + "px";
    }

    // Small delay to allow display:block to apply before adding opacity class for transition
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);

    // Add event listener to close on click outside
    window.addEventListener('click', outsideClick);
}

function closeSyllabus() {
    const modal = document.getElementById('syllabusModal');
    modal.classList.remove('show');

    setTimeout(() => {
        modal.style.display = 'none';
        // Reset Accordions? Not strictly necessary as they re-render on open.
    }, 300);

    window.removeEventListener('click', outsideClick);
}

function outsideClick(e) {
    const modal = document.getElementById('syllabusModal');
    if (e.target == modal) {
        closeSyllabus();
    }
}

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger-menu');
    const navLinks = document.getElementById('nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');

            // Toggle icon
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        // Close menu when link is clicked
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            });
        });
    }
});
