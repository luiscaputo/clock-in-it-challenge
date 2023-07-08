import { Clients } from '@frameworks/data-services/models/Clients';
import { Products } from '@frameworks/data-services/models/Products';
import { randomUUID } from 'crypto';

interface IShoppingProps {
  clientId: Clients;
  productId: Products;
  quantity: number;
  total: number;
  createdAt: Date;
}

type Replace<T, R> = Omit<T, keyof R> & R;

export class Shopping {
  private _id: string;
  private props: IShoppingProps;

  constructor(
    props: Replace<IShoppingProps, { createdAt?: Date }>,
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

  public set clientId(clientId: Clients) {
    this.props.clientId = clientId;
  }

  public get clientId(): Clients {
    return this.props.clientId;
  }

  public set productId(productId: Products) {
    this.props.productId = productId;
  }

  public get productId(): Products {
    return this.props.productId;
  }

  public set quantity(quantity: number) {
    this.props.quantity = quantity;
  }

  public get quantity(): number {
    return this.props.quantity;
  }

  public set total(total: number) {
    this.props.total = total;
  }

  public get total(): number {
    return this.props.total;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
