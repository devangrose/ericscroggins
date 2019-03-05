import json
import stripe

print('Loading function')

# Store a mapping from product to SKU
PRODUCTS = {
    'hardcover': 'sku_EdzrI13oo989YZ',
    'paperback': 'sku_Edzr2jr37Mknyu',
    'spanish': 'sku_EdzrT8cbJAyZjb',
}


def respond(err, res=None):
    if err:
        return {
            'statusCode': '400',
            'body': err.message,
            'headers': {
                   'Access-Control-Allow-Origin': '*'
               }
        }
    else:
        return {
            'statusCode': '200',
            'body': json.dumps(res),
            'headers': {
                   'Content-Type': 'application/json',
                   'Access-Control-Allow-Origin': '*'
               }
        }


def create_item(name, quantity):
    return { 'type':'sku', 'parent': PRODUCTS[name], 'quantity': quantity, },


def lambda_handler(event, context):
    #print("Received event: " + json.dumps(event, indent=2))

    # Get the data from the response
    # json_body = json.loads(body)
    json_body = event
    token = json_body.get('token')
    purchases = json_body.get('purchases')
    name = json_body.get('name')
    address = json_body.get('address')
    email = json_body.get('email')

    # Validate it
    if not purchases:
        return 'purchases field required'

    if not token:
        return 'token field required'

    if not name:
        return 'name field required'

    if not address:
        return 'address field required'

    if not email:
        return 'email field required'

    items = []
    for name, quantity in purchases.items():
        if quantity == 0:
            continue
        if name not in PRODUCTS:
            return 'Could not find product ' + name
        if type(quantity) is not int or quantity < 1:
            return 'quantity must be a non-negative integer: ' + str(quantity)

        items.append(create_item(name, quantity))

    if not items:
        return 'no valid purchases'

    # Create the order on stripe
    stripe.api_key = "sk_test_4eC39HqLyjWDarjtT1zdp7dc"

    order = stripe.Order.create(
      currency='usd',
      email=email,
      items=items,
      shipping={
        'name': name,
        'address': {
            'line1': address['line1'],
            'line2': "",
            'city': address['city'],
            'state': address['state'],
            'postal_code': str(address['postal_code']),
            'country': address['country']
        }
      }
    )
    order.pay(source=token)

    return respond(None, res={ "token": token, 'order': order, 'products': product_names})
