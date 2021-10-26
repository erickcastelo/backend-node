import { NextFunction, Request, Response } from 'express';
import { Category } from './category.model';
import { CategoryService } from './category.service';

export interface CategoryController {
  index(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void>;

  create(
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void>;
}

export class CategoryControllerImpl implements CategoryController {
  constructor(private categoryService: CategoryService) {}

  public index = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    return response.status(200).send(await this.categoryService.all());
  };

  public create = async (
    request: Request,
    response: Response,
    next: NextFunction
  ): Promise<Response | void> => {
    const body = request.body;
    let data = undefined;
    if (body?.length) {
      data = [];
      for (let i = 0; i < body.length; i++) {
        const { name } = body[i];
        const category = new Category();
        category.name = name;
        data.push(category);
      }
    } else {
      const { name } = body;
      const category = new Category();
      category.name = name;
      data = category;
    }

    const resp = await this.categoryService.create(data);

    return response.status(200).send(resp);
  };
}
