let sliderEl = document.querySelector("#slider");
let senha = document.querySelector("#input");
let tamanho = document.querySelector("#valor");

document.querySelector("#botao").addEventListener("click", generatePasswords);
sliderEl.addEventListener("input", updatePasswordLength);

function generatePassword() {
    if (!document.querySelector("#minuscula").checked &&
        !document.querySelector("#maiuscula").checked &&
        !document.querySelector("#numero").checked &&
        !document.querySelector("#especial").checked) {
        alert("Selecione pelo menos uma opção (Minúscula, Maiúscula, Número ou Especial).");
        return '';
    }

    let caracteresPermitidos = '';

    if (document.querySelector("#minuscula").checked) {
        caracteresPermitidos += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (document.querySelector("#maiuscula").checked) {
        caracteresPermitidos += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (document.querySelector("#numero").checked) {
        caracteresPermitidos += '0123456789';
    }
    if (document.querySelector("#especial").checked) {
        caracteresPermitidos += '!@#$%^&*()_+-=[]{}|;:,.<>?';
    }

    let senhaGerada = '';
    for (let i = 0; i < sliderEl.value; i++) {
        let randomIndex = Math.floor(Math.random() * caracteresPermitidos.length);
        senhaGerada += caracteresPermitidos.charAt(randomIndex);
    }

    return senhaGerada;
}

function generatePasswords() {
    let quantidadeSenhas = parseInt(prompt("Quantidade de senhas desejadas (máximo 10):")) || 1;

    if (quantidadeSenhas < 1 || quantidadeSenhas > 10) {
        alert("Quantidade de senhas inválida. Digite um número entre 1 e 10.");
        return;
    }

    senha.value = Array.from({ length: quantidadeSenhas }, generatePassword).join(' |*****| ');
}

function updatePasswordLength() {
    tamanho.textContent = sliderEl.value;
}

function limparSenha() {
    senha.value = "";
}