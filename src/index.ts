import express, { type Request, type Response } from "express";

const app = express();
const PORT = 8000;

app.use(express.json());

const mockUsers = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];

app.get("/api/users", (req: Request, res: Response) => {
  // console.log("query", req.query);
  // res.json(mockUsers);
  res.json({ data: mockUsers });
});

app.post("/api/users", (req: Request, res: Response) => {
  console.log("body", req.body);
  res.status(200).send({ message: "User created" });
  // res.json({ message: 'User created' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
