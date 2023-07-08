// import { MigrationInterface, QueryRunner, Table } from 'typeorm';

// export class Client1688644671281 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.createTable(
//       new Table({
//         name: 'clients',
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
//             name: 'email',
//             type: 'varchar',
//             length: '250',
//             isUnique: true,
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
//     await queryRunner.dropTable('clients');
//   }
// }
