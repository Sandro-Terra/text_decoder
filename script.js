const textArea = document.querySelector('.text-area');
const mensagem = document.querySelector('.message');
const btnCopiar = document.querySelector('.btn-copiar');
const mensagemCriptografada = document.querySelector('stringEncriptada');

function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value);
    mensagem.value = textoEncriptado;
    textArea.value = "";   
}

function encriptar(stringEncriptada) {
    mensagem.value = "";
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ]
    stringEncriptada = stringEncriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
        }
    }
    return stringEncriptada;

}  limpaImagem();

function limpaImagem() {
    const btnEncriptar = document.querySelector('.btn-encriptar');

    btnEncriptar.addEventListener('click', function () {
        const mensagem = document.querySelector('.message');
        mensagem.style.backgroundImage = 'none';
    });
    
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(textArea.value);
    mensagem.value = textoDesencriptado;
    textArea.value = "";
}

function desencriptar(stringDesencriptada) {
    let matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ]
    stringDesencriptada = stringDesencriptada.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada;
}

btnCopiar.addEventListener('click', () => {
    mensagem.select();
    mensagem.setSelectionRange(0, 99999);

    try {
        const sucesso = document.execCommand('copy');
        if (sucesso) {
            alert('O texto criptografado foi copiado!\nCole o texto no campo digite seu texto para descriptografar.');
        } else {
            throw new Error('A cópia falhou');
        }
    } catch (err) {
        console.error('Erro ao copiar o texto:', err);
    }
}
);

  limpaImagem();

function limpaImagem() {
    const btnEncriptar = document.querySelector('.btn-encriptar');

    btnEncriptar.addEventListener('click', function () {
        const mensagem = document.querySelector('.message');
        mensagem.style.backgroundImage = 'none';
        textArea.value = "";
    });
}

  window.addEventListener('load', () => {
    mensagem.value = "";
});

