import { createApp } from './createApp';

const app = createApp();
const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
