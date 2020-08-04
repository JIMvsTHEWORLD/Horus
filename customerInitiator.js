//initiator.js files are a way for us to use these functions without using the browser on the front end.
const customerInitiator = {};
const customerStub = require("./stubs/customersStub.js");
const { resolve } = require("path");

customerInitiator.createCustomer = (req, res, next) => {
  const customer = {
    custId: req.body.custId,
    name: req.body.name,
    age: req.body.age,
    address: req.body.address,
    favBookId: req.body.favBookId
  };

  const callback = (error, data) => {
    res.locals.customers = data
    if (error) console.log('sorry, there was an error', error)
    return next()
  }
  customerStub.CreateCustomer(customer, callback)
}

customerInitiator.getCustomer = (req, res, next) => {
  custId = {custId: req.params.custId}
  const callback = (error, data) => {
    res.locals.customers = data
    if (error) console.log('sorry, there was in error: ', error)
    return next()
  }
  customerStub.GetCustomer(custId, callback)
}

customerInitiator.deleteCustomer = (req, res, next) => {
  custId = {custId: req.params.custId}
  const callback = (error, data) => {
    if (error) console.log('sorry, there was an error', error)
    return next()
  }
  customerStub.DeleteCustomer(custId, callback)
}

module.exports = customerInitiator;