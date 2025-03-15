import { Router } from 'express';
import { scrapeProductData } from '../server/scraper';

const router = Router();

// Rota de scraping
router.get('/scrape', async (req, res) => {
  try {
    const products = await scrapeProductData();
    res.json(products);
  } catch (error) {
    res.status(500).send('Erro ao fazer scraping');
  }
});

export default router;
