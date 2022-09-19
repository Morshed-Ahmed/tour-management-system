const Tours = require("../models/Tours");

exports.getTourService = async () => {
  const result = await Tours.find({});
  return result;
};

exports.createTourService = async (data) => {
  const result = await Tours.create(data);
  return result;
};

exports.tourDetailsService = async (id) => {
  const result = await Tours.findOne({ _id: id });
  return result;
};
