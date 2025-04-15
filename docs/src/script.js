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


document.addEventListener('DOMContentLoaded', function () {
    // Função para abrir o modal
    function abrirModal(imgElement) {
        const modal = document.getElementById("imagemModal");
        const modalImg = document.getElementById("imgModal");

        // Mostrar o modal
        modal.classList.add("ativo"); // Adiciona a classe 'ativo' para exibir o modal
        modalImg.src = imgElement.src; // Configura a imagem no modal com a imagem clicada
    }

    // Função para fechar o modal
    function fecharModal() {
        const modal = document.getElementById("imagemModal");
        modal.classList.remove("ativo"); // Remove a classe 'ativo' para esconder o modal
    }

    // Adiciona eventos de click nas imagens da galeria
    const imagens = document.querySelectorAll('.imagem img');
    imagens.forEach(imagem => {
        imagem.addEventListener('click', function () {
            abrirModal(imagem); // Chama a função abrirModal ao clicar na imagem
        });
    });

    // Evento para fechar o modal ao clicar fora da imagem
    const modal = document.getElementById("imagemModal");
    modal.addEventListener('click', function (e) {
        if (e.target === modal) {
            fecharModal(); // Fecha o modal se clicar fora da imagem
        }
    });

    // Evento para fechar o modal com o botão de fechar
    const fecharBtn = document.querySelector('.fechar');
    fecharBtn.addEventListener('click', fecharModal); // Fecha o modal ao clicar no botão de fechar
});


