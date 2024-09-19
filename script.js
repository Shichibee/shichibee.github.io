document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const galleryItems = document.querySelectorAll('.gallery-item');
  

    const initialFilter = 'all';
    document.querySelector(`.filter-buttons button[data-filter="${initialFilter}"]`).classList.add('active');
  

    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
  
        // 全てのボタンからactiveクラスを削除
        filterButtons.forEach(btn => btn.classList.remove('active'));
  
        // クリックされたボタンにactiveクラスを追加
        this.classList.add('active');
  
        galleryItems.forEach(item => {
          if (filter === 'all' || item.getAttribute('data-tags').includes(filter)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  });


/**
  * ステップ1
  * ファイルの更新日を取得
  */
// HTMLファイルの最終更新日を取得
const last = new Date(document.lastModified);
/**
  * ステップ2
  * 取得した日付データを「年・月・日」に分けて取得
  */
// 取得した日付を「年・月・日」に分けて変数に格納する
const year = last.getFullYear();
const month = last.getMonth() + 1;
const date = last.getDate();
/**
  * ステップ3
  * 「月・日」の値が1桁の場合は先頭に「0」を追加して2桁に修正
  */
// 月・日の値を修正した後に格納する変数を用意する
let fixedMonth = month;
let fixedDate = date;
// 月の値が10より小さい場合は先頭に「0」を追加
if (month < 10) {
fixedMonth = "0" + month;
}
// 日の値が10より小さい場合は先頭に「0」を追加
if (date < 10) {
fixedDate = "0" + date;
}
/**
  * ステップ4
  * 上書き用の日付のテキストを作成
  */
// 表示用のテキストを作成 例: 2024年2月8日
const viewDateText = year + "年" + month + "月" + date + "日";
// データ用の文字列を作成 例: 2024-02-08
const datetimeText = year + "-" + fixedMonth + "-" + fixedDate;
/**
  * ステップ5
  * HTMLの要素に値を上書き
  */
// 更新日の表示先のHTML要素「time」タグを取得
const target = document.getElementById('modified_date');
// timeタグの内容を上書きする 例: 2024年2月8日
target.textContent = viewDateText;
// timeタグのdatetime属性を追加する 例: 2024-02-08
target.setAttribute("datetime", datetimeText);