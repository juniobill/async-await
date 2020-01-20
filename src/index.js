const fetch = require('node-fetch');

function getPerson(id) {
  fetch(`http://swapi.co/api/people/${id}`)
    .then(response => response.json())
    .then(person => console.log(person.name));
}

//getPerson(1);

/*
O primeiro passo é converter a declaração function para async function. Desta forma estamos definindo que esta função será assíncrona.

// Promise
function getPerson(id) {...}

// async/await
async function getPerson(id) {...}

O próximo passo é utilizar await para cada processamento assíncrono dentro da função.

*/

async function getPerson2(id) {
  const response = await fetch(`http://swapi.co/api/people/${id}`);
  const person = await response.json();
  console.log(person.name);
}

//getPerson2(2);

/*

Podemos combinar os dois mundos e utilizar async/await junto com Promises.

Funções assíncronas sempre retornam Promises

*/

async function getPerson3(id) {
  const response = await fetch(`http://swapi.co/api/people/${id}`);
  const person = await response.json();
  return person;
}

//getPerson3(3).then(person => console.log(person.name));

async function getPerson4(id) {
  throw Error('Not found');
  return id;
}

/*
Resolvendo ou rejeitando uma Promise com async/await

*/

/*
getPerson4(1)
.then(id => console.log(id)) // 1
.catch(err => console.error(err.message)); // Not found
*/

async function getPerson5(id) {
    const response = await fetch(`http://swapi.co/api/people/${id}`);
    return await response.json();
}

// id = 0
//getPerson5(0).then(person => console.log(person.name));

async function getPerson6(id) {
    const response = await fetch(`http://swapi.co/api/people/${id}`);
    const body = await response.json();

    if (response.status !== 200) {
        throw Error(body.detail);
    }

    return body;
}


//getPerson6(0).then(person => console.log(person.name))
//.catch(err => console.error(err.message));

/*

Tratamento de erros com try/catch

*/
async function loadPerson(id) {
    try {
      const person = await getPerson6(id);
      console.log(person.name);

    } catch (err) {
      console.error(err.message);
    }
  }

  //loadPerson(0);
  //loadPerson(1);

// arrow function
const getPerson7 = async (id) => {
  const response = await fetch(`http://swapi.co/api/people/${id}`);
  return await response.json();
};

getPerson7(1)
  .then(person => console.log(person.name));
