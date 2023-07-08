import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Products } from './Products';
import { Clients } from './Clients';
import { v4 as NewId } from 'uuid';

@Entity('shoppings')
export class Shoppings {
  constructor() {
    if (!this.id) {
      this.id = NewId();
    }
  }
  @Column('varchar', { primary: true, name: 'id', length: 255, unique: true })
  id: string;

  @Column('int', { name: 'quantity' })
  quantity: number;

  @Column('float', { name: 'total' })
  total: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @ManyToOne(() => Products, (products) => products.shoppings, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'productId', referencedColumnName: 'id' }])
  product: Products;

  @ManyToOne(() => Clients, (clients) => clients.shoppings, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'clientId', referencedColumnName: 'id' }])
  client: Clients;
}
