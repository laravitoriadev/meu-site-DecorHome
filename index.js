// Espera que o DOM esteja pronto
document.addEventListener("DOMContentLoaded", function () {

    // Adiciona um evento de clique a todos os links no menu de navegação
    var navLinks = document.querySelectorAll("header nav a");
    navLinks.forEach(function (link) {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Evita que o link redirecione imediatamente
            var targetId = this.getAttribute("href").substring(1); // Obtém o ID do alvo
            scrollToSection(targetId); // Rolagem suave para a seção alvo
        });
    });

    // Função para rolar suavemente até a seção alvo
    function scrollToSection(targetId) {
        var targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - document.querySelector("header").offsetHeight,
                behavior: "smooth"
            });
        }
    }

    // Adiciona um evento de clique aos links de contato
    var contactLinks = document.querySelectorAll(".email, .insta, .whats");
    contactLinks.forEach(function (onlink) {
        link.addEventListener("click", function () {
            alert("Esta funcionalidade ainda não está implementada. Adicione seu código para processar os cliques nos links de contato.");
        });
    });

    // Adicione mais interações ou funcionalidades específicas do seu site conforme necessário

});
