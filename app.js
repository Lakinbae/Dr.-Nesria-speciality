document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamic Header & Mobile Navbar Injection (Price Menu Removed)
    const headerHTML = `
    <div class="bg-teal-900 text-white text-xs sm:text-sm py-2 px-4">
        <div class="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
            <div class="flex items-center gap-4">
                <span><i class="fa-solid fa-location-dot text-amber-400 mr-1"></i> Mekanisa Abo, MRH Bldg, 1st Floor</span>
                <span class="hidden md:inline"><i class="fa-solid fa-clock text-amber-400 mr-1"></i> Mon - Sat: 8:00 AM - 6:00 PM</span>
            </div>
            <div class="flex items-center gap-4">
                <a href="tel:0920603410" class="hover:text-amber-400 transition"><i class="fa-solid fa-phone text-amber-400 mr-1"></i> 0920 603 410</a>
                <a href="tel:0910979978" class="hover:text-amber-400 transition">/ 0910 979 978</a>
            </div>
        </div>
    </div>
    <header class="sticky top-0 z-50 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-gray-100 dark:border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
            <a href="index.html" class="flex items-center gap-3">
                <div class="w-10 h-10 rounded-full bg-teal-800 flex items-center justify-center text-white font-bold text-xl">
                    <i class="fa-solid fa-tooth text-amber-400"></i>
                </div>
                <div>
                    <span class="block font-bold text-lg sm:text-xl text-teal-900 dark:text-amber-400 tracking-tight">Dr. Nesria</span>
                    <span class="block text-xs text-gray-500 dark:text-gray-400 tracking-wider uppercase">Speciality Dental</span>
                </div>
            </a>
            
            <!-- Desktop Navigation Links -->
            <nav class="hidden lg:flex items-center gap-8 font-medium text-sm">
                <a href="index.html" class="hover:text-teal-800 dark:hover:text-amber-400 transition">Home</a>
                <a href="about.html" class="hover:text-teal-800 dark:hover:text-amber-400 transition">About Doctor</a>
                <a href="services.html" class="hover:text-teal-800 dark:hover:text-amber-400 transition">Treatments</a>
                <a href="cases.html" class="hover:text-teal-800 dark:hover:text-amber-400 transition">Gallery & Reviews</a>
                <a href="contact.html" class="hover:text-teal-800 dark:hover:text-amber-400 transition">Contact</a>
            </nav>

            <div class="flex items-center gap-3">
                <!-- Dark Theme Toggle Button -->
                <button id="theme-toggle" class="w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-700 dark:text-amber-400 hover:scale-105 transition" aria-label="Toggle Theme">
                    <i id="theme-icon" class="fa-solid fa-moon"></i>
                </button>
                
                <!-- Call Now Button (Desktop) -->
                <a href="tel:0920603410" class="hidden sm:inline-flex items-center justify-center bg-teal-600 text-white px-5 py-2.5 rounded-full font-medium text-sm shadow-md hover:bg-teal-700 transition">
                    <i class="fa-solid fa-phone-volume mr-2"></i> Call Now
                </a>

                <!-- Hamburger Menu Button (Mobile) -->
                <button id="mobile-menu-btn" class="lg:hidden w-10 h-10 rounded-full bg-gray-100 dark:bg-slate-800 flex items-center justify-center text-gray-700 dark:text-amber-400 hover:scale-105 transition" aria-label="Toggle Mobile Menu">
                    <i id="hamburger-icon" class="fa-solid fa-bars text-lg"></i>
                </button>
            </div>
        </div>

        <!-- Mobile Dropdown Navigation Menu (Hidden by default) -->
        <div id="mobile-menu" class="hidden lg:hidden bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-800 px-6 py-4 shadow-xl transition-all">
            <nav class="flex flex-col gap-4 font-medium text-base">
                <a href="index.html" class="hover:text-teal-800 dark:hover:text-amber-400 transition py-1 border-b border-gray-100 dark:border-slate-800">Home</a>
                <a href="about.html" class="hover:text-teal-800 dark:hover:text-amber-400 transition py-1 border-b border-gray-100 dark:border-slate-800">About Doctor</a>
                <a href="services.html" class="hover:text-teal-800 dark:hover:text-amber-400 transition py-1 border-b border-gray-100 dark:border-slate-800">Treatments</a>
                <a href="cases.html" class="hover:text-teal-800 dark:hover:text-amber-400 transition py-1 border-b border-gray-100 dark:border-slate-800">Gallery & Reviews</a>
                <a href="contact.html" class="hover:text-teal-800 dark:hover:text-amber-400 transition py-1">Contact & Payment</a>
                <a href="tel:0920603410" class="mt-2 inline-flex items-center justify-center bg-teal-600 text-white px-5 py-3 rounded-xl font-medium text-sm shadow-md hover:bg-teal-700 transition">
                    <i class="fa-solid fa-phone-volume mr-2"></i> Call 0920 603410
                </a>
            </nav>
        </div>
    </header>`;

    // 2. Dynamic Footer Injection
    const footerHTML = `
    <footer class="bg-slate-900 text-gray-400 py-12 border-t border-slate-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
                <p class="font-bold text-white text-lg mb-2">Dr. Nesria Speciality Dental Clinic</p>
                <p class="text-xs text-gray-400">Advanced dental care, pain-free treatments, and precision orthodontics in Mekanisa, Addis Ababa.</p>
            </div>
            <div>
                <p class="font-bold text-white text-sm mb-2">Social Channels</p>
                <div class="flex flex-col gap-1 text-xs text-gray-400">
                    <a href="#" target="_blank" class="hover:text-amber-400 transition"><i class="fa-brands fa-telegram mr-1"></i> Telegram: Dr.Nesria speciality Dental clinic</a>
                    <a href="#" target="_blank" class="hover:text-amber-400 transition"><i class="fa-brands fa-tiktok mr-1"></i> TikTok: Dr.Nesria your Smile Specialis</a>
                </div>
            </div>
            <div>
                <p class="font-bold text-white text-sm mb-2">Team & Emergency</p>
                <p class="text-xs text-gray-400">Main Dentist: Dr. Nesria Kamil</p>
                <p class="text-xs text-gray-400">Nurse: Mihret</p>
                <p class="text-xs text-amber-400 mt-1">Sun: Emergency Cases Only</p>
            </div>
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 border-t border-slate-800 text-center text-xs text-gray-500">
            © 2026 Dr. Nesria Speciality Dental Clinic. All Rights Reserved.
        </div>
    </footer>`;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // 3. Mobile Hamburger Menu Toggle Logic
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerIcon = document.getElementById('hamburger-icon');

    if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
            if (mobileMenu.classList.contains('hidden')) {
                hamburgerIcon.className = 'fa-solid fa-bars text-lg';
            } else {
                hamburgerIcon.className = 'fa-solid fa-xmark text-lg';
            }
        });
    }

    // 4. Dark Theme Persistence Logic
    const themeToggleBtn = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        if(themeIcon) themeIcon.className = 'fa-solid fa-sun text-amber-400';
    } else {
        document.documentElement.classList.remove('dark');
        if(themeIcon) themeIcon.className = 'fa-solid fa-moon';
    }

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            if (document.documentElement.classList.contains('dark')) {
                document.documentElement.classList.remove('dark');
                localStorage.theme = 'light';
                themeIcon.className = 'fa-solid fa-moon';
            } else {
                document.documentElement.classList.add('dark');
                localStorage.theme = 'dark';
                themeIcon.className = 'fa-solid fa-sun text-amber-400';
            }
        });
    }
});
