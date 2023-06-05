import express, { Request, Response } from 'express';
import path from 'path';
const app = express();

app.use(express.static(path.join(__dirname, './'), {
  setHeaders: (res, filePath) => {
    if (filePath.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript');
    }
  },
}));

app.get('/', (req: Request, res: Response) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
