import { SelectQueryBuilder, getRepository, ObjectLiteral } from 'typeorm';

export abstract class Repository<T> {
  private typeClass: new (...args: any[]) => T;

  constructor(TCtor: new (...args: any[]) => T) {
    this.typeClass = TCtor;
  }

  protected manager(): SelectQueryBuilder<T> {
    return getRepository(this.typeClass).createQueryBuilder();
  }

  public all = async (): Promise<T[]> => {
    return this.manager().getMany();
  };

  public create = async (data: T | T[]): Promise<ObjectLiteral> => {
    const insert = await this.manager()
      .insert()
      .into(this.typeClass)
      .values(data)
      .execute();
    const identifiers = insert.identifiers;
    return identifiers.length === 1 ? identifiers[0] : identifiers;
  };

  /*protected updated = async (data: T) => {
    return this.manager().update(this.typeClass).set(data)
  }*/
}
