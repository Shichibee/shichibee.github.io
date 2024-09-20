let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
const dots = document.querySelectorAll('.dot');

// スライドの表示を更新
function updateSlide(index) {
    const slidesContainer = document.querySelector('.slides');
    slidesContainer.style.transform = `translateX(-${index * 100}%)`;
    // 現在のスライドを更新
    currentSlide = index;

    // インジケーターのアクティブ状態を更新
    updateIndicators();
}

// インジケーターの表示を更新
function updateIndicators() {
  dots.forEach((dot, idx) => {
      if (idx === currentSlide) {
          dot.classList.add('active');
      } else {
          dot.classList.remove('active');
      }
  });
}


// 次のスライド
function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        updateSlide(currentSlide + 1);
    } else {
        updateSlide(0);
    }
}

// 前のスライド
function prevSlide() {
    if (currentSlide > 0) {
        updateSlide(currentSlide - 1);
    } else {
        updateSlide(totalSlides - 1);
    }
}

// 自動でスライドを切り替え
setInterval(nextSlide, 3000);

// ボタンによる手動スライド切り替え
document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

// インジケータークリックによる手動スライド切り替え
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
      updateSlide(index);
  });
});