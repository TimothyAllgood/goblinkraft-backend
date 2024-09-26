import { NextFunction, Request, Response } from "express";
import { Role, User } from "@prisma/client";
const jwt = require("jsonwebtoken");
const { auth } = require("express-oauth2-jwt-bearer");

exports.adminAuth = (req: Request, res: Response, next: NextFunction) => {
  // const token = req.headers["authorization"];
  // if (token) {
  //   jwt.verify(
  //     token,
  //     process.env.DECODE_SECRET,
  //     (err: Error, decodedUser: User) => {
  //       if (err || !decodedUser) {
  //         return res.status(401).json({
  //           message: "You are not authorized. Please login and try again",
  //         });
  //       }
  //       if (decodedUser.role !== Role.ADMIN) {
  //         return res.status(401).json({
  //           message: "You are not authorized. Please login and try again",
  //         });
  //       }
  //       // ********** --- --- **********
  //       // CALL NEXT AS MIDDLEWARE FUNCTION
  //       next();
  //     }
  //   );
  // } else {
  //   return res.status(401).json({
  //     message: "You are not authorized. Please login and try again",
  //   });
  // }
};

// exports.userAuth = (req: Request, res: Response, next: NextFunction) => {
//   const token = req.headers["authorization"];
//   if (token) {
//     jwt.verify(
//       token,
//       process.env.DECODE_SECRET,
//       (err: Error, decodedUser: User) => {
//         if (err || !decodedUser) {
//           return res.status(401).json({
//             message: "You are not authorized. Please login and try again",
//           });
//         }
//         if (decodedUser.role !== Role.USER && decodedUser.role !== Role.ADMIN) {
//           return res.status(401).json({
//             message: "You are not authorized. Please login and try again",
//           });
//         }
//         // ********** --- --- **********
//         // CALL NEXT AS MIDDLEWARE FUNCTION
//         next();
//       }
//     );
//   } else {
//     return res.status(401).json({
//       message: "You are not authorized. Please login and try again",
//     });
//   }
// };

exports.userAuth = async (req: Request, res: Response, next: NextFunction) => {
  // await auth({
  //   audience: process.env.AUDIENCE,
  //   issuerBaseURL: process.env.ISSUER,
  // })(req, res, next);
};
