export class SqlClient {
   connect() {
      console.log("Connected to SQL")
   }

   disconnect() {
      console.log("Disconnected from SQL")
   }

   execute(query: string) {
      console.log("Executing query:", query)
      return {
         id: "1",
         name: "John Doe",
         email: "5e2o3@example.com",
         password: "password"
      }
   }
}
