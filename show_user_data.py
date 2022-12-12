import boto3
import json


def lambda_handler(event, context):
    email = event['key1']
    dynamodb = boto3.resource('dynamodb', region_name='us-east-1')
    table = dynamodb.Table('registeruser')
    response = table.get_item(
        Key={
            'emailId': email
        }
    )
    print(response)
    item = response['Item']
    # print(response)
    data = response['Item']['expiryDate']

    # return data
    return {

        'statusCode': 200,

        'headers': {'Content-Type': 'text/plain', 'Access-Control-Allow-Origin': '*'},

        'body': data

    }

