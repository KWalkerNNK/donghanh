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
  id: number;

  @Column({ name: 'name', nullable: false })
  productName: string;

  @Column({ name: 'files', nullable: false })
  productFiles: string;

  @Column({ name: 'description', default: '' })
  productDescription: string;

  @Column({ name: 'price', nullable: false })
  productPrice: number;

  @Column({ name: 'quantity', nullable: false })
  productQuantity: number;

  @Column({ name: 'discount', default: 0 })
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
