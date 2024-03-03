const buttonYes = document.getElementById('yes');
const buttonNo = document.getElementById('no');

buttonYes.addEventListener('click', function() {
    buttonNo.style.position = 'relative';
    buttonNo.style.bottom = '';
    buttonNo.style.left = '';
    alert('Você aceitou!!!');
})

buttonNo.addEventListener('mouseover', function() {
    buttonNo.style.position = 'absolute';
    buttonNo.style.bottom = gerarPosicao(10, 90);
    buttonNo.style.left = gerarPosicao(10, 90);
})

function gerarPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}