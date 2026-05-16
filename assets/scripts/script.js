const buttons = document.querySelectorAll('button');

buttons.forEach(button => {

    button.addEventListener('mouseenter', () => {
        button.style.boxShadow = '0 0 25px #00a2ff';
    });

    button.addEventListener('mouseleave', () => {
        button.style.boxShadow = 'none';
    });

});
