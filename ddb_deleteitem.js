var aws = require('aws-sdk');
let awsConfig = {
    'region': 'eu-west-1',
    'endpoint': 'http://localhost:8000',
    'accessKeyId': 'fake123', 'secretAccessKey': 'neeeeews123'
};

aws.config.update(awsConfig);

var ddb = new aws.DynamoDB({ apiVersion: '2012-08-10' });

var params = {
    TableName: 'DOGS',
    Key: {
        'KEY_NAME': { N: 'VALUE' }
    }
};

ddb.deleteItem(params, function (err, data) {
    if (err) {
        console.log("Error", err);
        throw Error('Failed to delete item from dynamo database');
    } else {
        console.log("Success", data);
    }
});