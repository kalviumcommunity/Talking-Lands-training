const cors = require("cors");
const express = require("express");
const bcrypt = require("bcrypt");
const AWS = require('aws-sdk');


require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const port=process.env.PORT || 3000;

app.listen(port, () => {
    console.log("connected successfully");
  });


  AWS.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_DYNAMODB_REGION
  });
  

  const dynamodb = new AWS.DynamoDB.DocumentClient();

const tableName = 'List';

const getCharacters = async async=>{
  const scanParams = {
    TableName: tableName
  };
  const characters = await dynamodb.scan(scanParams, (err, data) => {
    if (err) {
      console.error('Error:', err);
    } else {
      return characters;
    }
  });
}

const addOrUpadteCharacter = async(characters)=>{
  const params={
    TableName:TABLE_NAME,
    Item:characters
  }
 return await dynamodb.put(params).promise()
}

getCharacters();



