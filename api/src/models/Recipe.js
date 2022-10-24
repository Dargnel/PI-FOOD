const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey:true,
      allowNull:false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    resumPlate:{
      type: DataTypes.STRING,
      allowNull:false
    },
    healthScore:{
      type: DataTypes.FLOAT
    },
    stepBystep:{
      type: DataTypes.JSON
    },
    image:{
      type: DataTypes.STRING,
      defaultValue: 'https://c8.alamy.com/compes/jfebpr/collage-de-diferentes-comidas-deliciosas-platos-jfebpr.jpg'
    },
   
   
  },
  {
    timestamps: false,
  })
};
