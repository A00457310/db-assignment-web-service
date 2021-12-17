const MysqlClient = require('../providers/mysql_connection');

const getAllFrequentAddresses = () => {
    return new Promise((resolve, reject) => {
        MysqlClient.connect((err, dbConn) => {
            if (err) {
                console.error('Flag conn error - ', err);
                MysqlClient.close(dbConn);
                throw ("error connecting to mysql db", err);
            }

            dbConn.query('select * from frequent_address limit 10', function (error, results, fields) {
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

const getAllHazards = () => {
    return new Promise((resolve, reject) => {
        MysqlClient.connect((err, dbConn) => {
            if (err) {
                console.error('Flag conn error - ', err);
                MysqlClient.close(dbConn);
                throw ("error connecting to mysql db", err);
            }

            dbConn.query('select * from hazard limit 10', function (error, results, fields) {
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

const getAllObstructions = () => {
    return new Promise((resolve, reject) => {
        MysqlClient.connect((err, dbConn) => {
            if (err) {
                console.error('Flag conn error - ', err);
                MysqlClient.close(dbConn);
                throw ("error connecting to mysql db", err);
            }

            dbConn.query('select * from obstruction limit 10', function (error, results, fields) {
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

const getAllQueries = () => {
    return new Promise((resolve, reject) => {
        MysqlClient.connect((err, dbConn) => {
            if (err) {
                console.error('Flag conn error - ', err);
                MysqlClient.close(dbConn);
                throw ("error connecting to mysql db", err);
            }

            dbConn.query('select * from query limit 10', function (error, results, fields) {
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

const getAllResponses = () => {
    return new Promise((resolve, reject) => {
        MysqlClient.connect((err, dbConn) => {
            if (err) {
                console.error('Flag conn error - ', err);
                MysqlClient.close(dbConn);
                throw ("error connecting to mysql db", err);
            }

            dbConn.query('select * from response limit 10', function (error, results, fields) {
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

const getAllTransitIssues = () => {
    return new Promise((resolve, reject) => {
        MysqlClient.connect((err, dbConn) => {
            if (err) {
                console.error('Flag conn error - ', err);
                MysqlClient.close(dbConn);
                throw ("error connecting to mysql db", err);
            }

            dbConn.query('select * from transit_issue limit 10', function (error, results, fields) {
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

const getAllUserQuery = () => {
    return new Promise((resolve, reject) => {
        MysqlClient.connect((err, dbConn) => {
            if (err) {
                console.error('Flag conn error - ', err);
                MysqlClient.close(dbConn);
                throw ("error connecting to mysql db", err);
            }

            dbConn.query('select * from user_query limit 10', function (error, results, fields) {
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

const getAllUserReponse = () => {
    return new Promise((resolve, reject) => {
        MysqlClient.connect((err, dbConn) => {
            if (err) {
                console.error('Flag conn error - ', err);
                MysqlClient.close(dbConn);
                throw ("error connecting to mysql db", err);
            }

            dbConn.query('select * from user_response limit 10', function (error, results, fields) {
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

const getAllUserTransitIssue = () => {
    return new Promise((resolve, reject) => {
        MysqlClient.connect((err, dbConn) => {
            if (err) {
                console.error('Flag conn error - ', err);
                MysqlClient.close(dbConn);
                throw ("error connecting to mysql db", err);
            }

            dbConn.query('select * from user_transit_issue limit 10', function (error, results, fields) {
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

const getStat1 = () => {
    return new Promise((resolve, reject) => {
        MysqlClient.connect((err, dbConn) => {
            if (err) {
                console.error('Flag conn error - ', err);
                MysqlClient.close(dbConn);
                throw ("error connecting to mysql db", err);
            }

            dbConn.query('SELECT address_id,street_address, AVG(severity), COUNT(1) FROM address JOIN transit_issue ON start_address_id=address_id GROUP BY address_id;', function (error, results, fields) {
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
    getAllFrequentAddresses,
    getAllHazards,
    getAllObstructions,
    getAllQueries,
    getAllResponses,
    getAllTransitIssues,
    getAllUserQuery,
    getAllUserReponse,
    getAllUserTransitIssue,
    getStat1
};