import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Parcel {
  @PrimaryColumn()
  sku: string;

  @Column()
  description: string;

  @Column({ nullable: false })
  streetAddress: string;

  @Column({ nullable: false })
  postcode: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false })
  country: string;

  @Column({ type: 'timestamp', nullable: false })
  deliveryDate: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
