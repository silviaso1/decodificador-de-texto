function criptografar() {
    const texto = document.getElementById('texto').value;
    let textoCriptografado = '';

    for (let i = 0; i < texto.length; i++) {
        const atual = texto[i];
        switch (atual) {
            case 'a':
                textoCriptografado += 'ba';
                break;
            case 'e':
                textoCriptografado += 'de';
                break;
            case 'i':
                textoCriptografado += 'hi';
                break;
            case 'o':
                textoCriptografado += 'no';
                break;
            case 'u':
                textoCriptografado += 'tu';
                break;
            default:
                textoCriptografado += atual;
        }
    }

    document.getElementById('imgCriptografia').style.display = 'none';
    document.getElementById('mensagem').style.display = 'none';
    document.getElementById('esconder').style.display = 'none';
    document.getElementById('textoNone').innerText = textoCriptografado;
    document.getElementById('textoNone').style.marginTop = '45px';
    document.getElementById('textoNone').style.display = 'block';
    document.getElementById('copiar').style.display = 'block';
}

function descriptografar() {
    const texto = document.getElementById('texto').value;
    let textoDescriptografado = texto;

    textoDescriptografado = textoDescriptografado.replace(/ba/g, 'a');
    textoDescriptografado = textoDescriptografado.replace(/de/g, 'e');
    textoDescriptografado = textoDescriptografado.replace(/hi/g, 'i');
    textoDescriptografado = textoDescriptografado.replace(/no/g, 'o');
    textoDescriptografado = textoDescriptografado.replace(/tu/g, 'u');

    document.getElementById('imgCriptografia').style.display = 'none';
    document.getElementById('mensagem').innerText = textoDescriptografado;
    document.getElementById('mensagem').style.display = 'block';
    document.getElementById('textoNone').style.display = 'none';
    document.getElementById('copiar').style.display = 'block';
}

function copiarTexto() {
    let textoParaCopiar = document.getElementById('textoNone').style.display === 'block' ?
        document.getElementById('textoNone').innerText :
        document.getElementById('mensagem').innerText;

    navigator.clipboard.writeText(textoParaCopiar);
}

document.getElementById('criptografar').addEventListener('click', criptografar);
document.getElementById('descriptografar').addEventListener('click', descriptografar);
document.getElementById('copiar').addEventListener('click', copiarTexto);
