// src/server/server.ts
import express from 'express';
import productRoutes from '../routes/productRoutes';

const app = express();
const port = 3001;

app.use(express.json());
app.use('/api/products', productRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});

// Exporte o app como uma exportação nomeada
export { app };
