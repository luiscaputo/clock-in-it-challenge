// import {
//   MigrationInterface,
//   QueryRunner,
//   Table,
//   TableForeignKey,
// } from 'typeorm';

// export class Shopping1688644748982 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.createTable(
//       new Table({
//         name: 'shoppings',
//         columns: [
//           {
//             name: 'id',
//             type: 'varchar',
//             isPrimary: true,
//             length: '255',
//           },
//           {
//             name: 'clientId',
//             type: 'varchar',
//             length: '255',
//             isNullable: false,
//           },
//           {
//             name: 'productId',
//             type: 'varchar',
//             length: '255',
//             isNullable: false,
//           },
//           {
//             name: 'quantity',
//             type: 'int',
//             isNullable: false,
//           },
//           {
//             name: 'total',
//             type: 'float',
//             isNullable: false,
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
//       'shoppings',
//       new TableForeignKey({
//         columnNames: ['clientId'],
//         referencedTableName: 'clients',
//         referencedColumnNames: ['id'],
//         onDelete: 'CASCADE',
//       }),
//     );

//     await queryRunner.createForeignKey(
//       'shoppings',
//       new TableForeignKey({
//         columnNames: ['productId'],
//         referencedTableName: 'products',
//         referencedColumnNames: ['id'],
//         onDelete: 'CASCADE',
//       }),
//     );
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.dropTable('shoppings');
//   }
// }
