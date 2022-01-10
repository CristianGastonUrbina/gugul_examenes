// module.exports = (sequelize, dataTypes) => {
//   const Usuarios = sequelize.define("Usuarios",{ //El primer parametro es un string con el nombre del modelo, que se suele usar el nombre del archivo en plural
//       id:{   //Luego, se ponen todas las columnas de la tabla
//           autoIncrement = true, //Y en cada columna se debe poner si es un campo autoinvremental, si es PK y SI O SI se debe poner type que define el tipo de dato
//           primaryKey = true,
//           type: dataTypes.INTEGER
//       },
//       nombre:{
//           allowNull = false,
//           type = dataTypes.STRING
//       }
//   },{
//       tableName: "usuario", //Finalmente se aclara el nombre de la tabla
//       timestamp: false // Aclara que no tengo las columnas created_at y updated_at
//   });

//   return Usuarios;
// };

module.exports = (sequelize, dataTypes) => {
  const Usuarios = sequelize.define(
    "Usuarios",
    {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      apellido: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      mail: {
        type: dataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: dataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "usuario", //Finalmente se aclara el nombre de la tabla
      timestamps: false, // Aclara que no tengo las columnas created_at y updated_at}
    }
  );
  return Usuarios;
};
