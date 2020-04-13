# dog-api
a simple node api to practice dynamodb integration

# steps to reproduce

##launch dynamo database 
docker-compose -f docker-compose-dynamodb-local.yaml up -d

## create table 
aws dynamodb create-table --endpoint-url http://localhost:8000 --table-name dogs --attribute-definitions AttributeName=id,AttributeType=S AttributeName=name,AttributeType=S --key-schema AttributeName=id,KeyType=HASH AttributeName=name,KeyType=RANGE --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

## verify that table was created
aws dynamodb describe-table --table-name dogs --endpoint-url http://localhost:8000

## put item in table
/save/dog

## read item from table
/get/id

## delete item from table
/delete/id
