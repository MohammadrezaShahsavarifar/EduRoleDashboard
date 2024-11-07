import app from "./app";
import { connectDb } from "./DB/connectDB";
const port = process.env.PORT || 3000;

connectDb();

app.listen(port, () => {
  console.log(`server is listenning on port ${port}`);
});
