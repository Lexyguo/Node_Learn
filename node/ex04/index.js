const Sequelize = require('sequelize');
module.exports.initModel = async sequelize => {
  // ##BEGIN## 代码已加密
  const Product = sequelize.define('Product', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
  });
  const User = sequelize.define('User', {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    name: Sequelize.STRING,
  });
  Product.belongsTo(User, {
    constraints: true,
    onDelete: 'CASCADE'
  }); // 1端建立关系
  User.hasMany(Product); // N端建立关系
  // 同步数据库，force: true则会删除已存在表
  await sequelize.sync({ force: true });
  // ##END##
  return { User, Product }
} 
