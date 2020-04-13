var aws = require('aws-sdk');
let awsConfig = {
    'region': 'eu-west-1',
    'endpoint': 'http://localhost:8000',
    //'accessKeyId': 'john123', 'secretAccessKey': 'doe123'
};
aws.config.update(awsConfig);

var ddbClient = new aws.DynamoDB.DocumentClient();

var table = "dogs";

var id = "1";
var name = "Gora";

var params = {
    TableName: table,
    Key: {
        "id": id,
        "name": name
    },
    ConditionExpression: "id = :val",
    ExpressionAttributeValues: {
        ":val": "1"
    }
};

console.log("Attempting a conditional delete...");
ddbClient.delete(params, function (err, data) {
    if (err) {
        console.error("Unable to delete item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("DeleteItem succeeded:", JSON.stringify(data, null, 2));
    }
});