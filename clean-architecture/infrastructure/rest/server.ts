import { createPost } from "./controllers/createPost"

const app = express()

app.use("/post", createPost)

/**
 * Returns fake express app instance.
 *
 * @returns {Object} An express app instance
 */

function express() {
   return {
      use(path: string, handler: any) {}
   }
}
