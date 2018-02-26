'use strict';

module.exports.users = (event, context, callback) => {
  var code = event.body.code ? event.body.code : 200
  if (code === 200) {
    callback(null, {
      statusCode : 200,
      message: "Success",
      event: event
    })
  } else {
    callback(new Error(JSON.stringify(prepareResponse("message with " + code, code))))
  }
  
};


function prepareResponse (message, code) {
  return {
    statusCode: code,
    message: message,
  }
}
