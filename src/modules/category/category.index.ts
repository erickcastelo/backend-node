import { CategoryControllerImpl } from './category.controller';
import { CategoryRepository } from './category.repository';
import { CategoryRouter } from './category.router';
import { CategoryServiceImpl } from './category.service';

const categoryRepositoryImpl = new CategoryRepository();
const categoryServiceImpl = new CategoryServiceImpl(categoryRepositoryImpl);
const categoryControllerImpl = new CategoryControllerImpl(categoryServiceImpl);
const categoryRouter = new CategoryRouter(categoryControllerImpl);

export { categoryRouter };
