// import {
//   MigrationInterface,
//   QueryRunner,
//   Table,
//   TableForeignKey,
// } from 'typeorm';

// export class Product1688644734470 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.createTable(
//       new Table({
//         name: 'products',
//         columns: [
//           {
//             name: 'id',
//             type: 'varchar',
//             isPrimary: true,
//             length: '255',
//           },
//           {
//             name: 'name',
//             type: 'varchar',
//             length: '250',
//             isNullable: false,
//           },
//           {
//             name: 'price',
//             type: 'float',
//             isNullable: false,
//           },
//           {
//             name: 'categoryId',
//             type: 'varchar',
//             length: '255',
//             isNullable: true,
//           },
//           {
//             name: 'stockQuantity',
//             type: 'int',
//             isNullable: true,
//           },
//           {
//             name: 'createdAt',
//             type: 'timestamp',
//             default: 'CURRENT_TIMESTAMP',
//           },
//           {
//             name: 'updatedAt',
//             type: 'timestamp',
//             default: 'CURRENT_TIMESTAMP',
//           },
//         ],
//       }),
//     );

//     await queryRunner.createForeignKey(
//       'products',
//       new TableForeignKey({
//         columnNames: ['categoryId'],
//         referencedTableName: 'categories',
//         referencedColumnNames: ['id'],
//         onDelete: 'SET NULL',
//       }),
//     );
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.dropTable('products');
//   }
// }
