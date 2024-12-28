const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('student', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    firstname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    middlename: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    lastname: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: "students_email_key"
    },
    studentid: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: "students_studentid_key"
    },
    profile_picture: {
      type: DataTypes.BLOB,
      allowNull: true
    },
    isfirstlogin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    isdeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'students',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "students_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "students_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "students_studentid_key",
        unique: true,
        fields: [
          { name: "studentid" },
        ]
      },
    ]
  });
};
