const fs = require('fs');
const https = require('https');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const imgDir = path.join(publicDir, 'img');

// 0. Cria a pasta 'public' se ela não existir
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
    console.log('📁 Pasta "public" criada com sucesso!');
}

// 1. Cria a pasta 'img' se ela não existir
if (!fs.existsSync(imgDir)) {
    fs.mkdirSync(imgDir);
    console.log('📁 Pasta "img" criada com sucesso!');
} else {
    console.log('✔️ Pasta "img" já existe.');
}

// 2. Função inteligente para baixar e salvar arquivos da internet
function baixar(url, destino, nome) {
    https.get(url, (resposta) => {
        // Lida com redirecionamentos de URL (comum ao baixar arquivos)
        if (resposta.statusCode >= 300 && resposta.statusCode < 400 && resposta.headers.location) {
            return baixar(resposta.headers.location, destino, nome);
        }
        
        const arquivo = fs.createWriteStream(destino);
        resposta.pipe(arquivo);
        
        arquivo.on('finish', () => {
            arquivo.close();
            console.log(`✅ Download concluído: ${nome}`);
        });
    }).on('error', (err) => {
        fs.unlink(destino, () => {});
        console.error(`❌ Erro ao tentar baixar ${nome}: ${err.message}`);
    });
}

// 3. Lista dos arquivos necessários para a mágica funcionar
const arquivos = [
    // Arquivos de marcação com as cores do safari (depois você pode substituir as imagens na pasta pelos PNGs originais que quiser)
    { url: 'https://placehold.co/200x200/FFC107/5D4037/png?text=Mickey+Safari', destino: path.join(imgDir, 'mickey-safari.png'), nome: 'Imagem do Mickey' },
    { url: 'https://placehold.co/200x200/4CAF50/FFFFFF/png?text=Minnie+Safari', destino: path.join(imgDir, 'minnie-safari.png'), nome: 'Imagem da Minnie' },
    { url: 'https://placehold.co/200x200/FF9800/FFFFFF/png?text=Donald+Safari', destino: path.join(imgDir, 'donald-safari.png'), nome: 'Imagem do Donald' },
    
    // Uma música instrumental livre de direitos autorais para testar o player
    { url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-16.mp3', destino: path.join(publicDir, 'musica-safari.mp3'), nome: 'Música de Fundo' }
];

// 4. Executa o trabalho braçal!
console.log('⏳ Preparando a festa do Mateus! Baixando arquivos...');
arquivos.forEach(arq => baixar(arq.url, arq.destino, arq.nome));