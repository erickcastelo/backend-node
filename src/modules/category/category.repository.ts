import { Repository } from '../../common/repository';
import { Category } from './category.model';

export class CategoryRepository extends Repository<Category> {
  constructor() {
    super(Category);
  }
}
