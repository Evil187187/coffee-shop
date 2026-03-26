document.addEventListener('DOMContentLoaded', () => {
    const nav = document.getElementById('mainNav');
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('navLinks');
    const links = document.querySelectorAll('.nav-list a');

    // Скролл-эффект для шапки (изменение прозрачности)
    const handleNavScroll = () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', handleNavScroll);

    // Мобильное меню (бургер)
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        navLinks.classList.toggle('active');
        // Запрещаем скролл body при открытом меню
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });

    // Плавный скролл и автоматическое закрытие меню при клике на ссылку
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            // Сброс мобильного меню
            burger.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';

            if (targetElement) {
                const offsetTop = targetElement.offsetTop - 80; // учитываем высоту липкой шапки
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Кнопка наверх
    const scrollUpBtn = document.getElementById('scrollTop');
    if (scrollUpBtn) {
        scrollUpBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Имитация обработки формы
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalText = btn.textContent;
            
            btn.textContent = 'Отправляем...';
            btn.disabled = true;
            
            // Имитация задержки сети
            setTimeout(() => {
                btn.textContent = 'Успешно отправлено!';
                btn.style.background = '#000';
                contactForm.reset();
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = 'var(--accent)';
                    btn.disabled = false;
                }, 3000);
            }, 1500);
        });
    }
});