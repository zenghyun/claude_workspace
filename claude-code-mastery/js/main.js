/**
 * 개발자 웹 이력서 - 메인 JavaScript
 * 모듈 패턴을 사용하여 기능별로 구성
 * 다크모드 고정 (토글 제거)
 */

// 모바일 메뉴 관리자
const MobileMenu = {
    init() {
        this.menuBtn = document.getElementById('mobile-menu-btn');
        this.menu = document.getElementById('mobile-menu');
        this.navLinks = document.querySelectorAll('#mobile-menu a');

        if (this.menuBtn && this.menu) {
            this.menuBtn.addEventListener('click', this.toggle.bind(this));

            // 링크 클릭 시 메뉴 닫기
            this.navLinks.forEach(link => {
                link.addEventListener('click', this.close.bind(this));
            });

            // 외부 클릭 시 메뉴 닫기
            document.addEventListener('click', (e) => {
                if (!this.menu.contains(e.target) && !this.menuBtn.contains(e.target)) {
                    this.close();
                }
            });
        }
    },

    toggle() {
        const isOpen = this.menu.classList.toggle('hidden');
        // 아이콘 변경 (햄버거 <-> X)
        this.menuBtn.innerHTML = !isOpen
            ? `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
               </svg>`
            : `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
               </svg>`;
    },

    close() {
        this.menu.classList.add('hidden');
        this.menuBtn.innerHTML = `<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
        </svg>`;
    }
};

// 네비게이션 활성화 상태 관리자
const NavHighlighter = {
    init() {
        this.sections = document.querySelectorAll('section[id]');
        this.navLinks = document.querySelectorAll('.nav-link');

        // 스크롤 이벤트 (쓰로틀링 적용)
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    this.highlight();
                    ticking = false;
                });
                ticking = true;
            }
        });

        // 초기 하이라이트
        this.highlight();
    },

    highlight() {
        const scrollY = window.scrollY;

        this.sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                this.navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
};

// 스크롤 애니메이션 관리자 (Intersection Observer)
const ScrollAnimator = {
    init() {
        const fadeElements = document.querySelectorAll('.fade-in-up');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        fadeElements.forEach(el => observer.observe(el));
    }
};

// 헤더 스크롤 효과 (배경 변화)
const HeaderScroll = {
    init() {
        const header = document.querySelector('header');

        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('shadow-lg');
                header.classList.add('bg-dark/95');
            } else {
                header.classList.remove('shadow-lg');
                header.classList.remove('bg-dark/95');
            }
        });
    }
};

// 부드러운 스크롤 (앵커 링크)
const SmoothScroll = {
    init() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
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
    }
};

// 앱 초기화
document.addEventListener('DOMContentLoaded', () => {
    MobileMenu.init();
    NavHighlighter.init();
    ScrollAnimator.init();
    HeaderScroll.init();
    SmoothScroll.init();

    console.log('이력서 페이지 로드 완료 - 다크 테마');
});
