const fs = require("fs");
const db = require("./firebaseAdmin");

const rawData = fs.readFileSync("./db.json");
const jsonData = JSON.parse(rawData);

// Verifica se jsonData é um objeto e se a chave 'cards' é um array
if (jsonData && Array.isArray(jsonData.cards)) {
  const data = jsonData.cards;

  const uploadData = async () => {
    const collectionRef = db.collection("cards");

    for (const item of data) {
      try {
        await collectionRef.add(item);
        console.log("Documento adicionado com sucesso:", item);
      } catch (error) {
        console.error("Erro ao adicionar documento:", error);
      }
    }
  };

  uploadData().then(() => {
    console.log("Todos os dados foram enviados.");
  });
} else {
  console.error("O arquivo JSON não contém um array na chave 'cards'.");
}



// Código para enviar para a firestrore

// node uploadToFirestore.js

