// Database MongoDB
const Contact = require("../../models/contact");

const addContact = async (req, res) => {
  const result = await Contact.create(req.body);
  res.status(201).json(result);
};

module.exports = addContact;

// JSON
// const contacts = require("../../models/contacts");

// const addContact = async (req, res) => {
//   const result = await contacts.addContact(req.body);
//   res.status(201).json(result);
// };

// module.exports = addContact;
