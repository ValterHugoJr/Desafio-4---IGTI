import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocument } from './swagger.js';
import { gradeRouter } from './routes/gradeRouter.js';
import { logger } from './config/logger.js';
import { db } from './models/index.js';

(async () => {
  try {
    await db.mongoose.connect(db.url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    logger.info('Conectado ao banco de dados');
  } catch (error) {
    logger.error(`Erro ao conectar no banco de dados! ${error}`);
    process.exit();
  }
})();

const app = express();
app.use(cors({ origin: process.env.APP_URL }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(gradeRouter);
app.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(process.env.PORT || 8081, () => {
  logger.info(`Servidor em execucao na porta ${process.env.PORT}`);
});
