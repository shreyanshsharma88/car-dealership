import { InquiryModel } from "../models/inquiry.model";
import { InquiryInput } from "../utils/types";

export const createInquiry = async (inquiry: InquiryInput) => {
    return await InquiryModel.create(inquiry);
}