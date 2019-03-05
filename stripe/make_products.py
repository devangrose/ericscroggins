import stripe
import config

stripe.api_key = config.key

book = stripe.Product.create(
  name='Vision Blockers',
  type='good',
  attributes=['cover', 'language'],
  description='Eric Scroggins book',
)

print(book)
