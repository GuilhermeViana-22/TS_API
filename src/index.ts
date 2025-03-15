// src/index.ts
import { app } from './server/server'; // Usando a exportação nomeada

import productRoutes from './routes/productRoutes';

const port = 3000;

// Usar as rotas no servidor
app.use('/api', productRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});

export default app;