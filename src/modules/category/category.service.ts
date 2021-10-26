import { ObjectLiteral } from 'typeorm';
import { Category } from './category.model';
import { CategoryRepository } from './category.repository';

export interface CategoryService {
  all(): Promise<Category[]>;
  create(data: Category | Category[]): Promise<ObjectLiteral>;
}

export class CategoryServiceImpl implements CategoryService {
  constructor(private categoryRepository: CategoryRepository) {}

  public all = async (): Promise<Category[]> => {
    return this.categoryRepository.all();
  };

  public create = async (
    data: Category | Category[]
  ): Promise<ObjectLiteral> => {
    return this.categoryRepository.create(data);
  };
}
