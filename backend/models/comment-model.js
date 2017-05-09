"use strict";

module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define("Comment", {
    name: {
      type: DataTypes.STRING,
      required: true
    },
    comment: {
      type: DataTypes.INTEGER,
      required: true
    }
  }, {
    classMethods: {
      associate: function(models) {
        Comment.belongsTo(models.Post)
      }
    }
  });

  return Comment;
};