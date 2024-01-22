import { Controller, Get, ClassSerializerInterceptor, UseInterceptors, HttpCode, HttpStatus } from '@nestjs/common';
import { BlogService } from './blog.service';
import { TopPostsSerializer } from './serializer/topPosts.serializer';

@Controller()
export class BlogController {
	constructor(private readonly blogService: BlogService) {}

	@UseInterceptors(ClassSerializerInterceptor)
	@Get('top-posts')
	@HttpCode(HttpStatus.OK)
	async topPosts(): Promise<TopPostsSerializer> {
		return await this.blogService.getTopPosts();
	}
}
