import Animais from './animais.js';
import Dados from './dados.js';

Animais.hasOne(Dados, {
    foreignKey: 'id_bubalino',
    as: 'dados'
  });
  
  Dados.belongsTo(Animais, {
    foreignKey: 'id_bubalino',
    as: 'animal'
  });  

export { Animais, Dados };