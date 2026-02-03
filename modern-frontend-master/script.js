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
    'js-dasar': {
        title: 'JavaScript Dasar',
        description: 'Pelajari fondasi utama bahasa pemrograman JavaScript, dari tipe data hingga fitur-fitur terbaru. Cocok untuk pemula yang ingin memahami konsep dasar JavaScript secara mendalam.',
        syllabus: [
            {
                topic: "Tipe Data Primitif Dan Developer Tools Console",
                materials: [
                    { title: "Tipe Data Primitif Dan Developer Tools Console", duration: "06:11" },
                    { title: "Tipe Data Numbers", duration: "06:34" },
                    { title: "Apa Itu Nilai Nan", duration: "03:22" },
                    { title: "Variabel Dan Kata Kunci Let", duration: "07:23" },
                    { title: "Memperbarui Nilai Number Di Dalam Variabel", duration: "04:09" },
                    { title: "Kata Kunci Const Dan Var Untuk Variabel", duration: "04:59" },
                    { title: "Tipe Data Booleani", duration: "03:31" },
                    { title: "Tips Memberikan Nama Variabel Seperti Anak Sendiri", duration: "05:22" }
                ]
            },
            {
                topic: "Tipe Data String dan Lainnya",
                materials: [
                    { title: "Mengenal Tipe Data String", duration: "05:49" },
                    { title: "Penjelasan Index Pada String Dan Panjang Karakter", duration: "08:30" },
                    { title: "Method-Method Javascript Yang Memudahkan Hidup Kita", duration: "04:46" },
                    { title: "Method Dan Argument (Parameter)", duration: "05:20" },
                    { title: "Template Literals Save Your Life", duration: "05:47" },
                    { title: "Mengenal Null Dan Undefined", duration: "02:54" },
                    { title: "Mengenal Object Math Dan Angka Acak", duration: "03:51" }
                ]
            },
            {
                topic: "JavaScript Logic Pembuat Keputusan",
                materials: [
                    { title: "Bagaimana Membuat Keputusan Di Dalam Code", duration: "03:10" },
                    { title: "Operator Pembanding", duration: "04:41" },
                    { title: "Perbedaan Jumlah Sama Dengan Dua Dan Tiga", duration: "06:19" },
                    { title: "Console Alert Dan Prompt", duration: "04:27" },
                    { title: "Menjalankan Javascript Di Dalam File", duration: "06:55" },
                    { title: "If Statement Pertama Yg Kamu Pelajari", duration: "06:42" },
                    { title: "Else If Statement Makin Banyak Pilihan", duration: "05:43" },
                    { title: "Else Adalah Pilihan Terakhir", duration: "04:48" },
                    { title: "Cek Kondisi Berlapis Lebih Aman", duration: "07:31" },
                    { title: "Operator Logic And", duration: "05:39" },
                    { title: "Operator Logic Or", duration: "04:27" },
                    { title: "Operator Logic Not", duration: "02:44" },
                    { title: "Switch Sebagai Alternatif If Statement", duration: "05:03" }
                ]
            },
            {
                topic: "JavaScript Struktur Data Array",
                materials: [
                    { title: "Mengenal Struktur Data Array", duration: "08:12" },
                    { title: "Mendapatkan Nilai Dengan Index Dan Mengubah Isinya", duration: "07:38" },
                    { title: "Method Array Push Dan Pop", duration: "06:25" },
                    { title: "Method Array Unshift Dan Shift", duration: "04:22" },
                    { title: "Beberapa Method Array Yang Sering Digunakan", duration: "08:20" },
                    { title: "Beberapa Method Array Yang Sering Digunakan Lagi", duration: "08:32" },
                    { title: "Mengubah Nilai Const Dengan Array", duration: "04:04" },
                    { title: "Array Multidimensi Atau Nested Array", duration: "04:59" }
                ]
            },
            {
                topic: "JavaScript Struktur Data Object",
                materials: [
                    { title: "Apa Itu Object", duration: "04:47" },
                    { title: "Cara Membuat Struktur Data Object", duration: "06:17" },
                    { title: "Cara Memanggil Data Dari Object", duration: "05:18" },
                    { title: "Cara Membuat Object Berjalan", duration: "03:40" },
                    { title: "Cara Memanggil Object Di Dalam Array", duration: "03:50" }
                ]
            },
            {
                topic: "JavaScript Perulangan menggunakan For Loop",
                materials: [
                    { title: "Pengenalan Perulangan", duration: "06:47" },
                    { title: "Contoh Lain Perulangan For", duration: "06:24" },
                    { title: "Awas Perulangan Tanpa Henti", duration: "02:46" },
                    { title: "Mendapatkan Data Dari Array Dengan Perulangan", duration: "04:00" },
                    { title: "Pengenalan Nested Loop", duration: "06:59" },
                    { title: "Mendapatkan Data Dari Nested Array Dengan Nested Loop", duration: "05:43" },
                    { title: "Perulangan Menggunakan Perintah While", duration: "04:12" },
                    { title: "Kata Kunci Break Untuk Memberhentikan Perulangan", duration: "06:04" },
                    { title: "Membuat Game Tebak Tebakkan Angka Dengan While", duration: "07:44" },
                    { title: "Cara Elegan Melakukan Perulangan Pada Array For Of", duration: "05:43" },
                    { title: "Melakukan Perulangan Pada Object Dengan Elegan For In", duration: "05:38" }
                ]
            },
            {
                topic: "Function dan Method pada JavaScript",
                materials: [
                    { title: "Pengenalan Function Di Javascript", duration: "06:32" },
                    { title: "Mendefinisikan Dan Menjalankan Function", duration: "07:08" },
                    { title: "Argument Dan Parameter Dalam Function", duration: "06:56" },
                    { title: "Multiple Parameter Dan Argument", duration: "05:42" },
                    { title: "Statement Return Pada Function", duration: "08:28" },
                    { title: "Visibilitas Variabel Sesuai Scope Atau Ruang Lingkup", duration: "09:13" },
                    { title: "Blocked Scope Variabel", duration: "09:06" },
                    { title: "Lexical Scope", duration: "05:01" },
                    { title: "Function Expressions", duration: "05:28" },
                    { title: "Function Sebagai Argument Function Lain", duration: "05:09" },
                    { title: "Function Bernilai Balik Function", duration: "05:27" },
                    { title: "Definisi Sebuah Method", duration: "05:10" },
                    { title: "This Adalah Keyword Sakti", duration: "04:37" },
                    { title: "Try And Catch Adalah Penyelamat", duration: "07:31" }
                ]
            },
            {
                topic: "Callback Function dan Method-method milik Array",
                materials: [
                    { title: "Foreach Method", duration: "09:23" },
                    { title: "Map Method", duration: "06:45" },
                    { title: "Sebelum Lanjut Kenalan Dengan Arrow Function", duration: "06:26" },
                    { title: "Return Secara Implisit Dari Arrow Function", duration: "04:23" },
                    { title: "Memahami Settimeout Dan Setinterval", duration: "08:01" },
                    { title: "Memilih Data Tertentu Di Dalam Array Dengan Filter Method", duration: "09:38" },
                    { title: "Menentukan Benar Atau Salah Pada Array Dengan Every Dan Some Method", duration: "05:49" },
                    { title: "Mendapatkan Satu Nilai Sesuai Kondisi Dari Sebuah Array Dengan Reduce", duration: "12:41" },
                    { title: "Object This Di Dalam Arrow Function Mengarah Pada Object Global Window", duration: "04:49" }
                ]
            },
            {
                topic: "Beberapa Fitur Terbaru dari JavaScript",
                materials: [
                    { title: "Mengatur Default Value Pada Function", duration: "08:24" },
                    { title: "Mengubah Array Atau Object Menjadi Deret Value Argument Function", duration: "04:20" },
                    { title: "Menggabungkan Nilai Array Dengan Array Lagi", duration: "05:24" },
                    { title: "Menggabungkan Property Object Dengan Object Lainnya", duration: "03:31" },
                    { title: "Malas Bikin Parameter Banyak Bisa Pakai Rest Param", duration: "07:38" },
                    { title: "Bongkar Element Array Ke Masing-Masing Variabel Dengan Mudah", duration: "03:26" },
                    { title: "Bongkar Juga Properti Object Ke Masing-Masing Variabel", duration: "05:43" },
                    { title: "Bongkar Properti Object Bisa Dilakukan Di Dalam Function", duration: "04:48" }
                ]
            }
        ]
    },
    'js-dom': {
        title: 'JavaScript DOM Mastery',
        description: 'Pelajari cara memanipulasi halaman web secara langsung menggunakan Document Object Model. Dari dasar hingga event handling, semua ada di sini.',
        syllabus: [
            {
                topic: "Mengenal Document Object Model",
                materials: [
                    { title: "Apa Itu Dom", duration: "04:34" },
                    { title: "Melihat Isi Document Object Model", duration: "09:17" },
                    { title: "Mendapatkan Element Html Berdasarkan Id", duration: "09:24" },
                    { title: "Mendapatkan Element Html Berdasarkan Tag Dan Class", duration: "11:09" },
                    { title: "Lebih Mudah Memilih Element Dengan Menggunakan Queryselector", duration: "07:43" },
                    { title: "Memahami Innerthtml, Innertext Dan Textcontent", duration: "12:35" },
                    { title: "Mendapatkan Attribute Yang Dimiliki Element Html", duration: "06:05" },
                    { title: "Melakukan Styling Dengan Javascript Dom", duration: "08:03" },
                    { title: "Memanfaatkan Classlist Untuk Styling Dengan Dom", duration: "08:04" },
                    { title: "Menjelajahi Element Parent, Child Dan Sibling", duration: "10:20" },
                    { title: "Memahami Append Dan Appendchild", duration: "11:37" },
                    { title: "Memahami Remove Dan Removechild", duration: "04:41" },
                    { title: "Latihan Memanggil Pokemon Dengan Dom", duration: "10:18" }
                ]
            },
            {
                topic: "Mengenal Event DOM - Membuat Web Lebih Interaktif",
                materials: [
                    { title: "Pengantar Event Dom", duration: "05:53" },
                    { title: "Menjalankan Event Pada Inline Element", duration: "09:48" },
                    { title: "Menjalankan Event Melalui Property Dom", duration: "07:15" },
                    { title: "Mengenal Fungsi Addeventlistener", duration: "07:32" },
                    { title: "Latihan Addeventlistener Untuk Generate Color", duration: "07:23" },
                    { title: "Manfaatkan Keyword This Pada Event Dom", duration: "07:44" },
                    { title: "Belajar Keyboard Event Dan Mengenal Object Dalam Event", duration: "12:14" },
                    { title: "Mengenal Event Preventdefault", duration: "07:11" },
                    { title: "Praktek Input Realtime Dengan Event Dan Dom", duration: "06:55" },
                    { title: "Event Input Dan Change Pada Form", duration: "06:22" },
                    { title: "Mengenal Event Bubbling", duration: "05:44" },
                    { title: "Mengenal Event Delegation", duration: "07:14" }
                ]
            },
            {
                topic: "Latihan DOM Membuat Papan Skor",
                materials: [
                    { title: "Latihan Dom Membuat Papan Skor Bag 1", duration: "11:34" },
                    { title: "Latihan Dom Membuat Papan Skor Bag 2", duration: "06:44" },
                    { title: "Latihan Dom Membuat Papan Skor Bag 3", duration: "07:56" },
                    { title: "Latihan Dom Membuat Papan Skor Bag 4", duration: "08:02" }
                ]
            }
        ]
    },
    'tailwind-dasar': {
        title: 'Tailwind Dasar - Desain Web Kilat Jaman Sekarang',
        description: 'Bosankah dengan CSS yang rumit dan makan waktu? Dalam waktu singkat, kamu akan menguasai framework CSS Tailwind untuk membangun antarmuka pengguna (UI) yang responsif dan indah dengan cepat.',
        syllabus: [
            {
                topic: "Tailwind Dasar",
                materials: [
                    { title: "Styling Website dengan Tailwind CSS", duration: "120:00" }
                ]
            }
        ]
    },
    'react-fundamental': {
        title: 'React Fundamental',
        description: 'Pelajari fondasi React dari awal hingga mahir. Dari instalasi hingga routing, kuasai semua konsep dasar yang dibutuhkan untuk membangun aplikasi web modern.',
        syllabus: [
            {
                topic: "Belajar ReactJS",
                materials: [
                    { title: "Introduction - Instalasi", duration: "09:54" },
                    { title: "Pengenalan Project React", duration: "12:26" },
                    { title: "Pengenalan Component Dasar", duration: "05:14" },
                    { title: "JSX", duration: "08:04" },
                    { title: "Props pada Child Component", duration: "06:43" },
                    { title: "Blog sederhana menggunakan JSON", duration: "09:20" },
                    { title: "Fitur Filter Data dan Pengenalan useState", duration: "11:34" },
                    { title: "Mengembalikan Value ke Parent melalui Props", duration: "11:10" },
                    { title: "Conditional Rendering", duration: "05:14" },
                    { title: "Conditional Rendering 2", duration: "08:02" },
                    { title: "onClick Methods", duration: "08:52" },
                    { title: "Lifecycle dan useEffect", duration: "11:25" },
                    { title: "Fetch API dengan useEffect", duration: "06:29" },
                    { title: "Multiple useEffect", duration: "03:40" },
                    { title: "Dasar State Management dengan useContext", duration: "12:17" },
                    { title: "Menginstall React Router", duration: "09:35" },
                    { title: "Halaman About", duration: "03:12" },
                    { title: "Layouting dan Children Routes", duration: "10:26" },
                    { title: "Halaman Blog", duration: "07:48" },
                    { title: "Dynamic Parameter Route dan Menampilkan Artikel", duration: "12:56" },
                    { title: "React Router Data Loader", duration: "09:37" },
                    { title: "Error Page", duration: "03:47" },
                    { title: "Dynamic Style untuk NavLink", duration: "09:22" }
                ]
            }
        ]
    },
    'react-hook': {
        title: 'React Hook - Effect dan Data Fetching',
        description: 'Kuasai konsep useEffect dan data fetching di React. Pelajari cara mengelola lifecycle component, menghindari infinite loop, dan membangun aplikasi dengan fetch data yang efisien.',
        syllabus: [
            {
                topic: "React.js - Belajar Hook Effect dan Data Fetching",
                materials: [
                    { title: "Memahami Component Lifecycle Sebelum Belajar Effect", duration: "03:44" },
                    { title: "Cara Yang Harus Dihindari Saat Melakukan Fetch Dan Update State", duration: "08:24" },
                    { title: "Gunakan Useeffect Untuk Mencegah Infinite loop", duration: "03:34" },
                    { title: "Mengenal Effect Lebih Lanjut", duration: "04:10" },
                    { title: "Menggunakan Async Function Di React", duration: "05:03" },
                    { title: "Memanfaatkan State Untuk Loading Progress", duration: "03:21" },
                    { title: "Cara Handle Error Dengan Baik", duration: "08:15" },
                    { title: "Mengenal Dependency Array Pada Effect", duration: "04:57" },
                    { title: "Contoh Proses Sinkronisasi Useeffect Di React", duration: "04:13" },
                    { title: "Memanfaatkan Dependency Array Untuk Fetch Data", duration: "04:03" },
                    { title: "Mendapatkan Id Movie Yang Dipilih", duration: "05:05" },
                    { title: "Membuat Component Untuk Melihat Id Movie", duration: "05:29" },
                    { title: "Cara Mendapatkan Detail Movie Melalui Fetch Menggunakan Effect", duration: "06:02" },
                    { title: "Menampilkan Detail Movie Di Component Movie Detail", duration: "07:48" },
                    { title: "Menambahkan Daftar Tonton Ke Watched List", duration: "07:47" },
                    { title: "Menyimpan Nilai Rating Saat Tambah Data Movie", duration: "05:47" },
                    { title: "Mendapatkan Kumpulan Nilai User Rating Dan Hapus Daftar Tonton", duration: "06:02" },
                    { title: "Membuat Effect Untuk Membuat Judul Page Dinamis", duration: "04:08" },
                    { title: "Memahami Lifecycle Unmount Pada Effect", duration: "04:16" },
                    { title: "Menghindari Fetch Setiap Update State Query", duration: "06:01" }
                ]
            }
        ]
    },
    'next-js': {
        title: 'Next.js dengan Headless CMS',
        description: 'Kuasai Next.js dari dasar hingga integrasi dengan Headless CMS. Pelajari routing, server rendering, styling dengan Tailwind, deployment, dan cara mengelola konten dengan Strapi.',
        syllabus: [
            {
                topic: "Pengenalan dan Setup Next.js",
                materials: [
                    { title: "Pengenalan Next.Js Beserta Jenisnya", duration: "06:14" },
                    { title: "Apa Saja Yang Akan Dipelajari Dan Pengenalan Project", duration: "06:30" },
                    { title: "Cara Setup Project Next.Js Dari Awal", duration: "09:05" },
                    { title: "Cara Membuat Halaman Web", duration: "05:40" },
                    { title: "Cara Menggunakan Typescript Di Project Next.Js", duration: "05:21" }
                ]
            },
            {
                topic: "Routing Dan Layout",
                materials: [
                    { title: "Cara Membuat Url Atau Memetakan Route Halaman", duration: "05:12" },
                    { title: "Latihan Menambahkan Route Halaman", duration: "04:16" },
                    { title: "Fitur Nested Layout Pada App Router", duration: "04:36" },
                    { title: "Mengenal Server Rendering Di Next.Js", duration: "06:06" },
                    { title: "Perbedaan Server Component Dan Client Component", duration: "05:24" },
                    { title: "Menjalankan Project Next.Js Mode Production", duration: "06:16" },
                    { title: "Menggunakan Component Link Untuk Tautan", duration: "05:11" },
                    { title: "Mengenal Prefetch Di Next.Js", duration: "04:59" },
                    { title: "Latihan Navigasi Dan Fungsi Layout", duration: "04:15" }
                ]
            },
            {
                topic: "Styling Dan Component",
                materials: [
                    { title: "Teknik Styling Di Next.Js", duration: "07:01" },
                    { title: "Install Tailwindcss Dan Konfigurasinya", duration: "05:36" },
                    { title: "Latihan Styling Layout", duration: "07:36" },
                    { title: "Memanfaatkan Color Pallete Tailwindcss", duration: "05:01" },
                    { title: "Membuat Component Reusable Di Next.Js", duration: "04:40" },
                    { title: "Memanfaatkan Import Alias Untuk Perpendek Path", duration: "04:06" },
                    { title: "Menggunakan Static Assets", duration: "04:32" },
                    { title: "Membuat Card Post List", duration: "05:46" },
                    { title: "Mengubah Post Card List Menjadi Component", duration: "04:09" },
                    { title: "Cara Terbaik Menggunakan Font Di Next.Js", duration: "05:30" },
                    { title: "Menggunakan Font Variable Dengan Tailwindcss", duration: "04:50" }
                ]
            },
            {
                topic: "Mengelola Konten Markdown",
                materials: [
                    { title: "Cara Membaca File Markdown Di Next.Js", duration: "04:52" },
                    { title: "Menampilkan Data Markdown Pada Component", duration: "04:10" },
                    { title: "Menampilkan Style Markdown Yang Sesuai Dengan Tailwindcss", duration: "03:50" },
                    { title: "Mengenal Data Meta Dari Markdown - Front-Matter", duration: "04:55" },
                    { title: "Memisahkan Layer Data Dengan Layer Ui", duration: "04:58" },
                    { title: "Membuat Route Dinamis Untuk Post", duration: "04:06" },
                    { title: "Membuat Fungsi Untuk Mendapatkan List Content Post", duration: "06:02" },
                    { title: "Menampilkan Data Post Pada Halaman Blog", duration: "03:40" },
                    { title: "Menambahkan Data Deskripsi Dan Cara Mendapatkan Link Sebuah Post", duration: "02:54" }
                ]
            },
            {
                topic: "SEO, Metadata, Dan Fitur Tambahan",
                materials: [
                    { title: "Cara Menggunakan Meta Data Untuk Seo Di Next.Js", duration: "05:51" },
                    { title: "Template Meta Data Agar Title Menjadi Dinamis Setiap Halaman", duration: "03:57" },
                    { title: "Membuat Metadata Lebih Dinamis Untuk Seo Friendly", duration: "03:18" },
                    { title: "Menambahkan Favicon Dan Metadata Lainnya", duration: "04:19" },
                    { title: "Membuat Component Client Untuk Share Link", duration: "06:16" },
                    { title: "Membuat Fungsi Copy Link Dengan Client Component", duration: "05:59" },
                    { title: "Percantik Halaman Web Dengan Icon Berbasis Tailwindcss", duration: "03:35" }
                ]
            },
            {
                topic: "Deploy Project Next.Js",
                materials: [
                    { title: "Persiapan Deploy Project Next.Js", duration: "04:23" },
                    { title: "Deploy Project Next.Js Di Vercel", duration: "04:25" },
                    { title: "Persiapan Deploy Static Page Next.Js", duration: "04:10" },
                    { title: "Deploy Project Static Page Next.Js Di Self Hosting", duration: "04:33" }
                ]
            },
            {
                topic: "Integrasi Headless CMS Dengan Strapi",
                materials: [
                    { title: "Mengenal Teknologi Headless Cms", duration: "04:15" },
                    { title: "Persiapan Headless Cms Untuk Membuat Konten", duration: "08:19" },
                    { title: "Cara Mendapatkan Data Dari Strapi Di Next.Js", duration: "07:02" },
                    { title: "Menentukan Data Response Dari Strapi Dengan Parameter", duration: "06:02" },
                    { title: "Persiapan Menampilkan Data List Post Dari Strapi", duration: "04:22" },
                    { title: "Mendapatkan Gambar Dan Data Lainnya Dari Strapi", duration: "04:21" },
                    { title: "Cara Mendapatkan Satu Data Dari Strapi Berdasarkan Slug", duration: "04:07" },
                    { title: "Menampilkan Single Post Dari Strapi", duration: "04:25" },
                    { title: "Refactor Kode Fetch Data Post Dari Strapi", duration: "06:19" },
                    { title: "Mendapatkand Data Slug Untuk Digenerate Static Page", duration: "05:23" }
                ]
            },
            {
                topic: "Optimasi, Revalidasi, Dan Pagination",
                materials: [
                    { title: "Setup Eslint Untuk Menjaga Kualitas Kode Program", duration: "05:37" },
                    { title: "Menggunakan Image Component Dari Next", duration: "05:00" },
                    { title: "Proses Konversi File Gambar Dengan Component Image", duration: "04:29" },
                    { title: "Mengenal Fungsi Dynamic Parameter", duration: "05:26" },
                    { title: "Mengenal Fungsi Force Dynamic Pada Component", duration: "04:34" },
                    { title: "Menampilkan Halaman Not Found", duration: "03:49" },
                    { title: "Mengenal Fungsi Revalidate Untuk Fetch Data", duration: "04:16" },
                    { title: "Menggunakan Force Update Dan Revalidate Di Fetch", duration: "04:36" },
                    { title: "Menyiapkan Jalan Untuk Webhook Konten Dari Cms", duration: "07:16" },
                    { title: "Menggunakan On Demand Revalidation", duration: "05:33" },
                    { title: "Mendapatkan Data Dari Query Parameter Untuk Pagination", duration: "07:29" },
                    { title: "Menggunakan Parameter Pagination Strapi", duration: "04:24" },
                    { title: "Mendapatkan Nilai Total Halaman Dari Pagination", duration: "03:54" },
                    { title: "Memisahkan Component Pagination Dan Logic Batas Page", duration: "06:21" }
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
