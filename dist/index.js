"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const PORT = 8000;
const mockUsers = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" },
];
app.get("/api/users/:id", (req, res) => {
    const parseId = parseInt(req.params.id);
    // console.log("parseId", parseId);
    if (isNaN(parseId)) {
        return res.status(400).send({ message: "Invalid ID supplied" });
    }
    const user = mockUsers.find((user) => user.id === parseId);
    if (!user) {
        console.log("user not found");
        return res.status(404).send({ message: "User not found" });
    }
    return res.send(user);
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
