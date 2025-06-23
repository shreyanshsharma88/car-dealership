import { InquiryModel } from "../models/inquiry.model";
import { InquiryInput } from "../utils/types";

export class InquiryRepository {
    static async createInquiry(inquiry: InquiryInput) {
        return await InquiryModel.create(inquiry);
    }
}
