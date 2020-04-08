var aws = require("aws-sdk");

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
    }
};

console.log("Getting the item...");
ddbClient.get(params, function (err, data) {
    if (err) {
        console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
    }
});