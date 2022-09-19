const Tours = require("../models/Tours");
const {
  createTourService,
  getTourService,
  tourDetailsService,
} = require("../services/tour.services");

exports.getTours = async (req, res, next) => {
  try {
    const result = await getTourService();

    res.status(200).json({
      status: "successful",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

exports.createTours = async (req, res, next) => {
  try {
    const result = await createTourService(req.body);

    res.status(200).json({
      status: "successful",
      message: "Data inserted successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};

exports.tourDetails = async (req, res, next) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const result = await tourDetailsService(id);

    res.status(200).json({
      status: "successful",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

exports.updateTour = async (req, res, next) => {
  try {
    const { id } = req.params;
    // console.log(id);
    const result = await Tours.updateOne({ _id: id }, { $set: req.body });

    res.status(200).json({
      status: "successful",
      message: "Data update successfully",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: "Could't update the tour",
      error: error.message,
    });
  }
};
