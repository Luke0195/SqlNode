// credencias com a base de dados.

module.exports ={
    dialect:'mysql',
    host:'localhost',
    username:'root',
    password:'',
    database:'sqlnode',
    define:{
      timestamps: true,
      underscored: true,

    },
}

// timestamps -> vai criar os campos created_at e update_at.
// underscored-> As tabelas e colunas terão o espaçamento com colunas.