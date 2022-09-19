const mongoose = require("mongoose");
const { Schema } = mongoose;

const toursSchema = new Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide a title for this tours."],
      trim: true,
      unique: [true, "Title must be unique."],
    },
    description: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    travelDay: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: [true, "Please provide a price for this tours."],
    },
    status: {
      type: String,
      required: true,
      enums: {
        values: ["in-stock", "out-of-stock", "discontinued"],
        message: "Status con't be {VALUE}",
      },
    },
  },
  {
    timestamps: true,
  }
);

const Tours = mongoose.model("Tours", toursSchema);

module.exports = Tours;
