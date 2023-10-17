from flask import Flask

print("This is the name our flask application takes: ", __name__)
app = Flask(__name__)

from app import routes