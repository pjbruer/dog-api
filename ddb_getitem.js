var aws = require('aws-sdk');
aws.config.update({ region: 'eu-west-1' });

var ddb = new aws.DynamoDB({ apiVersion: '2012-08-10' });

var params = {
    TableName: 'DOGS',
    Key: {
        'KEY_NAME': { N: '001' }
    },
    ProjectionExpression: 'ATTRIBUTE_NAME'
    //TODO - ProjectionExpression 'DOG.NAME, DOG.BREED'

};

ddb.getItem(params, function (err, data) {
    if (err) {
        console.log("Error", err);
        throw Error('Failed to get item from dynamo database');
    } else {
        console.log("Success", data.Item);
    }
});