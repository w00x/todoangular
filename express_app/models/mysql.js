var config = require('./config');

var MySQL = {
  model_name: '',
  connection: function() {
    return mysql.createConnection(config);
  },
  findBy: function() {

  },
  findAllBy: function(){

  },
  find: function(id, fn) {
    connection.query('SELECT * FROM ? WHERE id = ?', [this.model_name, id], fn);
  },
  where: function() {

  }
};
