
// const { getUUID } = require('../plugins/get-id.plugin');
// const { getAge } = require('../plugins/get-age.plugin');
// const { getAge, getUUID } = require('../plugins');

interface makeBuildPersonOption {
  getUUID: () => {},
  getAge: () => {}
}

interface OptionPerson {
  name: string,
  birthdate: string
}

export const buildMakePerson = ({ getUUID, getAge }: makeBuildPersonOption) => {

  return ({ name, birthdate }: OptionPerson) => {

    return {
      id: getUUID(),
      name: name,
      birthdate: birthdate,
      age: getAge(),
    }
  }

}


// const obj = { name: 'John', birthdate: '1985-10-21' };

// const john = buildPerson( obj );


// console.log(john);



