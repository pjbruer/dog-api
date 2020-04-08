var aws = require('aws-sdk');
let awsConfig = {
    'region': 'eu-west-1',
    'endpoint': 'http://localhost:8000',
    'accessKeyId': 'fake123', 'secretAccessKey': 'neeeeews123'
};

aws.config.update(awsConfig);

var ddb = new aws.DynamoDB({ apiVersion: '2012-08-10' });
var getDogById = function () {
    var params = {
        TableName: 'dogs',
        Key: {
            'id': { N: '1' }
        },
        ProjectionExpression: 'name'
        //TODO - ProjectionExpression 'DOG.NAME, DOG.BREED'

    };

    ddb.getItem(params, function (err, data) {
        if (err) {
            console.log("Error", err);
            throw Error('Failed to get item from dynamo database');
        } else {
            console.log("Success", data.Item);
        }
    })
};