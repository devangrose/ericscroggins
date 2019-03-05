import stripe
import config

stripe.api_key = config.key

hardcover = stripe.SKU.create(
  currency='usd',
  inventory={
    'type': 'infinite'
  },
  price=2499,
  product='prod_EdzhxTpPYNCOdW',
  attributes={
      'cover': 'hard',
      'language': 'english'
  },
)

print(hardcover)

paperback = stripe.SKU.create(
  currency='usd',
  inventory={
    'type': 'infinite'
  },
  price=1999,
  product='prod_EdzhxTpPYNCOdW',
  attributes={
      'cover': 'soft',
      'language': 'english'
  },
)

print(paperback)

spanish = stripe.SKU.create(
  currency='usd',
  inventory={
    'type': 'infinite'
  },
  price=1999,
  product='prod_EdzhxTpPYNCOdW',
  attributes={
      'cover': 'soft',
      'language': 'spanish'
  },
)

print(spanish)
