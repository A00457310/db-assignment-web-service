const MysqlClient = require('../providers/mysql_connection');

const getAllUsers = () => {
    return new Promise((resolve, reject) => {
        MysqlClient.connect((err, dbConn) => {
            if (err) {
                console.error('Flag conn error - ', err);
                MysqlClient.close(dbConn);
                throw ("error connecting to mysql db", err);
            }

            dbConn.query('select * from user limit 10', function (error, results, fields) {
                MysqlClient.close(dbConn);
                if (error) {
                    console.log(error);
                    return reject(error);
                }

                return resolve(results);
            });
        });
    });
}

const createUser = (data) => {
    return new Promise((resolve, reject) => {
        MysqlClient.connect((err, dbConn) => {
            if (err) {
                console.error('Flag conn error - ', err);
                MysqlClient.close(dbConn);
                throw ("error connecting to mysql db", err);
            }

            dbConn.query(`insert into user (email, phone, name, employment_status) values('${data.email}', '${data.phone}', '${data.name}', '${data.employment_status}');`, function (error, results, fields) {
                MysqlClient.close(dbConn);
                if (error) {
                    console.log(error);
                    return reject(error);
                }

                return resolve(results);
            });
        });
    });
}

module.exports = {
    getAllUsers,
    createUser
};