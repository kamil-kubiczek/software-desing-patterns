import { TitleValueObject } from "./title.vo"

export class PostEntity {
   private id: string

   private title: TitleValueObject

   private content: string

   get getId() {
      return this.id
   }

   get getTitle() {
      return this.title
   }

   get getContent() {
      return this.content
   }

   set setTitle(title: TitleValueObject) {
      try {
         PostEntity.validate(this.id, title, this.content)
         this.title = title
      } catch (e) {
         throw e
      }
   }

   set setContent(content: string) {
      try {
         PostEntity.validate(this.id, this.title, content)
         this.content = content
      } catch (e) {
         throw e
      }
   }

   constructor(id: string, title: TitleValueObject, content: string) {
      try {
         PostEntity.validate(id, title, content)
         this.id = id
         this.title = title
         this.content = content
      } catch (e) {
         throw e
      }
   }

   static validate(id: string, title: TitleValueObject, content: string) {
      if (!id || !title || !content) {
         throw new Error("Post is invalid")
      }

      if (content.length < 5 || content.length > 500) {
         throw new Error("Content is invalid")
      }
   }

   compare(post: PostEntity) {
      return this.id === post.id && this.title.compare(post.title)
   }
}
