function adicionarCaracter(caracter) {
    const display = document.querySelector('.display');
    display.value += caracter;
}

function limparTela() {
    document.querySelector('.display').value = '';
}

function calcular() {
    const display = document.querySelector('.display');
    try {
        display.value = Function('"use strict";return (' + display.value + ')')();
    } catch (e) {
        display.value = 'Erro';
    }
}

function inverte() {
    const display = document.querySelector('.display');
    if (display.value) {
        display.value = display.value.startsWith('-') ? display.value.substring(1) : '-' + display.value;
    }
}
