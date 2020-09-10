import { Router } from 'express';
import { resolve } from 'path';

const pagesRouter = Router();

const viewsPath = resolve(__dirname, '../', 'resources', 'views');

pagesRouter.get('/signIn', (request, response) => {
  return response.sendFile(resolve(viewsPath, 'signIn.html'));
});

pagesRouter.get('/signUp', (request, response) => {
  return response.sendFile(resolve(viewsPath, 'signUp.html'));
});

pagesRouter.get('/', (request, response) => {
  return response.sendFile(resolve(viewsPath, 'index.html'));
});

export default pagesRouter;
