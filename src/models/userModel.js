const {Schema, model} = require("mongoose");

const userSchema = new Schema(
    {
        fullname: {
            type: String,
            required: [true, "Fullname is required"],
            trim: true,
            minlength: [3, "Fullname must be at least 3 characters"],
            maxlength: [30, "Fullname must be less than 30 characters"],
        },
        email: {
            type: String,
            required: [true, "Email is required"],
            unique: true,
        },
        password: {
            type: String,
            required: [true, "Password is required"],
            minlength: [6, "Password must be at least 6 characters"],
        },
        photo: {
            type: String,
        },
        isAdmin: {
            type: Boolean,
            required: [true, "isAdmin is required"],
            default: false,
        },
        phone: String,
        orders: [
            {
                type: Schema.Types.ObjectId,
                ref: "Order",
            },
        ],
        cart: [
            {
                type: Schema.Types.ObjectId,
                ref: "Product",
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    },
);

const User = model("User", userSchema);

module.exports = User;

