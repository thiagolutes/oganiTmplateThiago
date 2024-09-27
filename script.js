const rangeInput = document.getElementById('rangeInput');
const rangeValue = document.getElementById('rangeValue');

function mudarMenu() {
    let menuLateral = document.querySelector('.abrirMenu');
    let style = window.getComputedStyle(menuLateral);

    if (style.opacity === '0') {
        menuLateral.style.opacity = '1';
    } else {
        menuLateral.style.opacity = '0';
    }
}

function updateValue() {
    const value = rangeInput.value;
    rangeValue.textContent = `$${value}`;
}
rangeInput.addEventListener('input', updateValue);