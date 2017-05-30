'use strict';

const indices = ['classes', 'level', 'name'];
const spells = require('./spells.json');
const fs = require('fs');

const output = {};

spells.forEach( (spell, ind) => {
  indices.forEach( (index) => {
    if(!spell[index]) return;

    if(typeof spell[index] === 'string') {
      const indexValue = spell[index];
      if(!output[indexValue]) output[indexValue] = [];
      output[indexValue].push(ind);
    } else if(typeof spell[index] === 'array'){
      const indiceValues = spell[index];
      for(let i = 0; i < indiceValues.length; i++) {
        const indexValue = spell[index][i];
        if(!output[indexValue]) output[indexValue] = [];
        output[indexValue].push(ind);
      }
    }
  });
});

fs.writeFileSync('spell_indices.json', JSON.stringify(output));
