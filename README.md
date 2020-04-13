# dog-api
a simple node api to practice dynamodb integration

# steps to reproduce
docker - installed and running
docker container configured - check dynamodb-config.yaml for reference

## api endpoints

#### put item in table
/save/dog

#### read item from table
/get/id

#### delete item from table
/delete/id

## scripts

#### launch-db
docker-compose -f dynamodb-config.yaml up -d

#### create-table 
aws dynamodb create-table --endpoint-url http://localhost:8000 --table-name dogs --attribute-definitions AttributeName=id,AttributeType=S AttributeName=name,AttributeType=S --key-schema AttributeName=id,KeyType=HASH AttributeName=name,KeyType=RANGE --provisioned-throughput ReadCapacityUnits=5,WriteCapacityUnits=5

#### describe-table
aws dynamodb describe-table --table-name dogs --endpoint-url http://localhost:8000

#### stop-db
docker-compose -f dynamodb-config.yaml down