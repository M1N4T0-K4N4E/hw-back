import { Column, DataType, Table, Model } from 'sequelize-typescript';

export enum Role {
  FRONTEND = 'frontend',
  BACKEND = 'backend',
  DESIGNER = 'designer',
}

@Table({ tableName: 'users' })
export class User extends Model {
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare fullName: string;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare email: string;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  declare age: number;

  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  declare role: Role;
}
