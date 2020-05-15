/*
router는 많은 route들이 담기 파일.
router란 route들의 복잡함을 쪼개주는데 사용 가능
예)
/user
/user/edit
/user/changepassword
/user/logout
*/
import express from "express";

export const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send('user index'))
userRouter.get("/edit", (req, res) => res.send('user edit'))
userRouter.get("/password", (req, res) => res.send('user password'))