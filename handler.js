'use strict';
var AWS = require('aws-sdk');
const dynamodb =new AWS.DynamoDB.DocumentClient({
    region: 'localhost',
    endpoint: 'http://localhost:8000'
})

module.exports.hello = (event, context, callback) => {

  var params = {
    TableName: "usersTable"
  };

 dynamodb.scan(params, function(err, data) {
   if (err) {
    console.log(err, err.stack);
  }
   else {
    console.log(data);
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Go Serverless v1.0! Your function executed successfully!',
        data: data,
      }),
    };

    callback(null, response);
   }
 });

};
