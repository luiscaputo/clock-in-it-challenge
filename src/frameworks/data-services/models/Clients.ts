import { Column, Entity, OneToMany } from 'typeorm';
import { Shoppings } from './Shoppings';

@Entity('clients')
export class Clients {
  @Column('varchar', { primary: true, name: 'id', length: 255, unique: true })
  id: string;

  @Column('varchar', { name: 'name', length: 250 })
  name: string;

  @Column('varchar', { name: 'email', length: 250, unique: true })
  email: string;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @OneToMany(() => Shoppings, (shoppings) => shoppings.client)
  shoppings: Shoppings[];
}
