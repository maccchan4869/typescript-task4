import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user.entity';
import { ArticleTag } from './article-tag.entity';

@Entity({ name: 'articles' })
export class Article extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @OneToMany(() => ArticleTag, articleTag => articleTag.articleId)
  @JoinColumn({ name: 'id' })
  readonly articleTag!: ArticleTag[];

  @Column('varchar', { name: 'user_id', length: 255 })
  userId!: string;

  @ManyToOne(() => User, user => user.id)
  @JoinColumn({ name: 'user_id' })
  readonly user!: User;

  @Column('varchar', { name: 'title', length: 255 })
  title!: string;

  @Column('text', { name: 'content' })
  content: string;

  @CreateDateColumn({ name: 'created_at' })
  readonly createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  readonly updatedAt!: Date;
}
