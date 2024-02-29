
import { Schema, model, models } from "mongoose";

export interface IUser extends Document {
     clerkId: string;
     email: string;
     username: string;
     photo: string;
     firstName?: string; // Optional
     lastName?: string; // Optional
     planId?: number; // Optional, default is 1
     creditBalance?: number; // Optional, default is 15
}

const UserSchema = new Schema({
     clerkId: { type: String, required: true, unique: true },
     email: { type: String, required: true, unique: true },
     username: { type: String, required: true, unique: true },
     photo: { type: String, required: true },
     firstName: { type: String },
     lastName: { type: String },
     planId: { type: Number, default: 1 },
     creditBalance: { type: Number, default: 15 }
})

const User = models?.User || model("User", UserSchema)

export default User;