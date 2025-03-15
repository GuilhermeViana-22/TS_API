// src/server/scraper.ts
import axios from 'axios';

// Função para fazer o scraping dos produtos
export const scrapeProductData = async () => {
  const url = 'https://fakestoreapi.com/products'; // URL da API Fake Store
  try {
    console.log('Iniciando requisição para: ', url); // Log para depuração
    const { data } = await axios.get(url);
    console.log('Dados recebidos:', data); // Log dos dados recebidos
    const products = data.map((product: any) => ({
      title: product.title,
      price: product.price,
    }));
    return products; // Retorna os produtos
  } catch (error) {
    console.error('Erro ao fazer scraping:', error); // Log de erro
    throw new Error('Erro ao fazer scraping');
  }
};
