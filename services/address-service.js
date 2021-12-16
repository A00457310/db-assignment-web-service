const MysqlClient = require('../providers/mysql_connection');

const getAllAddresses = () => {
    return new Promise((resolve, reject) => {
        MysqlClient.connect((err, dbConn) => {
            if (err) {
                console.error('Flag conn error - ', err);
                MysqlClient.close(dbConn);
                throw ("error connecting to mysql db", err);
            }

            dbConn.query('select * from address limit 10', function (error, results, fields) {
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
    getAllAddresses
};