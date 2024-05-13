import { Request, Response } from 'express-serve-static-core';
import { CreateUserDto } from '../dtos/CreateUser.dto';
import { CreateUserQueryParams } from '../types/query-params';
import { User } from '../types/response';

let users = []

export const getUsers = async (request: Request, response: Response) => {
  response.send([]);
};

export const getUserById = async (
  request: Request<{ id: string }>,
  response: Response
) => {
  response.send([{}]);
};

export const createUser = async (
  request: Request<{}, {}, CreateUserDto, CreateUserQueryParams>,
  response: Response<User>
) => {
  const {email,password,username} = request.body;
  return response.status(201).send({
    id: 1,
    username: 'Anson',
    email: 'anson@gmail.com',
  });
};
