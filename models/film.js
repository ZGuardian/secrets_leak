// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Film = sequelize.define('film', {
    filmId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: Sequelize.literal('nextval(\'film_film_id_seq\'::regclass)'),
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    releaseYear: {
      type: DataTypes.INTEGER,
    },
    rentalDuration: {
      type: DataTypes.INTEGER,
      defaultValue: 3,
      allowNull: false,
    },
    rentalRate: {
      type: DataTypes.DOUBLE,
      defaultValue: 4.99,
      allowNull: false,
    },
    length: {
      type: DataTypes.INTEGER,
    },
    replacementCost: {
      type: DataTypes.DOUBLE,
      defaultValue: 19.99,
      allowNull: false,
    },
    rating: {
      type: DataTypes.ENUM(
        'G',
        'PG',
        'PG-13',
        'R',
        'NC-17',
      ),
      defaultValue: "G",
    },
    lastUpdate: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('now()'),
      allowNull: false,
    },
    specialFeatures: {
      type: DataTypes.ARRAY(DataTypes.STRING),
    },
  }, {
    tableName: 'film',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Film.associate = (models) => {
    Film.belongsTo(models.language, {
      foreignKey: {
        name: 'languageIdKey',
        field: 'language_id',
      },
      targetKey: 'languageId',
      as: 'language',
    });
    Film.hasMany(models.filmActor, {
      foreignKey: {
        name: 'filmIdKey',
        field: 'film_id',
      },
      sourceKey: 'filmId',
      as: 'filmActors',
    });
    Film.hasMany(models.filmCategory, {
      foreignKey: {
        name: 'filmIdKey',
        field: 'film_id',
      },
      sourceKey: 'filmId',
      as: 'filmCategories',
    });
    Film.hasMany(models.inventory, {
      foreignKey: {
        name: 'filmIdKey',
        field: 'film_id',
      },
      sourceKey: 'filmId',
      as: 'inventories',
    });
  };

  return Film;
};
