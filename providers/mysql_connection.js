var mysql = require('mysql');

class MysqlClient {

    static connect(callback) {

        let mysqlClient = mysql.createConnection({
            host: 'dbcourse.cs.smu.ca',
            user: 'u40',
            password: 'futureTIED77',
            database: 'u40'
        });

        mysqlClient.connect(function (err) {
            if (err) {
                console.error('error connecting: ' + err.stack);
                return callback(err, null);
            }

            return callback(null, mysqlClient);
        });
    }

    static close(connection) {
        console.log('close connection call.');
        try {
            connection.destroy();
        } catch (error) {
            console.log('error clocing connections', error);
        }
    }
}

module.exports = MysqlClient;
