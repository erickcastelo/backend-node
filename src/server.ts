import 'reflect-metadata';
import express from 'express';
import { createConnection } from 'typeorm';
import { categoryRouter } from './modules/category/category.index';
import bodyParser from 'body-parser';

export class Server {
  private readonly app = express();

  constructor() {
    this.app.enable('case sensitive routing');
    this.app.use(bodyParser.json());
  }

  public init = async (): Promise<void> => {
    await createConnection();
    new Promise<void>((res) => {
      this.app.use(categoryRouter.router);
    });
  };

  public start = async (): Promise<void> => {
    new Promise<void>((res) => {
      this.app.listen(3000, () => console.log('backend started in 3000 port!'));
    });
  };
}
