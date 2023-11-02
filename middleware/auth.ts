import { NextFunction, Request, Response } from "express";
import { Role, User } from "@prisma/client";
const jwt = require("jsonwebtoken");

exports.userAuth = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"];
  if (token) {
    jwt.verify(token, process.env.SECRET, (err: Error, decodedUser: User) => {
      if (err || !decodedUser) {
        return res.status(401).json({
          message: "You are not authorized. Please login and try again",
        });
      }
      if (decodedUser.role !== Role.USER && decodedUser.role !== Role.ADMIN) {
        return res.status(401).json({
          message: "You are not authorized. Please login and try again",
        });
      }
      // ********** --- --- **********
      // CALL NEXT AS MIDDLEWARE FUNCTION
      next();
    });
  } else {
    return res.status(401).json({
      message: "You are not authorized. Please login and try again",
    });
  }
};
