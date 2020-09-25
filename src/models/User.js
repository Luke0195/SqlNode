const {Model, DataTypes} = require('sequelize');


class User extends Model{
  static init(sequelize){ // vai receber a conexão com a base de dados
    super.init({ // Passamos as colunas do banco de dados.

     name: DataTypes.STRING,
     email: DataTypes.STRING,
    
    },{
      sequelize
    }) 

  }

}

module.exports =User;