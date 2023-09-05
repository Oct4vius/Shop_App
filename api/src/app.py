# {
#   "name": "Octavio",
#   "lastname": "Luperon",
#   "adress": "Calle Vasco Nuñez de Balboa #23",
#   "email": "test@test.com",
#   "password": "1234"
# }

from flask import Flask, jsonify
from flask_mysqldb import MySQL
from config import config

app = Flask(__name__)

conexion = MySQL(app)

@app.route('/api/users')
def getUsers():
    try:
        cursor = conexion.connection.cursor()
        sql = "SELECT id, name, lastname, adress, email, password, admin FROM users"
        cursor.execute(sql)
        datos = cursor.fetchall()
        users = []
        print(datos.jsonify)
        for fila in datos:
            user:{'id':fila[0], 'nombre': fila[1], 'lasname': fila[2], 'adress': fila[3], 'email': fila[4], 'password': fila[5], 'admin': [6]}
            users.append(user)
        return jsonify({'users': users, 'message':"Ok!"})
    
    except Exception as ex:
        return ex
    
def pagina_no_encontrada(error):
    return "<h1>La página que intentas buscar no existe...</h1>"

if __name__ == '__main__':
    app.config.from_object(config['development'])
    app.register_error_handler(404, pagina_no_encontrada)
    app.run()