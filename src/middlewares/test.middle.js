const isLoggedIn = false;

export function testMiddleWare(req, res, next) {
  if (!isLoggedIn) {
    return res.status(401).send("Unauthorized");
  }

  console.log("Test middleware is working!");

  req.user = {
    name: "John Doe",
    email: "example@ex.com",
  };
  next();
}
