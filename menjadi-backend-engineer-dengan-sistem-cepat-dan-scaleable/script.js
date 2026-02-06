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
    'node-npm': {
        title: 'Belajar Dasar Node.js dan NPM',
        description: 'Panduan untuk mempelajari dasar-dasar Node.js dan NPM di JavaScript dalam pemrograman web',
        syllabus: [
            {
                topic: "Belajar Dasar Node.js dan NPM",
                materials: [
                    { title: "Perkenalan Apa Itu Node.Js", duration: "06:44" },
                    { title: "Hal Yang Bisa Dilakukan Node.Js", duration: "05:58" },
                    { title: "Cara Install Node.Js", duration: "02:30" },
                    { title: "Berinteraksi Dengan Repl Milik Node.Js", duration: "04:47" },
                    { title: "Menjalankan File Javascript Dengan Node.Js", duration: "04:13" },
                    { title: "Memperlajari Object Process Dan Args Pada Node.Js", duration: "10:54" },
                    { title: "Latihan Menggunakan Modul Filesystem Node.Js", duration: "13:42" },
                    { title: "Bekerja Dengan Module Exports Di Node.Js", duration: "10:06" },
                    { title: "Cara Lain Memanggil File Javascript Dengan Require", duration: "05:31" },
                    { title: "Apa Itu Npm", duration: "02:47" },
                    { title: "Cara Menginstall Package Dan Menggunakannya", duration: "08:15" },
                    { title: "Menggunakan Global Package", duration: "04:04" },
                    { title: "Pentingnya File Package.Json", duration: "07:11" },
                    { title: "Cara Menginstall Package Dari Package.Json", duration: "05:26" },
                    { title: "Latihan Membuat Project Berbasis Node.Js Dengan Package Npm", duration: "14:49" }
                ]
            }
        ]
    },
    'express-js': {
        title: 'Belajar Express Js',
        description: 'Panduan untuk mempelajari dasar-dasar Express.js di JavaScript dalam pemrograman web',
        syllabus: [
            {
                topic: "Belajar Dasar Express.js",
                materials: [
                    { title: "Belajar Dasar Express.js", duration: "06:11" },
                    { title: "Membuat Aplikasi Dengan Express.Js Pertama Kali", duration: "07:43" },
                    { title: "Mengenal Object Request Dan Response", duration: "05:36" },
                    { title: "Membuat Route Untuk Menentukan Response Tertentu", duration: "09:17" },
                    { title: "Mempelajari Route Parameter Di Express.Js", duration: "08:00" },
                    { title: "Mendapatkan Nilai Dari Query String", duration: "05:50" },
                    { title: "Otomatis Restart Project Node.Js Dengan Nodemon", duration: "02:55" }
                ]
            }
        ]
    },
    'mongo-db': {
        title: 'Belajar MongoDB',
        description: 'Panduan untuk mempelajari dasar belajar MongoDB',
        syllabus: [
            {
                topic: "Belajar MongoDB",
                materials: [
                    { title: "Perkenalan Database Dan Mongodb", duration: "03:50" },
                    { title: "Perbedaan Database Sql Dan Nosql", duration: "06:39" },
                    { title: "Kenapa Belajar Mongodb", duration: "05:32" },
                    { title: "Cara Install Mongodb", duration: "06:07" },
                    { title: "Cara Menjalankan Mongodb Dan Menggunakan Mongo Shell", duration: "05:36" },
                    { title: "Apa Itu Bson", duration: "05:50" },
                    { title: "Perintah Insert Di Mongodb", duration: "05:23" },
                    { title: "Perintah Find Dan Findone Di Mongodb", duration: "09:02" },
                    { title: "Perintah Updateone Dan Updatemany Di Mongodb", duration: "07:17" },
                    { title: "Perintah Deleteone Dan Deletemany Di Mongodb", duration: "04:40" },
                    { title: "Beberapa Query Operator Yang Perlu Kamu Coba", duration: "08:40" }
                ]
            }
        ]
    },
    'express-auth': {
        title: 'Belajar Konsep Auth dan Implementasi di Express.js',
        description: 'Panduan untuk mempelajari konsep Auth dan implementasi di Express.js',
        syllabus: [
            {
                topic: "Belajar Konsep Auth dan Implementasi di Express.js",
                materials: [
                    { title: "Memahami Perbedaan Authentication Dan Authorization", duration: "03:56" },
                    { title: "(Bukan) Cara Terbaik Simpan Password", duration: "04:18" },
                    { title: "Syarat Kriptografi Yang Aman Untuk Password", duration: "05:35" },
                    { title: "Mengenal Cara Kerja Salt Untuk Hash", duration: "06:09" },
                    { title: "Mengenal Cara Kerja Bcrypt Untuk Hash Password", duration: "11:25" },
                    { title: "Persiapan Auth Dengan Membuat Model Dan Halaman Register", duration: "06:57" },
                    { title: "Cara Menyimpan Data Registrasi Dengan Bcrypt", duration: "04:58" },
                    { title: "Implementasi Fungi Login Dengan Bcrypt", duration: "06:19" },
                    { title: "Menyimpan Data Auth Dengan Session", duration: "06:09" },
                    { title: "Implementasi Logout Dengan Menghapus Session", duration: "04:28" },
                    { title: "Membuat Middleware Untuk Halaman Wajib Login", duration: "04:40" },
                    { title: "Refactor Fungsi Bcrypt Register Dan Login", duration: "08:05" }
                ]
            }
        ]
    },
    'nestjs': {
        title: 'Belajar Menguasai NestJS, Framework JavaScript Populer',
        description: 'Panduan untuk mempelajari menguasai Nest.js',
        syllabus: [
            {
                topic: "Memulainya dari awal",
                materials: [
                    { title: "Apa Itu Nest.Js Dan Setup Awal", duration: "05:41" },
                    { title: "Penjelasan Library Yg Dibutuhkan Dan Setup Typescript", duration: "04:34" },
                    { title: "Cara Membuat Controller Di Nest.Js", duration: "05:15" },
                    { title: "Menjalankan Project Nest.Js", duration: "04:36" },
                    { title: "Aturan Main (Naming Convention) Nest.Js", duration: "06:18" },
                    { title: "Menentukan Route Pada Controller", duration: "03:52" }
                ]
            },
            {
                topic: "Membuat Project dengan Nest CLI",
                materials: [
                    { title: "Menggunakan Nest Cli Untuk Project Todo App", duration: "05:54" },
                    { title: "Membuat File Module Dengan Nest Cli", duration: "06:30" },
                    { title: "Membuat File Controller Dengan Nest Cli", duration: "03:20" },
                    { title: "Cara Mendefinisikan Route Di Sebuah Controller", duration: "04:17" },
                    { title: "Mengenal Software Untuk Mencoba Berbagai Method Http", duration: "03:34" }
                ]
            },
            {
                topic: "Cara Kerja Validasi Data pada Pipe",
                materials: [
                    { title: "Mendapatkan Data Yang Dikirim Dalam Request", duration: "06:54" },
                    { title: "Mengenal Cara Kerja Pipe Di Nest.Js", duration: "03:44" },
                    { title: "Implementasi Validasi Data Request Beserta Aturannya", duration: "06:52" },
                    { title: "Cara Kerja Validation Pipe", duration: "05:54" },
                    { title: "Bagaimana Parameter Menyajikan Data Sesuai Dengan Type Nya", duration: "07:09" }
                ]
            },
            {
                topic: "Arsitektur Nest.js - Service dan Repository",
                materials: [
                    { title: "Mengenal Service Dan Repository Di Nestjs", duration: "05:07" },
                    { title: "Membuat Repository Beserta Methodnya", duration: "05:15" },
                    { title: "Melanjutkan Method Pada Repository", duration: "04:22" },
                    { title: "Membuat Service Untuk Memanggil Repository", duration: "03:51" },
                    { title: "Implementasi Service Dan Repository Melalui Controller", duration: "07:54" },
                    { title: "Menampilkan Pesan Error Dengan Exception", duration: "05:45" },
                    { title: "Memahami Prinsip Inversion Of Control", duration: "07:09" },
                    { title: "Sebelum Menggunakan Dependency Injection", duration: "06:38" },
                    { title: "Implementasi Dependency Injection", duration: "07:05" }
                ]
            },
            {
                topic: "Arsitektur Nest.js - Dependency Module",
                materials: [
                    { title: "Project Yang Akan Kita Buat", duration: "03:44" },
                    { title: "Buat Project Nest Dan Generate Modul-Modulnya", duration: "05:54" },
                    { title: "Dependency Injection Antar Modul", duration: "04:33" },
                    { title: "Memanggil Method Dari Lain Modul", duration: "04:47" },
                    { title: "Menjalankan Banyak Modul Dalam Satu Controller", duration: "05:47" }
                ]
            },
            {
                topic: "Persiapan Project",
                materials: [
                    { title: "Menguasai Nest.Js Dengan Studi Kasus", duration: "03:26" },
                    { title: "Persiapan Project Dan Desain Api", duration: "03:58" },
                    { title: "Merancang Module Yang Dibutuhkan", duration: "04:46" },
                    { title: "Generate Module Yang Dibutuhkan Dalam Project Nest", duration: "03:24" }
                ]
            },
            {
                topic: "Membuat Entitas dengan TypeORM dan Repository",
                materials: [
                    { title: "Persiapan Database Yang Akan Digunakan", duration: "03:59" },
                    { title: "Setup Koneksi Database", duration: "06:13" },
                    { title: "Membuat Entitas Dengan Typeorm", duration: "04:44" },
                    { title: "Melihat Isi Database Dari Hasil Membuat Entitas", duration: "06:44" },
                    { title: "Mengenal Cara Kerja Typeorm Beserta Decoratornya", duration: "06:46" },
                    { title: "Catatan Tentang Repository Pada Nest", duration: "03:52" },
                    { title: "Membuat Method Controller Untuk Create User Dan Validasinya", duration: "06:25" }
                ]
            },
            {
                topic: "Membuat dan Menyimpan data User",
                materials: [
                    { title: "Proses Menyimpan Data User Melalui Service Dan Repository", duration: "07:10" },
                    { title: "Alur Kerja Logic Yang Sudah Dibuat", duration: "05:29" },
                    { title: "Mengenal Method-Method Hook Di Nest", duration: "03:57" },
                    { title: "Membuat Method Service Untuk Mendapatkan Data User", duration: "05:01" },
                    { title: "Membuat Method Service Untuk Memperbarui Data User", duration: "06:38" },
                    { title: "Membuat Method Service Untuk Menghapus Data User", duration: "03:41" },
                    { title: "Mencari Data Berdasarkan Paramter Dan Query Di Database", duration: "06:46" },
                    { title: "Menghapus Data Yang Ada Di Database", duration: "04:09" },
                    { title: "Mengubah Data Yang Ada Di Database", duration: "05:49" },
                    { title: "Catatan Tentang Error Handling Dengan Exception", duration: "04:08" }
                ]
            },
            {
                topic: "Mengenal Interceptor untuk Mengurai data",
                materials: [
                    { title: "Cara Memilih Properti Entitas Yang Muncul Pada Response", duration: "05:50" },
                    { title: "Solusi Yang Direkomendasikan Untuk Mengubah Data Response", duration: "03:55" },
                    { title: "Mengenal Interceptor Di Nest.Js", duration: "10:35" },
                    { title: "Mengurai Data Response Melalui Dto Pada Interceptor", duration: "04:58" },
                    { title: "Membuat Dto Pada Interceptor Menjadi Dimanis", duration: "03:37" },
                    { title: "Refactor Dekorator Untuk Interceptor", duration: "04:39" },
                    { title: "Menggunakan Interceptor Secara Global Di Controller", duration: "04:06" },
                    { title: "Improve Type Safety Pada Serialize Interceptor", duration: "04:53" }
                ]
            },
            {
                topic: "Authentication dengan Nest.js",
                materials: [
                    { title: "Memahami Cara Kerja Auth Di Nest.Js Yg Akan Dibuat", duration: "04:57" },
                    { title: "Setup Modul Dan Service Untuk Auth", duration: "04:14" },
                    { title: "Fungsi Registrasi Dan Cara Mengamankan Password", duration: "07:24" },
                    { title: "Membuat Salt Dan Melakukan Hash Untuk Password", duration: "06:06" },
                    { title: "Menyimpan Data User Dengan Password Sudah Dihashed", duration: "05:46" },
                    { title: "Membuat Service Proses Login", duration: "08:04" },
                    { title: "Setup Session Dan Cara Kerja Cookie", duration: "04:51" },
                    { title: "Contoh Menggunakan Session", duration: "06:27" },
                    { title: "Implementasi Register Dan Login Dengan Session", duration: "05:05" },
                    { title: "Implementasi Logout Dengan Menghapus Session", duration: "04:34" },
                    { title: "Memisahkan Modul Auth Dari Modul User", duration: "08:31" },
                    { title: "Membuat Custom Decorator Untuk Current User", duration: "05:13" },
                    { title: "Persiapan Decorator Dan Interceptor Untuk Current User", duration: "08:43" },
                    { title: "Cara Menghubungkan Interceptor Ke Dependency Injection", duration: "04:31" },
                    { title: "Membuat Interceptor Menjadi Global", duration: "04:38" },
                    { title: "Mencegah Request Masuk Tanpa Otentikasi", duration: "05:33" }
                ]
            },
            {
                topic: "Belajar Unit Testing dan Integration Testing di Nest.js",
                materials: [
                    { title: "Perkenalan Unit Testing", duration: "06:21" },
                    { title: "Setup Awal File Unit Test", duration: "10:06" },
                    { title: "Menguji Method Register Di Auth Service Harus Bekerja Dengan Benar", duration: "06:27" },
                    { title: "Menguji Muncul Pesan Error Saat Registrasi Email Yg Sama", duration: "04:54" },
                    { title: "Menguji Muncul Pesan Error Saat Login Dengan Invalid Email", duration: "03:18" },
                    { title: "Menguji Saat Password Salah Dan Berhasil Login", duration: "05:30" },
                    { title: "Refactor Mock Data Untuk Auth Service", duration: "05:05" },
                    { title: "Implementasi Mock Data Dari Refactor Sebelumnya", duration: "04:00" },
                    { title: "Setup Mock Unit Testing Auth Controller", duration: "06:54" },
                    { title: "Menguji Method Login Berhasil Di Auth Controller", duration: "06:58" },
                    { title: "Mengenal Integration Testing Atau E2e", duration: "07:23" },
                    { title: "Langkah Awal Membuat File E2e Test", duration: "07:06" },
                    { title: "Perbaiki Setup Integration Test Modul Auth", duration: "05:37" },
                    { title: "Cara Lain Implementasi Pipe Dan Middleware Secara Global", duration: "06:43" },
                    { title: "Setup Env Variable Untuk Project Nest", duration: "06:22" },
                    { title: "Perbaiki Error Database Khusus Untuk Test", duration: "06:32" },
                    { title: "Menguji Fungsi Register Kemudian Login Secara E2e", duration: "04:45" }
                ]
            },
            {
                topic: "Relasi Table Database dengan TypeORM",
                materials: [
                    { title: "Menyiapkan Request Handler Item Dengan Dto-Nya", duration: "04:38" },
                    { title: "Menerapkan Validator Pada Item Dto", duration: "03:39" },
                    { title: "Membuat Service Create Item", duration: "05:38" },
                    { title: "Penjelasan Jenis-Jenis Relasi Database", duration: "07:05" },
                    { title: "Setup Relasi Onetomany Pada Entitas Dengan Typeorm", duration: "06:37" },
                    { title: "Menyimpan Data Item Beserta Usernya", duration: "05:37" },
                    { title: "Mengubah Response Create Item Dengan Class-Transform", duration: "05:42" }
                ]
            },
            {
                topic: "Authorization di Nest.js",
                materials: [
                    { title: "Persiapan Approve Data Item Dari Admin", duration: "05:46" },
                    { title: "Mencoba Membuat Data Item Dengan Status Approved False", duration: "06:30" },
                    { title: "Mengenal Perbedaan Authentication Dengan Authorization Dulu", duration: "05:20" },
                    { title: "Menyiapkan User Admin Dan Middleware Role Admin", duration: "06:38" },
                    { title: "Membuat Middleware Current User", duration: "07:32" },
                    { title: "Menerapkan Current User Middleware", duration: "03:58" }
                ]
            },
            {
                topic: "Menggunakan Query builder di Nest.js",
                materials: [
                    { title: "Persiapan Api Endpoint Item Dengan Query Builder", duration: "05:26" },
                    { title: "Menggunakan Query Builder Di Typeorm", duration: "04:19" },
                    { title: "Menambahkan Query Builder Dengan Query Parameter", duration: "05:35" },
                    { title: "Menerapkan Opsional Pada Dto Dan Menerapkan Query Operator Like", duration: "04:56" }
                ]
            }
        ]
    },
    'security': {
        title: 'Security for Developer (Bangun aplikasimu menjadi super tangguh)',
        description: 'Keamanan Siber Dasar: Lindungi Data dan Sistem Kamu. Kursus ini mengajarkan dasar-dasar Keamanan Siber, mulai dari pilar utama (CIA Triad, Availability) hingga ancaman nyata dan cara menanganinya',
        syllabus: [
            {
                topic: "Security for Developer",
                materials: [
                    { title: "Main Course", duration: "120:00" }
                ]
            }
        ]
    },
    'deploy': {
        title: 'Deploy JavaScript Project di cPanel',
        description: 'Panduan cara deploy aplikasi JavaScript ke cPanel dengan mudah dan cepat.',
        syllabus: [
            {
                topic: "Deploy",
                materials: [
                    { title: "Deploying Javascript", duration: "60:00" }
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
