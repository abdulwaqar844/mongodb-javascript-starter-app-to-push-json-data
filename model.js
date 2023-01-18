const mongoose = require("mongoose");

const LinguistData = mongoose.Schema({
  profileCompletion: { type: String, default: '5' },
  profileStatus: { type: String, default: 'unverified' },
  forgotCode: { type: String, default: '000' },
  password: String,
  createdAt: String,
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  gender: { type: String, default: '' },
  type: { type: String, default: '' },
  time: { type: String, default: '' },
  imageForm: { type: Boolean, default: false },
  personalForm: { type: Boolean, default: false },
  contactForm: { type: Boolean, default: false },
  educationForm: { type: Boolean, default: false },
  workForm: { type: Boolean, default: false },
  authCode: { type: String, default: null },
  businessForm: { type: Boolean, default: false },
  paymentForm: { type: Boolean, default: false },
  email: String,
  nickname: { type: String, default: '' },
  image: { type: String, default: 'https://firebasestorage.googleapis.com/v0/b/interpreter-88bbf.appspot.com/o/i.jpg?alt=media&token=e152b371-ae02-4009-a278-b06f483e4185' },
  email: { type: String, default: '' },
  phone: { type: String, default: '' },
  skype: { type: String, default: '' },
  contactMethod: { type: String, default: '' },
  about: { type: String, default: '' },
  dob: { type: String, default: '' },
  mainLanguage: { type: String, default: '' },
  otherLanguage: { type: String, default: '' },
  liveOtherCountry: { type: String, default: '' },
  yearOtherCountry: { type: String, default: '' },
  address: { type: String, default: '' },
  address1: { type: String, default: '' },
  address2: { type: String, default: '' },
  city: { type: String, default: '' },
  country: { type: String, default: '' },
  livesin: { type: String, default: '' },
  postal: { type: String, default: '' },
  timezone: { type: String, default: '' },
  college: { type: String, default: '' },
  startDate: { type: String, default: '' },
  endDate: { type: String, default: '' },
  degree: { type: String, default: '' },
  areaOfStudy: { type: String, default: '' },
  aboutQualification: { type: String, default: '' },
  website: { type: String, default: '' },
  workingFor: { type: String, default: '' },
  businessType: { type: String, default: '' },
  feedbackScore: { type: Number, default: 0 },
  sizeClassification: { type: String, default: '' },
  numberEmployee: { type: String, default: '' },
  resume: { type: String, default: '' },
  profileTitle: { type: String, default: '' },
  iban: { type: String, default: '' },
  bic: { type: String, default: '' },
  bankname: { type: String, default: '' },
  taxid: { type: String, default: '' },
});
module.exports = mongoose.model("linguists", LinguistData);

