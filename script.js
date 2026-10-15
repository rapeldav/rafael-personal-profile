const introText = document.querySelector('#intro-text');
const changeTextButton = document.querySelector('#change-text')

const teksAwal = introText.textContent;
const teksBaru = 'Saya senang mencoba hal baru, belajar dari pengalaman, dan terus mengembangkan diri. Saya percaya bahwa setiap proses yang saya jalani dapat membuat Ssaya menjadi lebih baik. ';

let teksSedangBerubah = false;

changeTextButton.addEventListener('click', function () {
    if (teksSedangBerubah) {
        introText.textContent = teksAwal;
        changeTextButton.textContent = 'Ubah Teks';
        teksSedangBerubah = false;
    } else {
        introText.textContent = teksBaru;
        changeTextButton.textContent = 'Kembalikan Teks';
        teksSedangBerubah = true;
    }
});

const themeToggleButton = document.querySelector('#theme-toggle');

themeToggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});
