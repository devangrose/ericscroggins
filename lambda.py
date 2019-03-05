import json

print('Loading function')

PRODUCTS = {
    'hardcover': 24.95,
    'paperback': 19.99,
    'spanish': 19.999,
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


def lambda_handler(event, context):
    #print("Received event: " + json.dumps(event, indent=2))
    
    
    if event['httpMethod'] == 'POST':
        body = event.get('body')
        
        
        
        json_body = json.loads(body)
        token = json_body.get('token')
        purchases = json_body.get('purchases') 
        
        
        if not purchases:
            return respond(ValueError('purchases field required'))
        
        if not token:
            return respond(ValueError('token field required'))
        
        total_cost = 0
        for name, quantity in purchases.items():
            
            if name not in PRODUCTS:
                return respond(ValueError('Could not find product ' + name))
                
            
            
            if type(quantity) is not int:
                return respond(ValueError('quantity must be a non-negative integer'))
            
                
            total_cost += PRODUCTS[name] * quantity
            
        if total_cost <= 0:
            return respond(ValueError('negative total cost'))
        
        product_names = ', '.join(purchases.keys())
        
    
        # Set your secret key: remember to change this to your live secret key in production
        # See your keys here: https://dashboard.stripe.com/account/apikeys
        # if False:
            # stripe.api_key = "sk_test_4eC39HqLyjWDarjtT1zdp7dc"
            
            # Token is created using Checkout or Elements!
            # Get the payment token ID submitted by the form:
            # token = request.form['stripeToken'] # Using Flask
            
            # charge = stripe.Charge.create(
                # amount=total_cost,
                # currency='usd',
                # description='Purchase from Eric Scroggins of ' + product_names,
                # source=token,
            # )
        

        return respond(None, res={"worked?": True, "token": token, 'amount_charged': total_cost, 'products': product_names})
    else:
        return respond(ValueError('Unsupported method "{}"'.format(event['httpMethod'])))

