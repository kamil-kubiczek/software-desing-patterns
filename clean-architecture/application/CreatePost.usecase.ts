import { PostEntity } from "../domain/post.entity"
import { TitleValueObject } from "../domain/title.vo"
import { CreatePostDto } from "./CreatePost.dto"
import { IPostRepository } from "./PostRepository.interface"

export class CreatePostUseCase {
   constructor(private readonly postRepository: IPostRepository) {}

   execute(post: CreatePostDto) {
      const result = this.postRepository.create(post)

      return new PostEntity(result.id, new TitleValueObject(result.title), result.content)
   }
}
