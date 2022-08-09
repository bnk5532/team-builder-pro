const buildTeam = (employees) => {
  const managerTemp = employees
    .filter((manager) => manager.hasOwnProperty("office"))
    .map((manager) => writeManager(manager));
  const engineerTemp = employees
    .filter((engineer) => engineer.hasOwnProperty("github"))
    .map((engineer) => writeEngineer(engineer));
  const internTemp = employees
    .filter((intern) => intern.hasOwnProperty("school"))
    .map((intern) => writeIntern(intern));
  const team = [...managerTemp, ...engineerTemp, ...internTemp];
  return team.join("");
};

function writeEngineer({ name, id, email, github }) {
  return `
  <div class="col mb-4">
  <div class="card h-100">
    <div class="card-header bg-primary">
    <h4 class="card-title text-white">${name}</h4>
    <h5 class="card-title text-white">Engineer</h5>
    </div>
    <div class="card-body bg-light">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email:
            <a href="mailto:${email}">${email}</a></li>
        <li class="list-group-item">GitHub:
            <a href="# ${github}">${github}</a></li>
      </ul>
    </div>
  </div>
</div>
`;
}

function writeManager({ name, id, email, office }) {
return `
<div class="row row-cols-1 row-cols-md-3">
  <div class="col mb-4">
    <div class="card h-100">
      <div class="card-header bg-primary">
      <h4 class="card-title text-white">${name}</h4>
      <h5 class="card-title text-white">Manager</h5>
      </div>
      <div class="card-body bg-light">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email:
              <a href="mailto:${email}">${email}</a></li>
          <li class="list-group-item">Office #: ${office}</li>
        </ul>
      </div>
    </div>
  </div>
</div>  
`;
}

function writeIntern({ name, id, email, school }) {
return `
  <div class="col mb-4">
  <div class="card h-100">
    <div class="card-header bg-primary">
    <h4 class="card-title text-white">${name}</h4>
    <h5 class="card-title text-white">Engineer</h5>
    </div>
    <div class="card-body bg-light">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email:
            <a href="mailto:${email}">${email}</a></li>
        <li class="list-group-item">School: ${school}</li>
      </ul>
    </div>
  </div>
</div>
`;
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
      <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css" integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">
    </head>

    <body>
    <header class="d-block mb-4 p-2 bg-danger text-white text-center">My Team</header>
      <div class="container">
        ${buildTeam(employees)}
      </div>
    </body>
    </html>
    `;
};

module.exports = generatePage;
