// @ts-ignore
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from '@nestjs/typeorm';
import { Category } from './category.entity';

@Entity('blog_posts')
export class BlogPost {
    @PrimaryGeneratedColumn()
    id: number
    @Column({
        nullable: false
    })
    title:string

    @Column({
        type:'text',
        nullable:false
    })
    content:string

    @Column({
        nullable:false
    })
    category_id:number

    @Column({
        nullable:false
    })
    status:string


    @ManyToOne(type => Category, category => category.id)
    @JoinColumn({ name: 'category_id', referencedColumnName: 'id' },)
    category: Category;
}