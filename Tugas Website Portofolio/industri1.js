document.addEventListener('DOMContentLoaded', () => {
    const learnMoreBtn = document.getElementById('learnMoreBtn');
    const moreInfo = document.getElementById('moreInfo');

    learnMoreBtn.addEventListener('click', () => {
        moreInfo.classList.toggle('hidden');
        learnMoreBtn.textContent = moreInfo.classList.contains('hidden') ? 'Pelajari Lebih Lanjut' : 'Sembunyikan Info';
    });
});