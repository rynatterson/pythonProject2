from flask import Flask, render_template, request


app = Flask(__name__)

# from flask import Flask, render_template
#
# app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html")

@app.route('/brody')
def brody():
    return render_template("brody.html")

@app.route('/brody2')
def brody2():
    return render_template("brody2.html")

@app.route('/auggie')
def auggie():
    return render_template("auggie.html")

@app.route('/auggie2')
def auggie2():
    return render_template("auggie2.html")
@app.route('/alek')
def alek():
    return render_template("alek.html")

@app.route('/alek2')
def alek2():
    return render_template("alek2.html")

@app.route('/oliver')
def oliver():
    return render_template("oliver.html")
@app.route('/paul')
def paul():
    return render_template("paul.html")

@app.route('/paul2')
def paul2():
    return render_template("paul2.html")


@app.route('/about')
def about():
    return render_template("about.html")

if __name__ == '__main__':
    app.run(debug=True)
