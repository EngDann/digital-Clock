// Adiciona um ouvinte de evento que aguarda o carregamento completo do conteúdo do DOM.
document.addEventListener("DOMContentLoaded", () => {
    // Função para atualizar a hora atual.
    function updateTime() {
        // Cria um novo objeto Date para obter a data e hora atual.
        let today = new Date();

        // Seleciona os elementos do DOM onde as horas, minutos e segundos serão exibidos.
        let hours = document.querySelector(".time-1");
        let minutes = document.querySelector(".time-2");
        let seconds = document.querySelector(".time-3");

        // Atualiza o texto desses elementos para a hora, minuto e segundo atual,
        // usando padStart para garantir que sempre haja dois dígitos.
        hours.textContent = String(today.getHours()).padStart(2, "0");
        minutes.textContent = String(today.getMinutes()).padStart(2, "0");
        seconds.textContent = String(today.getSeconds()).padStart(2, "0");
    }

    // Chama updateTime imediatamente para inicializar o relógio.
    updateTime();

    // Configura um temporizador para chamar updateTime a cada 1000 milissegundos (1 segundo),
    // mantendo o relógio atualizado.
    setInterval(updateTime, 1000);
});
