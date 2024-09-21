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

    // スライドのactiveクラスを更新
    slides.forEach((slide, idx) => {
        if (idx === currentSlide) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });

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
const nextButton = document.querySelector('.next');
const prevButton = document.querySelector('.prev');

// nextボタンが存在する場合のみイベントリスナーを追加
if (nextButton) {
    nextButton.addEventListener('click', nextSlide);
}

// prevボタンが存在する場合のみイベントリスナーを追加
if (prevButton) {
    prevButton.addEventListener('click', prevSlide);
}

// インジケータークリックによる手動スライド切り替え
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        updateSlide(index);
    });
});

// // 初期スライドにactiveクラスを付与
// slides[0].classList.add('active');



// ポップアップ要素を取得
const popup = document.getElementById('popup');
const popupImage1 = document.getElementById('popup-image1');
const popupImage2 = document.getElementById('popup-image2');
const popupTitle = document.getElementById('popup-title');
const popupDescription = document.getElementById('popup-description');
const popupUrl = document.getElementById('popup-url');
const popupUrl2 = document.getElementById('popup-url2');
const closeBtn = document.querySelector('.close-btn');

// 画像クリック時のイベント
document.querySelectorAll('.popup-image').forEach(img => {
    img.addEventListener('click', () => {
        popup.style.display = 'flex'; // ポップアップを表示
        popupImage1.src = img.src; // 画像1をポップアップに表示
        popupImage2.src = img.getAttribute('data-image2'); // 画像2を表示
        popupTitle.textContent = img.getAttribute('data-title'); // タイトルを設定
        popupDescription.textContent = img.getAttribute('data-description'); // 説明を設定
        popupUrl.href = img.getAttribute('data-url'); // リンクを設定
        popupUrl2.href = img.getAttribute('data-url2'); // リンクを設定
    });
});



// 閉じるボタンクリック時のイベント
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none'; // ポップアップを非表示
});

// ポップアップ外クリック時のイベント
window.addEventListener('click', (event) => {
    if (event.target === popup) {
        popup.style.display = 'none'; // ポップアップを非表示
    }
});

