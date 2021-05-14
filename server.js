import app from './app';
import 'colors';

app.listen(3000, () => {
  // console.clear();
  console.log('server running on localhost:3000'.green);
});
