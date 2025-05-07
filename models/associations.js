import Animais from './animais.js';
import Dados from './dados.js';

Animais.hasOne(Dados, {
    foreignKey: 'idbubalino',
    as: 'dados'
  });
  
  Dados.belongsTo(Animais, {
    foreignKey: 'idbubalino',
    as: 'animal'
  });  

export { Animais, Dados };