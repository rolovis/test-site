from flask import Flask
app = Flask(__name__)

@app.route('/test')
def hello_world():
	return 'Hello'

if __name__ == '__main__':
	app.run()