const validateBody = require("./validateBody");
const isValidId = require("./isValidId");
const validateBodyFavorite = require("./validateBodyFavorite");
const validateBodySubscription = require("./validateBodySubscription");
const authenticate = require("./authenticate");
const upload = require("./upload");
const validateBodyEmail = require("./validateBodyEmail");

module.exports = {
  validateBody,
  isValidId,
  validateBodyFavorite,
  validateBodySubscription,
  authenticate,
  upload,
  validateBodyEmail,
};
