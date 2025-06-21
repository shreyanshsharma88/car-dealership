import { UserModel } from "../models/user.model";

export const createUser = async (userData: any) => {
  return await UserModel.create(userData);
};

export const findUserByEmail = async (email: string) => {
  return await UserModel.findOne({ email });
};

export const findUserById = async (userId: string) => {
  return await UserModel.findOne({
    _id: userId,
  });
};
