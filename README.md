# dog-api
a simple node api to practice dynamodb integration

## api documentation

#### post dog to db
/add

#### find dog by id from db
/dog/id

#### update dog with id from db
/dog/id

#### delete dog with id from db
/delete/id

#### get all dogs from db
/dogs

## scripts

#### launch-db
docker-compose -f dynamodb-config.yaml up -d

#### create-table 
aws dynamodb create-table --endpoint-url http://localhost:8000 --table-name dogs --attribute-definitions AttributeName=id,AttributeType=S AttributeName=name,AttributeType=S --key-schema AttributeName=id,KeyType=HASH AttributeName=name,KeyType=RANGE --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

#### describe-table
aws dynamodb describe-table --table-name dogs --endpoint-url http://localhost:8000

#### stop-db
docker-compose -f dynamodb-config.yaml down