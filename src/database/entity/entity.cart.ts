import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity('cart')
export class Cart {
  @Column({ name: 'id', type: 'bigint' })
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'user_id', nullable: false })
  userId: number;

  @Column({ name: 'product_id', nullable: false })
  productId: number;

  @Column({ name: 'product_quantity', nullable: false })
  productQuantity: number;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  CreatedAt: Date;

  @CreateDateColumn({ name: 'updated_at', type: 'timestamp' })
  UpdatedAt: Date;

  @DeleteDateColumn({ name: 'deleted_at', nullable: true })
  DeletedAt?: Date;

  // @OneToOne(type => User) @JoinColumn({ name: 'user_id'})
  // userId: User;

  // @OneToOne(type => Product) @JoinColumn({ name: 'product_id'})
  // productId: Product;
}
