import { model, Schema } from 'mongoose'

const UserSchema = new Schema({
  email: {
    unique: true,
    required: true,
    type: String
  },
  fullname: {
    required: true,
    type: String
  },
  username: {
    unique: true,
    required: true,
    type: String
  },
  passward: {
    required: true,
    type: String
  },
  confirmed: {
    type: Boolean,
    default: false
  },
  confirmed_hash: {
    required: true,
    type: String
  },
  location: String,
  about: String,
  website: String,
})

export const UserModel = model('User', UserSchema)