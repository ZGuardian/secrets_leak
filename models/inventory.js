// This model was generated by Forest CLI. However, you remain in control of your models.
// Learn how here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models
module.exports = (sequelize, DataTypes) => {
  const { Sequelize } = sequelize;
  // This section contains the fields of your model, mapped to your table's columns.
  // Learn more here: https://docs.forestadmin.com/documentation/v/v6/reference-guide/models/enrich-your-models#declaring-a-new-field-in-a-model
  const Inventory = sequelize.define('inventory', {
    inventoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      defaultValue: Sequelize.literal('nextval(\'inventory_inventory_id_seq\'::regclass)'),
      allowNull: false,
    },
    storeId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    lastUpdate: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('now()'),
      allowNull: false,
    },
  }, {
    tableName: 'inventory',
    underscored: true,
    timestamps: false,
    schema: process.env.DATABASE_SCHEMA,
  });

  // This section contains the relationships for this model. See: https://docs.forestadmin.com/documentation/v/v6/reference-guide/relationships#adding-relationships.
  Inventory.associate = (models) => {
    Inventory.belongsTo(models.film, {
      foreignKey: {
        name: 'filmIdKey',
        field: 'film_id',
      },
      targetKey: 'filmId',
      as: 'film',
    });
    Inventory.hasMany(models.rental, {
      foreignKey: {
        name: 'inventoryIdKey',
        field: 'inventory_id',
      },
      sourceKey: 'inventoryId',
      as: 'rentals',
    });
  };

  return Inventory;
};