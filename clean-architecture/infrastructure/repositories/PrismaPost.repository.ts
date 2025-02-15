import { CreatePostDto } from "../../application/CreatePost.dto"
import { CreatePostResultDto } from "../../application/CreatePostResult.dto"
import { IPostRepository } from "../../application/PostRepository.interface"

export class PrismaPostRepository implements IPostRepository {
   create(post: CreatePostDto): CreatePostResultDto {
      return {
         id: "1",
         title: post.title,
         content: post.content,
         authorId: "1"
      }
   }
}
