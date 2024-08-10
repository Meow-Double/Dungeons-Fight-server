const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('user', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  email: { type: DataTypes.STRING, unique: true },
  password: { type: DataTypes.STRING },
  avatarUrl: { type: DataTypes.STRING, defaultValue: '' },
});

const Dungeons = sequelize.define('dungeons', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, unique: true },
  type: { type: DataTypes.STRING },
  desc: { type: DataTypes.STRING },
  'time-open': { type: DataTypes.STRING },
  difficulty: { type: DataTypes.INTEGER },
  'award-percents': { type: DataTypes.INTEGER },
  award: { type: DataTypes.ARRAY(DataTypes.STRING) },
  'number-items': { type: DataTypes.STRING },
  img: { type: DataTypes.STRING },
  banerImg: { type: DataTypes.STRING },
  new: { type: DataTypes.BOOLEAN },
});

const Award = sequelize.define('award', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  count: { type: DataTypes.INTEGER, allowNull: false },
});

const Thing = sequelize.define('thing', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  title: { type: DataTypes.STRING, unique: true },
  type: { type: DataTypes.STRING, allowNull: true },
  desc: { type: DataTypes.STRING, allowNull: true },
  img: { type: DataTypes.STRING, allowNull: true },
  price: { type: DataTypes.INTEGER, allowNull: true },
  chance: { type: DataTypes.INTEGER, allowNull: true },
});

const Bag = sequelize.define('bag', {
  id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
  bag: { type: DataTypes.ARRAY(DataTypes.JSON), defaultValue: [] },
});
// ------------------links
User.hasOne(Bag);
Bag.belongsTo(User);

User.hasMany(Award);
Award.belongsTo(User);

Bag.hasMany(Award);
Award.belongsTo(Bag);

Award.hasMany(Thing);
Thing.belongsTo(Award);

module.exports = {
  User,
  Dungeons,
  Award,
  Thing,
  Bag,
};
