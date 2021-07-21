import { BaseEntity, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';
import { Article } from './article.entity';
import { Tag } from './tag.entity';

@Entity({ name: 'articlesTags' })
export class ArticleTag extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('tinyint', { name: 'article_id'})
  articleId!: number;

  @ManyToOne(() => Article, article => article.id)
  @JoinColumn({ name: 'id' })
  readonly Article!: Article;

  @Column('tinyint', { name: 'tag_id'})
  tagId!: number;

  @ManyToOne(() => Tag, tag => tag.id)
  @JoinColumn({ name: 'id' })
  readonly Tag!: Tag;

  @CreateDateColumn({ name: 'created_at' })
  readonly createdAt!: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  readonly updatedAt!: Date;
}
