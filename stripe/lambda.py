import json

print('Loading function')

# Store a mapping from product to SKU
PRODUCTS = {
    'hardcover': 'sku_EdzrI13oo989YZ',
    'paperback': 'sku_Edzr2jr37Mknyu',
    'spanish': 'sku_EdzrT8cbJAyZjb',
}


def respond(err, res=None):
    return {
        'statusCode': '400' if err else '200',
        'body': err.message if err else json.dumps(res),
        'headers': {
               'Content-Type': 'application/json',
               'Access-Control-Allow-Origin': '*'
           }
    }


def create_item(name, quantity):
    return { 'type':'sku', 'parent': PRODUCTS[name], 'quantity': quantity, },


def lambda_handler(event, context):
    #print("Received event: " + json.dumps(event, indent=2))


    if event['httpMethod'] == 'POST':
        body = event.get('body')

        # Get the data from the response
        json_body = json.loads(body)
        token = json_body.get('token')
        purchases = json_body.get('purchases')
        name = json_body.get('name')
        address = json_body.get('address')
        email = json_body.get('email')

        # Validate it
        if not purchases:
            return respond(ValueError('purchases field required'))

        if not token:
            return respond(ValueError('token field required'))

        if not name:
            return respond(ValueError('name field required'))

        if not address:
            return respond(ValueError('address field required'))

        if not email:
            return respond(ValueError('email field required'))

        for name, quantity in purchases.items():
            if name not in PRODUCTS:
                return respond(ValueError('Could not find product ' + name))

            if type(quantity) is not int or quantity < 1:
                return respond(ValueError('quantity must be a non-negative integer'))


        # Create the order on stripe
        stripe.api_key = "sk_test_4eC39HqLyjWDarjtT1zdp7dc"

        order = stripe.Order.create(
          currency='usd',
          email=email,
          items=[create_item(name, quantity) for name, quantity
                 in purchases.items()],
          shipping={
            'name': name,
            'address': address
          }
        )

        return respond(None, res={ "token": token, 'order': order, 'products': product_names})
    else:
        return respond(ValueError('Unsupported method "{}"'.format(event['httpMethod'])))

