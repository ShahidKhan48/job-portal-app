const mongoose = require("mongoose");

let schema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  maxApplicants: {
    type: Number,
    validate: [
      {
        validator: Number.isInteger,
        msg: "maxApplicants should be an integer",
      },
      {
        validator: function (value) {
          return value > 0;
        },
        msg: "maxApplicants should greater than 0",
      },
    ],
  },
  maxPositions: {
    type: Number,
    validate: [
      {
        validator: Number.isInteger,
        msg: "maxPostions should be an integer",
      },
      {
        validator: function (value) {
          return value > 0;
        },
        msg: "maxPositions should greater than 0",
      },
    ],
  },
  dateOfPosting: {
    type: Date,
    default: new Date(),
  },
  deadline: {
    type: Date,
    validate: [
      {
        validator: function (value) {
          return this.dateOfPosting < value;
        },
        msg: "deadline should be greater than dateOfPosting",
      },
    ],
  },
  skillsets: [String],
  jobType: {
    type: String,
    required: true,
  },
  duration: {
    type: Number,
    min: 0,
    validate: [
      {
        validator: Number.isInteger,
        msg: "Duration should be an integer",
      },
    ],
  },
  salary: {
    type: Number,
    validate: [
      {
        validator: Number.isInteger,
        msg: "Salary should be an integer",
      },
      {
        validator: function (value) {
          return value >= 0;
        },
        msg: "Salary should be positive",
      },
    ],
  },
  rating: {
    type: Number,
    max: 5.0,
    default: -1.0,
  },
});

module.exports = mongoose.model("jobs", schema);
