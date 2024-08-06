import { v4 as uuidv4 } from 'uuid';
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);


exports.handler = async (event) => {
    console.log(event);

    const currentDate = new Date();

    const item = {
        id: uuidv4(),
        principalId: event.principalId,
        createdAt: currentDate.toISOString(),
        body: event.content
    }

    const command = new PutCommand({
        TableName : 'cmtr-8cca3a49-Events-test',
        Item: item
    });    

    const putResponse = await docClient.send(command);
    console.log(putResponse);

    const response = {
        statusCode: 201,
        event: item,
    };
    return response;

};
