import Animais from './animais.js';
import Dados from './dados.js';
import Coleiras from './coleiras.js';

  Animais.hasOne(Dados, {
    foreignKey: 'idbubalino',
    as: 'dados'
  });
  
  Dados.belongsTo(Animais, {
    foreignKey: 'idbubalino',
    as: 'animal'
  });

  Animais.belongsTo(Coleiras, {
    foreignKey: 'idcoleira',
    as: 'coleira'
  });

  Coleiras.hasMany(Animais, {
    foreignKey: 'idcoleira',
    as: 'animais'
  });

export { Animais, Dados, Coleiras };