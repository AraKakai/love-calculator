function calculateLove() {
    const name1 = document.getElementById('name1').value.trim().toLowerCase();
    const name2 = document.getElementById('name2').value.trim().toLowerCase();

         const loveScore = (name1.length + name2.length) % 101;

    const resultContainer = document.getElementById('love-result');
    resultContainer.textContent = `Love Score: ${loveScore}%`;

    if (loveScore >= 70) {
        resultContainer.style.color = 'green';
    } else if (loveScore >= 50) {
        resultContainer.style.color = 'orange';
    } else {
        resultContainer.style.color = 'red';
    }
}