import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { ArticleTag } from './article-tag.entity';

@Entity({ name: 'tags' })
export class Tag extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(() => ArticleTag, articleTag => articleTag.tagId)
  @JoinColumn({ name: 'id' })
  articles!: ArticleTag[];

  @Column('varchar', { name: 'name', length: 255 })
  name!: string;

  @CreateDateColumn({ name: 'created_at' })
  readonly createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  readonly updatedAt!: Date;
}
