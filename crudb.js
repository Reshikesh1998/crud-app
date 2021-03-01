var mysql = require("mysql");


module.exports =
{
    getconnection() {
        var con = mysql.createConnection({ host: "localhost", user: "root", password: "Reshikesh@1905", database: "nodeexample" });
        con.connect(function (err) {
            if (err) throw err;
            console.log("Connection established")
        })
        return con
    },

    createtable(con) {
        con.query("CREATE TABLE IF NOT EXISTS employeedetails(id int NOT NULL, name varchar(25), email varchar(25) , primary key(id))", function (err, result) {
            if (err) throw err;
            console.log("cretaed successfully")
        })
    },

    addemployee(con, id, name, email) {
        con.query("insert into employeedetails(id, name, email) values(?,?,?)", [id, name, email], function (err, result) {
            if (err) throw err;
            console.log('Successfully added')
        })
    },

    updateemployee(con, id, name, email) {
        con.query("update employeedetails set name=?, email=? where id=? ", [name, email, id], function (err, result) {
            if (err) throw err;
            console.log("succesfully updated")
        })
    },

    delemployee(con, id) {
        con.query("Delete from employeedetails where id=?", [id], function (err, result) {
            if (err) throw err;
            console.log('Successfully deleted')
        })
    },
    showall(con) {
        con.query("Select * from employeedetails", function (err, result) {
            if (err) throw err;
            console.log(result);
        })
    }
    ,

    endconnection(con) {
        con.end(function (err) {
            if (err) throw err;
            console.log('Successfully ended')
        })
    }


}