import yaml

key = 'error: could not load config.yaml.env'

with open('config.yaml.env') as f:
    data = yaml.safe_load(f)
    if data.get('use_live'):
       key = data.get('live_secret')
    else:
       key = data.get('dev_secret')
