import app from './app';
import mongoose from 'mongoose';
import 'colors';

const { PORT, DB_URI } = process.env;

mongoose
  .connect(DB_URI, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('connected to database'.green.italic))
  .catch(console.error);

app.listen(PORT, () => {
  console.clear();
  console.log(`server running on port ${PORT}`.green.italic);
});
