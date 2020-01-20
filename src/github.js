const fetch = require('node-fetch');

async function gitHub(userName) {
  const url = 'https://api.github.com/users';
  const reposResponse = await fetch(`${url}/${userName}/repos`);
  const userRepos = await reposResponse.json();
  console.log(userRepos)
}

gitHub('juniobill');
