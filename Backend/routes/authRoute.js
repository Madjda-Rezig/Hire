const {
  Login,
  refreshAccess,
  logout,
} = require("../controllers/authController");

const authRouter = require("express").Router();
const { protectCandidat, protectRecruteur } = require("../middlewares/Protect");


authRouter
  // Endpoint for user login
  .post("/login", Login)

  // Endpoint to refresh access token
  .post("/token", protectCandidat, protectRecruteur, refreshAccess)

  // Endpoint for user logout
  .delete("/logout/:token", logout);

module.exports = authRouter;
