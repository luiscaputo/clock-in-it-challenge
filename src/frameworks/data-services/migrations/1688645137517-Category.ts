// import { MigrationInterface, QueryRunner, Table } from 'typeorm';

// export class Category1688645137517 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.createTable(
//       new Table({
//         name: 'categories',
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
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.dropTable('categories');
//   }
// }
