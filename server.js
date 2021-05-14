import app from './app';
import mongoose from 'mongoose';
import 'colors';

mongoose.connect('mongodb://localhost/test', {
  useNewUrlParser: true,
  useFindAndModify: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => {
  // console.clear();
  console.log('server running on localhost:3000'.green);
});
