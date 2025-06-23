import { UserModel } from "../models/user.model";


export class UserRepository {
  static async createUser(userData: any) {
    return await UserModel.create(userData);
  }

  static async findUserByEmail(email: string) {
    return await UserModel.findOne({ email });
  }

  static async findUserById(userId: string) {
    return await UserModel.findOne({
      _id: userId,
    });
  }
}