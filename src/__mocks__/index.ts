import { Request, Response } from 'express-serve-static-core';

export const mockResquest = {} as Request;

export const mockResponse = {
  send: jest.fn(() => []),
} as unknown as Response;
