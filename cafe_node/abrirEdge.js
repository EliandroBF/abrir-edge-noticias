const { exec } = require("child_process");

const url = "https://www.bing.com/search?q=notícias+mercado+financeiro"; // URL de pesquisa

exec(`start msedge "${url}"`, (err) => {
    if (err) {
        console.error("Erro ao abrir o Edge:", err);
        return;
    }
    console.log("Edge aberto com sucesso!");
});
