document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");
    
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        
        const name = form.querySelector("input[type='text']").value;
        const email = form.querySelector("input[type='email']").value;
        const message = form.querySelector("textarea").value;
        
        if (name && email && message) {
            alert("Obrigado pelo contato, " + name + "! Entraremos em contato em breve.");
            form.reset();
        } else {
            alert("Por favor, preencha todos os campos do formulário.");
        }
    });
});