// 5G related extra JavaScript features
document.addEventListener('DOMContentLoaded', function () {
  // 章節導航按鈕 - 滾動到接近底部時顯示
  const chapterNav = document.querySelector('.chapter-nav');
  if (chapterNav) {
    function checkScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;

      // 當滾動到距離底部 300px 以內時顯示
      const scrollThreshold = 300;
      const distanceFromBottom = documentHeight - (scrollTop + windowHeight);

      if (distanceFromBottom <= scrollThreshold) {
        chapterNav.classList.add('visible');
      } else {
        chapterNav.classList.remove('visible');
      }
    }

    // 監聽滾動事件
    window.addEventListener('scroll', checkScroll);
    // 初始檢查
    checkScroll();
  }

  // Add smooth scrolling effect
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Add page load animation
  const content = document.querySelector('.md-content');
  if (content) {
    content.style.opacity = '0';
    content.style.transform = 'translateY(20px)';
    setTimeout(() => {
      content.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      content.style.opacity = '1';
      content.style.transform = 'translateY(0)';
    }, 100);
  }

  // 5G related interactive effects
  console.log('🚀 cndi-free5gc Documentation loaded successfully!');
}); 