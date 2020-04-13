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
    Item: {
        "id": id,
        "name": name
    }
};

console.log("Adding a new item...");
ddbClient.put(params, function (err, data) {
    if (err) {
        console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
    } else {
        console.log("Added item:", JSON.stringify(data, null, 2));
    }
});
