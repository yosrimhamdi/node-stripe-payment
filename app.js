import express from 'express';
import morgan from 'morgan';

import paymentRouter from './routers/payment';
import domain from './middlewares/domain';

const app = express();

app.set('view engine', 'pug');

app.use(morgan('dev'));
app.use(domain);
app.use(express.raw({ type: 'application/json' }));
app.use(express.static('./public'));

app.get('/', (req, res) => res.render('index'));

app.use('/payment', paymentRouter);

export default app;
