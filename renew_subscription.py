import json
import boto3
import datetime
from datetime import date
from botocore.exceptions import ClientError


def lambda_handler(event, context):
    dataSource = boto3.resource('dynamodb')
    table = dataSource.Table('registeruser')

    try:
        response = table.get_item(Key={'emailId': event['emailId']})
        expirationDate = datetime.datetime.strptime(response['Item']['expiryDate'], '%m-%d-%Y')
        limit = (date.today() + datetime.timedelta(days=7)).strftime('%m-%d-%Y')
        limit = datetime.datetime.strptime(limit, '%m-%d-%Y')
        newExpirationDate = (expirationDate + datetime.timedelta(days=30)).strftime('%m-%d-%Y')

        if (expirationDate <= limit):
            table.update_item(
                Key={'emailId': event['emailId']},
                UpdateExpression="SET expiryDate = :expiryDate",
                ExpressionAttributeValues={':expiryDate': newExpirationDate},
                ReturnValues="UPDATED_NEW"
            )

        else:
            return {
                'statusCode': 200,
                'body': json.dumps('Cannot renew the subscription unless it expries in seven days or less.')
            }

    except ClientError as e:

        return ((e.response['Error']['Message']))

    return {
        'statusCode': 200,
        'body': json.dumps('Subscription is renewed.')
    }
