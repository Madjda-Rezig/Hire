const {
  Login,
  refreshAccess,
  logout,
} = require("../controllers/authController");

const authRouter = require("express").Router();
const { protectCandidat, protectRecruteur } = require("../middlewares/Protect");
authRouter
  .post("/login", Login)
  .post("/token", protectCandidat,protectRecruteur, refreshAccess)
  .delete("/logout/:token", logout);

module.exports = authRouter;
