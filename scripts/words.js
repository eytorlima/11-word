const palavras = [
    "abrir", "acima", "acode", "acres", "adoce", "aflor", "ágape", "agir", "água", "airos",
    "ajuda", "ajust", "alçar", "aleia", "além", "alert", "aliar", "alma", "altar", "amado",
    "amigo", "anexo", "anexo", "ânglo", "anota", "antre", "anual", "aonde", "aparo", "aquém",
    "arder", "argir", "artes", "ascia", "ásper", "atéia", "áulio", "aument", "aura", "aureo",
    "avali", "azado", "basta", "belga", "belos", "bença", "besta", "bocal", "bomia",
    "borra", "breve", "cabel", "cabra", "calar", "cama", "campo", "canto", "caras", "ceder",
    "censo", "cigar", "circo", "claro", "clero", "coisa", "comer", "copas", "corça", "costa",
    "criar", "cruel", "cuida", "dança", "darás", "dardo", "darlo", "data", "debil", "dedos",
    "defaz", "deixa", "dente", "desejo", "desta", "dizer", "doçes", "domar", "dorso", "dotar",
    "douto", "drama", "dúbia", "duplo", "efeto", "elide", "emana", "enxer", "equal",
    "esmo", "estro", "éter", "ética", "europa", "exato", "fazia", "fecho", "ferro", "fizera",
    "florir", "fofos", "fome", "força", "formo", "fraco", "fundo", "gabar", "ganha", "geral",
    "gesto", "golpe", "grava", "guarda", "harpa", "homem", "horas", "hóspes", "ícone", "idade",
    "igual", "ilhar", "ilude", "inato", "india", "irão", "iura", "larga", "larva",
    "lenha", "letra", "libra", "livra", "local", "lugar", "lutas", "macio", "manta", "marco",
    "máris", "mastro", "malva", "média", "medro", "menta", "mesmo", "milha", "mínio",
    "miolo", "modo", "mole", "moral", "morro", "morte", "móvel", "mundo", "nadar", "nasça",
    "natal", "neura", "noite", "notas", "novas", "noves", "oásis", "óbvio", "ócio", "órgão",
    "ouro", "óvulo", "palar", "palha", "palma", "pança", "parar", "passo", "pérola", "perto",
    "pesca", "piada", "pilar", "pleno", "pôrto", "posse", "praça", "pular", "quadra", "quaro",
    "quase", "quero", "quilo", "quota", "rabos", "raios", "raiva", "rapaz", "raso", "rauta",
    "real", "recos", "regra", "reino", "rente", "respe", "riach", "riçar", "rico", "risco",
    "rocha", "rosas", "sabor", "sabor", "saias", "salva", "salvo", "saúde", "selva", "semea",
    "serra", "setas", "sider", "silvo", "sobra", "sobre", "sócio", "solto", "sorve", "sovar",
    "suado", "suave", "suave", "subir", "sulco", "sulfo", "taboa", "talco", "talha",
    "tampa", "tanja", "tango", "tanto", "tapas", "tarde", "tardes", "teama", "tecno", "teias",
    "teixe", "tenaz", "tenta", "tenso", "térça", "terço", "terno", "terre", "tijol", "tímbo",
    "tirar", "tocas", "tofus", "tomar", "topos", "torno", "torre", "totem", "toxos", "trago",
    "trata", "trato", "trava", "traze", "treme", "treva", "triun", "troca", "trope", "trova",
    "turva", "úlcera", "úmida", "unção", "úrico", "urros", "vaca", "vadia", "vagar", "vale",
    "vapor", "varas", "veado", "venda", "verbo", "verde", "verme", "vesgo", "vexar", "vibra",
    "vício", "vigor", "vinco", "vírus", "visco", "vitro", "viver"
];
const palavras2 = [
    'abrir', 'achar', 'aluno', 'amiga',
    'amigo', 'apito', 'arroz', 'banco', 'banho',
    'barco', 'bicho', 'borra', 'bravo', 'cabra',
    'cacho', 'caixa', 'calor', 'carne', 'causa',
    'chuva', 'circo', 'coisa', 'dança', 'dente',
    'drama', 'durar', 'dólar', 'falar', 'falar',
    'febre', 'ferro', 'filho', 'força', 'freio',
    'fugir', 'fundo', 'garfo', 'gente', 'grito',
    'grito', 'haver', 'hotel', 'idade', 'jogar',
    'juízo', 'larva', 'letra', 'lindo', 'limpe',
    'livro', 'luvas', 'luzes', 'marco', 'mesmo',
    'mundo', 'nasce', 'navio', 'noite', 'norte',
    'notas', 'nunca', 'obras', 'olhar', 'olham',
    'pagar', 'pagar', 'papel', 'papel', 'parar',
    'parte', 'passo', 'passe', 'peixe', 'perto',
    'pesco', 'pilha', 'pinta', 'poder', 'polpa',
    'porta', 'posso', 'praia', 'preto', 'primo',
    'quase', 'quilo', 'raios', 'raiva', 'ralar',
    'rapaz', 'rapaz', 'risco', 'rosto', 'rosas',
    'salas', 'salto', 'segue', 'senso', 'sinto',
    'sobem', 'somos', 'sorte', 'suave', 'subir',
    'sujei', 'talco', 'tarde', 'terra', 'tempo',
    'tinha', 'tinta', 'trago', 'troca', 'valia',
    'vagar', 'vejam', 'vejas', 'velho', 'vento',
    'verso', 'vidas', 'vimos', 'vital', 'viver',
    'viver', 'zonas', 'zonas', 'úteis', 'única',
];
const palavraA = [
    'amigo', 'abrir', 'açúcar', 'adote', 'andar', 'anexo', 'aluno', 'alma', 'amule', 'altar',
    'afago', 'ágape', 'ágil', 'aéreo', 'ação', 'acaso', 'álamo', 'água', 'alert', 'amule'
];
const palavraB = [
    'bombe', 'batom', 'bravo', 'brasa', 'bruto', 'banco', 'barco', 'balsa', 'brisa', 'belo',
        'bazar', 'beijo', 'bando', 'bravo', 'bater', 'batom', 'bated', 'brava', 'bravo', 'bravo'
];
const palavraC = [
    'camin', 'coral', 'corre', 'canto', 'campo', 'caixa', 'coroa', 'circo', 'clube', 'cobra',
        'cidade', 'carro', 'corpo', 'carta', 'corte', 'colhe', 'crise', 'cuida', 'cúria'
];
const palavraD = [
    'drama', 'dança', 'dardo', 'doçur', 'débil', 'dengo', 'doçur', 'dócil', 'dedos', 'dizer',
        'dólar', 'décio', 'dêver', 'darço', 'doçur', 'damao', 'dona', 'domar', 'dêmos', 'dardo'
];
const palavraE = [
     'estão', 'elevo', 'ergue', 'elias', 'exame', 'exato', 'eluda', 'espor',
        'esteio', 'etapa', 'edson', 'erika', 'elias', 'endos', 'escoa', 'entra'
];
const palavraF = [
    'fazem', 'fique', 'foram', 'fusca', 'fraco', 'falar', 'ferro', 'fugir', 'fundo',
        'falha', 'força', 'frota', 'fizem', 'fuzil', 'feixe', 'fundo', 'frase', 'fuzis', 'famos'
];
const palavraG = [
    'grupo', 'grava', 'ganha', 'guapa', 'grilo', 'graça', 'gíria', 'graça', 'grito', 'gente',
        'gulha', 'gabin', 'grito', 'grana', 'gabar', 'gente', 'gazza', 'gazza', 'gulha', 'grava'
];
const palavraH = [
    'hoje', 'havia', 'haste', 'haver', 'heroi', 'hábil', 'horas', 'hotel',
        'hália', 'heroi', 'hélio', 'hábit', 'hábil', 'havia', 'hotel', 'homem', 'haver', 'havia'
];
const palavraI = [
    'ideal', 'ícone', 'idade', 'intim', 'infer', 'ideia', 'incio', 'índia', 'igual', 'irmãs',
    'invas', 'ideia', 'ident', 'índia', 'infam', 'intim', 'ignor', 'induz', 'índia', 'ideal'
];
const palavraJ  = [
    'jogos', 'julho', 'juiz', 'justo', 'juízo', 'junto', 'joias', 'jurou', 'juram', 'jurar',
    'jogar', 'junho', 'julho', 'junto', 'julho', 'juíza', 'juiz', 'juiz', 'julgo', 'juízo'
];
const palavraK = [
    'karma', 'kayak', 'kappa', 'kaiak', 'karma', 'karaí', 'kiwi', 'karma', 'kayak', 'kappa',
        'karma', 'karma', 'karma', 'karma', 'karma', 'karma', 'karma', 'karma', 'karma', 'karma'
];
const palavraL = [
    'lugar', 'lente', 'louco', 'litro', 'largo', 'luzia', 'louça', 'linda', 'limpo', 'lunar',
        'lívia', 'líder', 'linda', 'largo', 'luzia', 'lumin', 'louça', 'luzia', 'lugar', 'linda'
];
const palavraM = [
    'milho', 'mulhe', 'mesmo', 'mundo', 'morte', 'minas', 'morte', 'mulas', 'mural', 'minha',
        'muito', 'meigo', 'musas', 'mesmo', 'mural', 'muito', 'minas', 'mural', 'minha', 'mesmo'
];
const palavraN = [
    'neném', 'neves', 'nobre', 'natal', 'nível', 'noite', 'negro', 'nunca', 'neste',
    'nobre', 'neném', 'natal', 'neste', 'nobre', 'nunca',
];
const palavraO = [
    'olhos', 'outra', 'ordem', 'obras', 'obter', 'outro', 'olhos',
         'ordem', 'outro', 'obter', 'obras', 'outra', 'orval', 'obras'
];
const palavraP = [
    'passe', 'prato', 'perto', 'pobre', 'pedra', 'perto', 'peixe', 'pobre', 'plena',
        'pelas', 'prata', 'pleno', 'plena', 'ponto', 'peixe', 'prato', 'pleno', 'pedro'
];
const palavraQ = [
    'quase', 'quais', 'quero',
    'quero', 'quais', 'quero', 'quase', 'quais'
];
const palavraR = [
    'rádio', 'rolar', 'roupa', 'raios', 'rival', 'risos', 'rolar', 'raios', 'razão', 'rosto',
    'rosto', 'rebel', 'relóg', 'rolar', 'rosto', 'risos', 'raios', 'rival', 'risos', 'rolar'
];
const palavraS = [
    'seita', 'sairá', 'sobre', 'sobes', 'separ', 'sabor', 'segui', 'saber', 'sutil', 'sinto',
    'segui', 'sobra', 'sutil', 'sabor', 'saber', 'sabor', 'segui', 'sobra', 'sobre', 'sabor'
];
const palavraT = [
    'trama', 'trago', 'tropa', 'tubar', 'tenha', 'talco', 'tenho', 'tanto', 'total', 'trama',
    'trago', 'tubar', 'tenha', 'talco', 'tenho', 'tenha', 'total', 'trama', 'tropa', 'tanto'
];
const palavraU = [
    'unido', 'umano', 'usado', 'unida', 'usado', 'usada', 'usado', 'umano', 'unida',
    'usado', 'unida', 'usado', 'usado', 'usado', 'usado', 'umano', 'unida', 'umano', 'usado'
];
const palavraV = [
    'vazio', 'valer', 'viver', 'vulto', 'veio', 'veras', 'vesti', 'viver', 'vulto', 'viver',
    'veloz', 'vulgo', 'veras', 'viver', 'viver', 'viver', 'veras', 'vulgo', 'vazio', 'viver'
];
palavraA.forEach(word => {
    if (!palavras.includes(word)) {
        palavras.push(word);
    }
});
palavraB.forEach(word => {
    if (!palavras.includes(word)) {
        palavras.push(word);
    }
});
palavraC.forEach(word => {
    if (!palavras.includes(word)) {
        palavras.push(word);
    }
});
palavraD.forEach(word => {
    if (!palavras.includes(word)) {
        palavras.push(word);
    }
});
palavraE.forEach(word => {
    if (!palavras.includes(word)) {
        palavras.push(word);
    }
});
palavraF.forEach(word => {
    if (!palavras.includes(word)) {
        palavras.push(word);
    }
});
palavraG.forEach(word => {
    if (!palavras.includes(word)) {
        palavras.push(word);
    }
});
palavraH.forEach(word => {
    if (!palavras.includes(word)) {
        palavras.push(word);
    }
});
palavraI.forEach(word => {
    if (!palavras.includes(word)) {
        palavras.push(word);
    }
});
palavraJ.forEach(word => {
    if (!palavras.includes(word)) {
        palavras.push(word);
    }
});
palavraK.forEach(word => {
    if (!palavras.includes(word)) {
        palavras.push(word);
    }
});
palavraL.forEach(word => {
    if (!palavras.includes(word)) {
        palavras.push(word);
    }
});
palavraM.forEach(word => {
    if (!palavras.includes(word)) {
        palavras.push(word);
    }
});
palavraN.forEach(word => {
    if (!palavras.includes(word)) {
        palavras.push(word);
    }
});
palavraO.forEach(word => {
    if (!palavras.includes(word)) {
        palavras.push(word);
    }
});
palavraP.forEach(word => {
    if (!palavras.includes(word)) {
        palavras.push(word);
    }
});
palavraQ.forEach(word => {
    if (!palavras.includes(word)) {
        palavras.push(word);
    }
});
palavraR.forEach(word => {
    if (!palavras.includes(word)) {
        palavras.push(word);
    }
});
palavraS.forEach(word => {
    if (!palavras.includes(word)) {
        palavras.push(word);
    }
});
palavraT.forEach(word => {
    if (!palavras.includes(word)) {
        palavras.push(word);
    }
});
palavraU.forEach(word => {
    if (!palavras.includes(word)) {
        palavras.push(word);
    }
});
palavraV.forEach(word => {
    if (!palavras.includes(word)) {
        palavras.push(word);
    }
});
palavras2.forEach(word => {
    if (!palavras.includes(word)) {
        palavras.push(word);
    }
});

for(let i = 0; i < palavras.length; i++){
    if (palavras[i].length !== 5) {
        palavras.splice(i, 1);
        i--;
    }
}

const nr = Math.floor(Math.random() * 549);
var word = palavras[nr];
word = word.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
export {word};

//549 Palavras diferentes de 5 letras //
