from flask import Flask, jsonify
from flask_cors import CORS
import time

app = Flask(__name__)
CORS(app)

@app.route('/', methods=['GET'])
def random():
    quote = ["Love For All, Hatred For None", "Change the world by being yourself", "Every moment is a fresh beginning",
     "Never regret anything that made you smile", "Die with memories, not dreams", "Aspire to inspire before we expire",
     "Everything you can imagine is real", "Simplicity is the ultimate sophistication","Whatever you do, do it well",
     "What we think, we become", "Tough times never last but tough people do."]
    value = int(time.time())%len(quote)
    return jsonify({"msg": quote[value]})

if __name__ == '__main__':
    app.run(debug=True)