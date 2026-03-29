import { Request, Response, NextFunction } from "express"
import jwt from "jsonwebtoken"

export function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({
      error: "Token not provided",
    })
  }

  const [, token] = authHeader.split(" ")

  if (!token) {
    return res.status(401).json({
      error: "Invalid token",
    })
  }

  try {
    jwt.verify(token, process.env.JWT_SECRET as string)

    return next()
  } catch (error) {
    return res.status(401).json({
      error: "Invalid or expired token",
    })
  }
}