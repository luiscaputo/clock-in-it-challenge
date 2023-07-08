import { randomUUID } from 'crypto';

interface IClientProps {
  name: string;
  email: string;
  createdAt: Date;
}

type Replace<T, R> = Omit<T, keyof R> & R;

export class Client {
  private _id: string;
  private props: IClientProps;

  constructor(props: Replace<IClientProps, { createdAt?: Date }>, id?: string) {
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

  public set email(email: string) {
    this.props.email = email;
  }

  public get email(): string {
    return this.props.email;
  }

  public get createdAt(): Date {
    return this.props.createdAt;
  }
}
