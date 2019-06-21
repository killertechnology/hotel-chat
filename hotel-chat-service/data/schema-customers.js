// /backend/data.js
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// this will be our data base's data structure 
const DataCustomers = new Schema(
  {
    id: Number,
	first: String,
	last: String,
	age: Number,
	description: String,
	status: String,
	checkedIn: Boolean,
  },
  { timestamps: true }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model("Customers", DataCustomers);