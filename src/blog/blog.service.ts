import { Injectable} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BlogPost } from './entity/blog-post.entity';
import { Repository, Connection} from 'typeorm';
import {TopPostsSerializer} from './serializer/topPosts.serializer';

@Injectable()
export class BlogService {
    constructor(
        @InjectRepository(BlogPost)
        private blogPostRepository: Repository<BlogPost>,
        private connection: Connection
    ) { }

    //============ Top 3 trending for the right position of the blog=======//
    async getTopPosts(): Promise<TopPostsSerializer> {

        let blogPosts = await this.connection
            .getRepository(BlogPost)
            .createQueryBuilder('blogPost')
            .select(['blogPost.id', 'blogPost.title', 'blogPost.content'])
            .leftJoinAndSelect('blogPost.category', 'category')
            .where({ status: 'published' })
            .take(3)
            .getMany();

        return new TopPostsSerializer(blogPosts);
    }
}

