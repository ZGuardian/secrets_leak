// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const FilmActor = sequelize.define('filmActor', {
    actorId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    filmId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    lastUpdate: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('now()'),
      allowNull: false,
    },
  }, {
    tableName: 'film_actor',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  FilmActor.associate = (models) => {
    FilmActor.belongsTo(models.actor, {
      foreignKey: {
        name: 'actorIdKey',
        field: 'actor_id',
      },
      targetKey: 'actorId',
      as: 'actor',
    });
    FilmActor.belongsTo(models.film, {
      foreignKey: {
        name: 'filmIdKey',
        field: 'film_id',
      },
      targetKey: 'filmId',
      as: 'film',
    });
  };

  return FilmActor;
};
