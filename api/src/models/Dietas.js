const {DataTypes} = require("sequelize");

module.exports =(Sequelize)=>{
    Sequelize.define("diets",{
        ID:{
            type:DataTypes.INTEGER,
            primaryKey:true,
            allowNull:false,
            autoIncrement: true
        },
        Name:{
            type:DataTypes.STRING
        }
      
    }, {
        timestamps: false,
      })

      
}