from flask import Flask
from flask_cors import CORS
from members_api import members_bp
from leadership_api import leadership_bp

app = Flask(__name__)
CORS(app)

app.register_blueprint(members_bp)
app.register_blueprint(leadership_bp)

if __name__ == '__main__':
    app.run(debug=True, port=5000)