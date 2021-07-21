import { BaseEntity, Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Article } from './article.entity';

@Entity({ name: 'users' })
export class User extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @OneToMany(() => Article, article => article.userId)
  articles!: Article[];

  @Column('varchar', { name: 'title', length: 255 })
  name!: string;

  @Column('varchar', { name: 'age', length: 255, default: '0' })
  age: string;

  @CreateDateColumn({ name: 'created_at' })
  readonly createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  readonly updatedAt!: Date;
}
