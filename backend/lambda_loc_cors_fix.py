import json
import boto3
from decimal import Decimal
import uuid
from datetime import datetime

TABLE_NAME = "LocalizacaoTable"
dynamodb = boto3.resource('dynamodb')
table = dynamodb.Table(TABLE_NAME)

def lambda_handler(event, context):
    # Headers CORS - IMPORTANTE para permitir requisições do frontend
    headers = {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",  # Em produção, substitua por seu domínio específico
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Methods": "GET,POST,OPTIONS"
    }

    try:
        # Detecta método HTTP
        http_method = event.get('httpMethod', 'GET')

        # Tratar requisições OPTIONS (preflight CORS)
        if http_method == 'OPTIONS':
            return {
                "statusCode": 200,
                "headers": headers,
                "body": ""
            }

        if http_method == 'GET':
            # Busca todos os itens
            response = table.scan()
            items = response.get('Items', [])

            # Converter Decimal para float/int para JSON
            def convert_decimal(obj):
                if isinstance(obj, Decimal):
                    return float(obj)
                raise TypeError

            return {
                "statusCode": 200,
                "headers": headers,  # ADICIONAR HEADERS CORS AQUI
                "body": json.dumps(items, default=convert_decimal)
            }

        elif http_method == 'POST':
            # Inserção de dados
            body = event.get('body', {})
            if isinstance(body, str):
                body = json.loads(body)

            latitude = body.get('latitude')
            longitude = body.get('longitude')
            info = body.get('info', '')

            item = {
                "id": str(uuid.uuid4()),
                "timestamp": datetime.utcnow().isoformat()
            }
            if latitude is not None:
                item["latitude"] = Decimal(str(latitude))
            if longitude is not None:
                item["longitude"] = Decimal(str(longitude))
            if info:
                item["info"] = info

            table.put_item(Item=item)

            return {
                "statusCode": 200,
                "headers": headers,  # ADICIONAR HEADERS CORS AQUI
                "body": json.dumps({"message": "Dados recebidos"})
            }

        else:
            return {
                "statusCode": 405,
                "headers": headers,
                "body": json.dumps({"error": "Método não permitido"})
            }

    except Exception as e:
        print("Erro no Lambda:", e)
        return {
            "statusCode": 500,
            "headers": headers,
            "body": json.dumps({"error": str(e)})
        }

