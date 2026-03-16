import jwt from "jsonwebtoken";

const isAuth = async (req, res, next) => {

  try {

    const token = req.cookies.token;

    if (!token) {
      return res.status(401).json({ message: "User not authenticated" });
    }

    const verifyToken = jwt.verify(token, process.env.JWT_SECRET);

    if (!verifyToken) {
      return res.status(401).json({ message: "Invalid token" });
    }

    req.userId = verifyToken.userId;

    next();

  } catch (error) {
    console.log("isAuth error");
    return res.status(500).json({ message: "Authentication error" });
  }
};

export default isAuth;