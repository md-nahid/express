import { Router } from "express";
import { db } from "../db/db.js";

const postRouter = Router();

postRouter.get("/", async (req, res) => {
  try {
    await db.post.create({
      data: {
        title: "First Post",
        content: "This is the first post in the database",
        published: true,
      },
    });

    res.json({ message: "Post created successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to create post" });
  }
});

// authRouter.post("/", (req, res) => {
//   res.send("Auth route with post request!");
// });

// authRouter.put("/", (req, res) => {
//   res.send("Auth route with put request!");
// });

// authRouter.patch("/", (req, res) => {
//   res.send("Auth route with patch request!");
// });

// authRouter.delete("/", (req, res) => {
//   res.send("Auth route with delete request!");
// });

export { postRouter };
