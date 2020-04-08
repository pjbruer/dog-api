var aws = require('aws-sdk');
let awsConfig = {
    'region': 'eu-west-1',
    'endpoint': 'http://localhost:8000',
    //'accessKeyId': 'john123', 'secretAccessKey': 'doe123'
};
aws.config.update(awsConfig);

var ddbClient = new aws.DynamoDB.DocumentClient();

var table = "dogs";

var id = "2";
var name = "Moss";

var params = {
    TableName: table,
    Key: {
        "id": id,
        "name": name
    },
    UpdateExpression: "set id = :r, name=:p",
    ExpressionAttributeValues: {
        ":r": 3,
        ":p": "Ia"
    },
    ReturnValues: "UPDATED_NEW"
};

console.log("Updating the item...");
docClient.update(params, function (err, data) {
    if (err) {
        console.error("Unable to update item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("UpdateItem succeeded:", JSON.stringify(data, null, 2));
    }
});
