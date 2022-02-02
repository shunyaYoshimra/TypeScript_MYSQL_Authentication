import { RequestHandler } from 'express';
import { User } from '../models/user';
import MYSQLClient from "../lib/database/client";

export const signup: RequestHandler = async (req, res, next) => {
  const name = (req.body as { name: string }).name;
  const password = (req.body as { password: string }).password;
  const newUser: User = {
    id: Math.random().toString(),
    name: name,
    password: password
  }
  if (!newUser) {
    res.status(500).json({
      error: "入力値が正しくありません",
    })
  }
  try {
    const query = `"INSERT INTO users(id, name, password) VALUES(${newUser.id}, ${newUser.name}, ${newUser.password})`;
    await MYSQLClient.executeQuery(query);
  } catch (error) {
    res.status(500).json({
      error: "ユーザー情報を登録できませんでした",
    })
  }
  req.session.id = newUser.id as string;
  res.json({
    user: newUser,
    message: "新しいユーザーを登録しました",
  })
}
  
export const login: RequestHandler = async (req, res, next) => {
  const name = (req.body as { name: string }).name;
  const password = (req.body as { password: string }).password;
  try {
    const query = `SELECT * FROM users WHERE name = ${name}`;
    var data = await MYSQLClient.executeQuery(query);
  } catch (error) {
    res.status(500).json({
      error: "入力情報に誤りがあります",
    })
  }
}

