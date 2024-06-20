from flask import Flask, render_template, url_for, request, redirect, session, flash
from flask_mysqldb import MySQL
import MySQLdb.cursors
import re

app = Flask(__name__)
app.secret_key = 'your_secret_key'

# Configura la conexión a la base de datos MySQL
app.config['MYSQL_HOST'] = 'localhost'
app.config['MYSQL_USER'] = 'root'
app.config['MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'flask_app'

mysql = MySQL(app)

@app.route('/', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        
        cursor = mysql.connection.cursor(MySQLdb.cursors.DictCursor)
        cursor.execute('SELECT * FROM users WHERE username = %s AND password = %s', (username, password))
        user = cursor.fetchone()
        
        if user:
            session['user'] = user['username']
            return redirect(url_for('index'))
        else:
            flash('Invalid credentials')
            return render_template('login.html')
    return render_template('login.html')

@app.route('/index')
def index():
    if 'user' in session:
        return render_template('index.html')
    else:
        return redirect(url_for('login'))

if __name__ == '__main__':
    app.run(debug=True)
