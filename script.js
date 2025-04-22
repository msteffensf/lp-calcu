function adicionarCaracter(caracter) {
    const display = document.querySelector('.display');

    if (caracter === 'AC') {
        display.value = '';
    } else if (caracter === '=') {
        try {
            display.value = eval(display.value);
        } catch {
            display.value = 'Erro';
        }
    } else if (caracter === '+/-') {
        if (display.value.startsWith('-')) {
            display.value = display.value.slice(1);
        } else if (display.value) {
            display.value = '-' + display.value;
        }
    } else {
        display.value += caracter;
    }
}
