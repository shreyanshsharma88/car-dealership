import { InquiryRepository } from "./inquiry.repository";
import { UserRepository } from "./user.repository";
import { VehicleRepository } from "./vehicle.repository";

export namespace Repository {
    export const User = UserRepository;
    export const Inquiry = InquiryRepository
    export const Vehicle = VehicleRepository
}