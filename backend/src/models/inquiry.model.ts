  import mongoose from "mongoose";

export const inquirySchema = new mongoose.Schema({
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User', 
    },
    name: {
      type: String,
      required: [true, 'Please add your name']
    },
    email: {
      type: String,
      required: [true, 'Please add your email'],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        'Please add a valid email'
      ]
    },
    phone: {
      type: String,
      required: false
    },
    vehicleId: {
      type: mongoose.Schema.ObjectId,
      ref: 'Vehicle', 
      required: false 
    },
    subject: {
      type: String,
      required: [true, 'Please add a subject']
    },
    message: {
      type: String,
      required: [true, 'Please add a message']
    },
  }, {
    timestamps: true 
  });

  inquirySchema.set('toJSON', {
    virtuals: true,
    versionKey: false,
    transform: (_, ret) => {
      ret.id = ret._id;
      delete ret._id;
    },
  });

export const InquiryModel = mongoose.model('Inquiry', inquirySchema);