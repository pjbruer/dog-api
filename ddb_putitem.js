var aws = require('aws-sdk');
aws.config.update({ region: 'eu-west-1' });

var ddb = new aws.DynamoDB({ apiVersion: '2012-08-10' });

var params = {
    TableName: 'DOGS',
    Item: {
        'DOG_ID': { N: '001' },
        'DOG_NAME': { S: 'Gora' },
        'DOG_BREED': { S: 'Schäfer' }
    }
};

ddb.putItem(params, function (err, data) {
    if (err) {
        console.log('Error', err);
        throw Error('Failed to save item to dynamo database');
    } else {
        console.log("Success", data);
    }
})
