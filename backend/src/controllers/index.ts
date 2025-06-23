import { UserController } from "./user.controller";
import { InquiryController } from "./inquiry.controller";
import { VehicleController } from "./vehicle.controller";

export namespace Controllers {
  export const User = UserController;
  export const Inquiry = InquiryController;
  export const Vehicle = VehicleController;
}