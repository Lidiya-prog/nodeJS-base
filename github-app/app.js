const github = require('./github')

const username = process.argv[2]

github.getRepos( username, (error, repos) => {
    if(error) return console.log(error.message)

    repos.forEach( repo => crossOriginIsolated.log( repo.name ))
})