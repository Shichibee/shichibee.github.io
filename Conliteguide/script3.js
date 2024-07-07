// 初期状態を個別に保持する変数
var niniInitialText = document.getElementById('nini-text').textContent;
var bangoInitialText = document.getElementById('bango-text').textContent;

// 初期状態を保持するオブジェクト
var codeBlocksInitial = {};
var codeBlocksCurrent = {};

// codeブロックの初期状態を保持
document.querySelectorAll('code').forEach(function(codeBlock) {
    codeBlocksInitial[codeBlock.id] = codeBlock.textContent;
    codeBlocksCurrent[codeBlock.id] = codeBlock.textContent;
});

document.getElementById('replace-button1').addEventListener('click', function() {
    var inputText1 = document.getElementById('input-text1').value;

    // 空欄チェック
    if (!inputText1.trim()) {
        return;
    }

    var niniText = document.getElementById('nini-text');
    niniText.textContent = niniInitialText.replace('任意の名前', inputText1);

    // codeブロックの更新
    for (var codeId in codeBlocksInitial) {
        // 以前の置き換え結果を元に戻す
        codeBlocksCurrent[codeId] = codeBlocksInitial[codeId].replace(/任意の名前/g, inputText1);
        document.getElementById(codeId).textContent = codeBlocksCurrent[codeId];
    }

    showAlert('置き換えられました!');
    addClickedEffect(this);
});

document.getElementById('replace-button2').addEventListener('click', function() {
    var inputText2 = document.getElementById('input-text2').value;

    // 空欄チェック
    if (!inputText2.trim()) {
        return;
    }

    var bangoText = document.getElementById('bango-text');
    bangoText.textContent = bangoInitialText.replace('x○○○○○○○', inputText2);

    // codeブロックの更新
    for (var codeId in codeBlocksInitial) {
        // 以前の置き換え結果を元に戻す
        codeBlocksCurrent[codeId] = codeBlocksInitial[codeId].replace(/x○○○○○○○/g, inputText2);
        document.getElementById(codeId).textContent = codeBlocksCurrent[codeId];
    }
    showAlert('置き換えられました!');
    addClickedEffect(this);
});

// showAlert('置き換えられました!');
// addClickedEffect(this);


// コピーボタンのイベントリスナーを追加
var copyButtons = document.querySelectorAll('[id^="copy-button"]');
copyButtons.forEach(function(button) {
    var codeBlockId = button.id.replace('copy-button', 'code-block');
    button.addEventListener('click', function() {
        copyCode(codeBlockId);
        addClickedEffect(this);
    });
});

function copyCode(elementId) {
    var code = document.getElementById(elementId).innerText;
    var tempTextarea = document.createElement('textarea');
    tempTextarea.value = code;
    document.body.appendChild(tempTextarea);
    tempTextarea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextarea);
    showAlert('コードがコピーされました！');
}

function showAlert(message) {
    var alertBox = document.getElementById('alert');
    alertBox.textContent = message;
    alertBox.style.display = 'block';
    alertBox.style.opacity = '1';
    setTimeout(function() {
        alertBox.style.opacity = '0';
    }, 500);
    setTimeout(function() {
        alertBox.style.display = 'none';
    }, 1000);
}

function addClickedEffect(button) {
    button.classList.add('clicked');
    setTimeout(function() {
        button.classList.remove('clicked');
    }, 100);
}
