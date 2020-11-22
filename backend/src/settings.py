""" Settings for application set by envs """
import os

API_USER = os.getenv('API_USER')
API_PASSWORD = os.getenv('API_PASSWORD')
API_URL = os.getenv('API_URL')
SERVER_PORT = int(os.getenv('SERVER_PORT'))
