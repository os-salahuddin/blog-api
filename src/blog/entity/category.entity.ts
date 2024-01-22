/* eslint-disable @typescript-eslint/no-unused-vars */

import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { BlogPost } from './blog-post.entity';

@Entity('blog_categories')
export class Category {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false
    })
    name: string;

    @OneToMany(type => BlogPost, blogPost => blogPost.category_id)
    posts: BlogPost[];
}