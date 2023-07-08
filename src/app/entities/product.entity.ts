import { randomUUID } from 'crypto';

interface IProductProps {
  name: string;
  price: number;
  categoryId: string;
  stockQuantity: number;
  createdAt: Date;
}

type Replace<T, R> = Omit<T, keyof R> & R;

export class Product {
  private _id: string;
  private props: IProductProps;

  constructor(
    props: Replace<IProductProps, { createdAt?: Date }>,
    id?: string,
  ) {
    this._id = id ?? randomUUID();
    this.props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }
  public get id(): string {
    return this._id;
  }

  public set name(name: string) {
    this.props.name = name;
  }

  public get name(): string {
    return this.props.name;
  }

  public set price(price: number) {
    this.props.price = price;
  }

  public get price(): number {
    return this.props.price;
  }

  public set categoryId(categoryId: string) {
    this.props.categoryId = categoryId;
  }

  public get categoryId(): string {
    return this.props.categoryId;
  }

  public set stockQuantity(stockQuantity: number) {
    this.props.stockQuantity = stockQuantity;
  }

  public get stockQuantity(): number {
    return this.props.stockQuantity;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
