import { IsNumber } from 'class-validator';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('product')
export class Product {
  @Column({ name: 'id', type: 'bigint' })
  @PrimaryGeneratedColumn()
  @IsNumber()
  id: number;

  @Column({ name: 'name', nullable: false })
  productName: string;

  @Column({ name: 'image', nullable: false })
  productImage: string;

  @Column({ name: 'description', nullable: false })
  productDescription: string;

  @Column({ name: 'price', nullable: false })
  productPrice: number;

  @Column({ name: 'discount', nullable: false })
  productDiscount: number;

  @Column({ name: 'type', nullable: false })
  productType: string;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  CreatedAt: Date;

  @CreateDateColumn({ name: 'updated_at', type: 'timestamp' })
  UpdatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  DeletedAt?: Date;
}
