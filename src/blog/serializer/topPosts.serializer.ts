import { Type, Exclude } from 'class-transformer';
export class TopPostsSerializer {
	@Type(() => Post)
	blog_posts: Post[];
	constructor(posts: Post[]) {
		this.blog_posts = posts;
	}
}

export class Post {
	title: string
	content: string;

	@Exclude()
	id: number;
}