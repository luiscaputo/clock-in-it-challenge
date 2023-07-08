import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { Categories } from './Categories';
import { Shoppings } from './Shoppings';

@Entity('products')
export class Products {
  @Column('varchar', { primary: true, name: 'id', length: 255, unique: true })
  id: string;

  @Column('varchar', { name: 'name', length: 250 })
  name: string;

  @Column('float', { name: 'price' })
  price: number;

  @Column('int', { name: 'stockQuantity', nullable: true })
  stockQuantity: number | null;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  updatedAt: Date;

  @ManyToOne(() => Categories, (categories) => categories.products, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([{ name: 'categoryId', referencedColumnName: 'id' }])
  category: Categories;

  @OneToMany(() => Shoppings, (shoppings) => shoppings.product)
  shoppings: Shoppings[];
}
