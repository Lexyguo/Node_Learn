const Sequelize = require('sequelize');
module.exports.initModel = async sequelize => {
  // ##BEGIN## 代码已加密
  const Product = sequelize.define('Product', {
    title: { type: Sequelize.STRING(20), allowNull: false }
  });
  const User = sequelize.define('User', {
    name: { type: Sequelize.STRING(20), allowNull: false }
  });
  Product.belongsTo(User); // 1端建立关系
  User.hasMany(Product); // N端建立关系
  sequelize.sync({ force: true }).then(async () => {
    await User.create({ name: '火箭' });
    await Product.bulkCreate([{ name: '哈登', teamId: 1 }, { name: '保罗', teamId: 1 }]);

    // 1端关联查询  
    const products = await Product.findAll({ include: [User] });
    console.log(JSON.stringify(products, null, 2));

    // N端关联查询
    const users = await User.findOne({ where: { name: '火箭' }, include: [Product] });
    console.log(JSON.stringify(users, null, 2));
  });
  // ##END##
  return { User, Product }
} 
