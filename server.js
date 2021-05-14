import app from './app';
import mongoose from 'mongoose';
import 'colors';

mongoose
  .connect(process.env.DB_URI, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected to database'.green.italic))
  .catch(console.error);

app.listen(3000, () => {
  console.clear();
  console.log('server running on localhost:3000'.green.italic);
});
