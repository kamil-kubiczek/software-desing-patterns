export class TitleValueObject {
   constructor(private readonly title: string) {
      if (title.length < 5 || title.length > 100) {
         throw new Error("Title is invalid")
      }
   }
   compare(title: TitleValueObject) {
      return this.title === title.title
   }
}
