import { Column, DataType, Table, Model, PrimaryKey } from 'sequelize-typescript';

@Table({ tableName: 'transactions' })
export class Transaction extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare transactionId: string;

  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare userId: number;

  @PrimaryKey
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare topicId: number;

  @Column({
    type: DataType.DATE,
    allowNull: false,
  })
  declare testedAt: Date;

  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  declare score: number;
}
