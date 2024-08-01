// Função para criptografar o texto
function criptografar() {
    const texto = document.getElementById('texto').value;
    let textoCriptografado = '';

    const mapaCriptografia = criarMapaCriptografia();

    for (const char of texto) {
        textoCriptografado += mapaCriptografia[char] || char;
    }

    exibirResultado(textoCriptografado);
}

// Função para descriptografar o texto
function descriptografar() {
    const texto = document.getElementById('texto').value;
    const mapaCriptografia = criarMapaCriptografia();
    const mapaDescriptografia = inverterMapa(mapaCriptografia);
    let textoDescriptografado = texto;

    for (const [chave, valor] of Object.entries(mapaDescriptografia)) {
        textoDescriptografado = textoDescriptografado.replace(new RegExp(chave, 'g'), valor);
    }

    exibirResultado(textoDescriptografado);
}

// Função para copiar o texto
function copiarTexto() {
    const textoCriptografado = document.getElementById('mensagem').innerText;
    navigator.clipboard.writeText(textoCriptografado);
}

// Função para criar o mapa de criptografia
function criarMapaCriptografia() {
    return {
        'a': 'qa', 'e': 'we', 'i': 'ri', 'o': 'to', 'u': 'yu',
        'b': 'mb', 'c': 'nc', 'd': 'od', 'f': 'pf', 'g': 'qg',
        'h': 'rh', 'j': 'sj', 'k': 'tk', 'l': 'ul', 'm': 'vm',
        'n': 'wn', 'p': 'xp', 'q': 'yq', 'r': 'zr', 's': 'as',
        't': 'bt', 'v': 'cv', 'w': 'dw', 'x': 'ex', 'y': 'fy',
        'z': 'gz', 'A': 'QA', 'E': 'WE', 'I': 'RI', 'O': 'TO',
        'U': 'YU', 'B': 'MB', 'C': 'NC', 'D': 'OD', 'F': 'PF',
        'G': 'QG', 'H': 'RH', 'J': 'SJ', 'K': 'TK', 'L': 'UL',
        'M': 'VM', 'N': 'WN', 'P': 'XP', 'Q': 'YQ', 'R': 'ZR',
        'S': 'AS', 'T': 'BT', 'V': 'CV', 'W': 'DW', 'X': 'EX',
        'Y': 'FY', 'Z': 'GZ', '1': 'ax', '2': 'by', '3': 'cz',
        '4': 'dx', '5': 'ey', '6': 'fz', '7': 'gx', '8': 'hy',
        '9': 'iz', '0': 'jx', '!': 'kku', '@': 'llu', '#': 'mmu',
        '$': 'nnu', '%': 'oou', '^': 'ppu', '&': 'qqu', '*': 'rru',
        '(': 'ssu', ')': 'ttu'
    };
}

// Função para inverter o mapa de criptografia
function inverterMapa(mapa) {
    const mapaInvertido = {};
    for (const [chave, valor] of Object.entries(mapa)) {
        mapaInvertido[valor] = chave;
    }
    return mapaInvertido;
}

// Função para exibir o resultado
function exibirResultado(texto) {
    document.getElementById('imgCriptografia').style.display = 'none';
    document.getElementById('mensagem').innerText = texto;
    document.getElementById('mensagem').style.display = 'block';
    document.getElementById('textoNone').innerText = '';
    document.getElementById('copiar').style.display = 'block';
}

// Adiciona eventos aos botões
document.getElementById('criptografar').addEventListener('click', criptografar);
document.getElementById('descriptografar').addEventListener('click', descriptografar);
document.getElementById('copiar').addEventListener('click', copiarTexto);
