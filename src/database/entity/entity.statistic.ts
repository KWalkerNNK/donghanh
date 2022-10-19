import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('statistic')
export class Statistic {
  @Column({ name: 'id', type: 'bigint' })
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'cart_id', nullable: false })
  cartId: number;

  @Column({ name: 'status', default: 'unconfirmed' })
  status: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  CreatedAt: Date;

  @CreateDateColumn({ name: 'updated_at', type: 'timestamp' })
  UpdatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  DeletedAt?: Date;
}
