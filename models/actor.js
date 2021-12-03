// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Actor = sequelize.define('actor', {
    actorId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: Sequelize.literal('nextval(\'actor_actor_id_seq\'::regclass)'),
      allowNull: false,
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastUpdate: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('now()'),
      allowNull: false,
    },
  }, {
    tableName: 'actor',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Actor.associate = (models) => {
    Actor.hasMany(models.filmActor, {
      foreignKey: {
        name: 'actorIdKey',
        field: 'actor_id',
      },
      sourceKey: 'actorId',
      as: 'filmActors',
    });
  };

  return Actor;
};