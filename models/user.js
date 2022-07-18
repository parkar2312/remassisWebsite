"use strict";

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      // appid: DataTypes.UUID,
      // feedback: DataTypes.INTEGER,
      description: DataTypes.CHAR,
      desctype: DataTypes.CHAR,
      emoji: DataTypes.CHAR,
    },
    {
      sequelize,
      modelName: "User",
    }
  );
  User.associate = function (models) {
    // associations can be defined here
  };
  return User;
};
// const { Model } = require("sequelize");
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init(
//     {
//       // appid: DataTypes.UUID,
//       // feedback: DataTypes.INTEGER,
//       description: DataTypes.CHAR,
//       desctype: DataTypes.CHAR,
//       emoji: DataTypes.CHAR,
//     },
//     {
//       sequelize,
//       modelName: "User",
//     }
//   );
//   return User;
// };
