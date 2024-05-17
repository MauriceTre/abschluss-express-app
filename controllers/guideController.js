const Guide = require("../models/guideModel");

exports.getGuides = async (req, res) => {
  const guides = await Guide.findAll();
  res.json(guides);
};
