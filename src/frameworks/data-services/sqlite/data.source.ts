import { DataSource, DataSourceOptions } from 'typeorm';
import 'dotenv/config';
import 'reflect-metadata';
import { Categories } from '../models/Categories';
import { Clients } from '../models/Clients';
import { Products } from '../models/Products';
import { Shoppings } from '../models/Shoppings';

const entities = [Categories, Clients, Products, Shoppings];

export const dataSourceOptions: DataSourceOptions = {
  type: 'sqlite',
  database: process.env.DATABASE_URL ?? '',
  entities,
  synchronize: true,
  logging: true,
  migrations: ['src/**/migrations/*.{ts,js}'],
};

export const AppDataSource = new DataSource(dataSourceOptions);
