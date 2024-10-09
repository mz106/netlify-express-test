const { Router } = require("express");
const userRouter = Router();

userRouter.get("/users/getallusers", async (req, res) => {
  res.status(200).json({ message: "getallusers hit!!!" });
});

module.exports = userRouter;
