set -e

cd package

# consider updating to use pipenv
pip install stripe --target .

zip -r9 ../function.zip .
cd ../
zip -g function.zip lambda_function.py

aws lambda update-function-code --function-name scroggins-stripe --zip-file fileb://function.zip
