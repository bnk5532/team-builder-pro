const buildTeam = (employees) => {
    const managerTemp  = employees.filter((manager)=>manager.hasOwnProperty("office")).map((manager)=>writeManager(manager))
    const engineerTemp = employees.filter((engineer)=>engineer.hasOwnProperty("github")).map((engineer)=>writeEngineer(engineer))
    const internTemp = employees.filter((intern)=>intern.hasOwnProperty("school")).map((intern)=>writeIntern(intern))

    const team = [...managerTemp, ...engineerTemp, ...internTemp]
        return team.join("")
}

function writeEngineer({name, id, email, github}) {
    return `<div>
    <h1>${name}</h1>
    <h2>${id}</h2>
    <h3>${email}</h3>
    <h3>${github}</h3>
</div>`
}

function writeManager({name, id, email, office}) {
    return `<div>
    <h1>${name}</h1>
    <h2>${id}</h2>
    <h3>${email}</h3>
    <h3>${office}</h3>
</div>`
}

function writeIntern({name, id, email, school}) {
    return `<div>
    <h1>${name}</h1>
    <h2>${id}</h2>
    <h3>${email}</h3>
    <h3>${school}</h3>
</div>`
}

const generatePage = (employees) => {
    return `
    <!DOCTYPE html> 
    <html lang="en"> 
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
    </head>
  
    <body>
      ${buildTeam(employees)}
    </body>
    </html>
    `;
  };

  module.exports = generatePage
  