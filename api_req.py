import requests

BASE_URL = 'http://127.0.0.1:3000'

def create_item(title, body):
    payload = {title: body}
    response = requests.post(f'{BASE_URL}/items', json=payload)
    if response.status_code == 201:
        print('Item created:', response.json())
    else:
        print('Failed to create item')

# Example usage
title = input("Enter a title:")
body = input("Enter a body:")
create_item(title, body)
