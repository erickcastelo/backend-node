import { Router } from 'express';
import { CategoryController } from './category.controller';

export class CategoryRouter {
  constructor(private categoryController: CategoryController) {}

  get router() {
    const router = Router();
    router.get('/category', this.categoryController.index);
    router.post('/category', this.categoryController.create);

    return router;
  }
}
