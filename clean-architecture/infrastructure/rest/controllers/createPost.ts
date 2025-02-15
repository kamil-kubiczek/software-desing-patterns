import { CreatePostDto } from "../../../application/CreatePost.dto"
import { CreatePostUseCase } from "../../../application/CreatePost.usecase"
import { PrismaPostRepository } from "../../repositories/PrismaPost.repository"

export function createPost(post: CreatePostDto) {
   const repo = new PrismaPostRepository()
   const result = new CreatePostUseCase(repo).execute(post)
   return result
}
