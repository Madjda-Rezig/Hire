const {
  Login,
  refreshAccess,
  logout,
} = require("../controllers/authController");

const authRouter = require("express").Router();
const { protectCandidat } = require("../middlewares/Protect");
authRouter
  .post("/login", Login)
  .post("/token", protectCandidat, refreshAccess)
  .delete("/logout", protectCandidat, logout);

module.exports = authRouter;
