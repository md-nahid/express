import { Router } from "express";

const authRouter = Router();

authRouter.get("/", (req, res) => {
  console.log(req.user);
  res.send("Auth route with get request!");
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

export { authRouter };
