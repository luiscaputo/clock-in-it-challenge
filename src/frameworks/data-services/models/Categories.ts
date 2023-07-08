import { Column, Entity, OneToMany } from 'typeorm';
import { Products } from './Products';

@Entity('categories')
export class Categories {
  @Column('varchar', { primary: true, name: 'id', length: 255, unique: true })
  id: string;

  @Column('varchar', { name: 'name', nullable: true, length: 250 })
  name: string | null;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @OneToMany(() => Products, (products) => products.category)
  products: Products[];
}
