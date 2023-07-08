import { randomUUID } from 'crypto';

interface ICategoryProps {
  name: string;
  createdAt: Date;
}
type Replace<T, R> = Omit<T, keyof R> & R;

export class Category {
  private _id: string;
  private props: ICategoryProps;

  constructor(
    props: Replace<ICategoryProps, { createdAt?: Date }>,
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

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
