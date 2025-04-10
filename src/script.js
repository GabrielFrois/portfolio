document.addEventListener('DOMContentLoaded', function () {
    const text = "Hello World, I'm";
    const element = document.querySelector('.typed-text'); // O span que conterá o texto
    const cursor = document.querySelector('.cursor'); // O cursor piscando
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index); // Digita uma letra
            index++;

            // A cada nova letra, coloca o cursor no final do texto
            cursor.style.left = `${element.offsetWidth}px`; 

            setTimeout(typeWriter, 250); // Ajuste a velocidade da digitação
        }
    }

    typeWriter();
});
