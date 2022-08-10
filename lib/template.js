const buildTeam = (employees) => {
  const managerTemp = employees
    .filter((manager) => manager.hasOwnProperty("officeNumber"))
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
  <div class="col-4 mb-4">
  <div class="card shadow h-100">
    <div class="card-header bg-primary">
    <h4 class="card-title text-white">${name}</h4>
    <h5 class="card-title text-white"><i class="fa-solid fa-glasses"></i> Engineer</h5>
    </div>
    <div class="card-body bg-light">
      <ul class="list-group list-group-flush">
        <li class="list-group-item">ID: ${id}</li>
        <li class="list-group-item">Email:
            <a href="mailto:${email}">${email}</a></li>
        <li class="list-group-item">GitHub:
            <a href="https://github.com/${github}" target="_blank">${github}</a></li>
      </ul>
    </div>
  </div>
</div>
`;
}

function writeManager({ name, id, email, officeNumber }) {
return `
  <div class="col-4 mb-4">
    <div class="card shadow h-100">
      <div class="card-header bg-primary">
      <h4 class="card-title text-white">${name}</h4>
      <h5 class="card-title text-white"><i class="fa-solid fa-mug-hot"></i> Manager</h5>
      </div>
      <div class="card-body bg-light">
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${id}</li>
          <li class="list-group-item">Email:
              <a href="mailto:${email}">${email}</a></li>
          <li class="list-group-item">Office #: ${officeNumber}</li>
        </ul>
      </div>
    </div>
  </div>
`;
}

function writeIntern({ name, id, email, school }) {
return `
<div class="col-4 mb-4">
  <div class="card shadow h-100">
    <div class="card-header bg-primary">
    <h4 class="card-title text-white">${name}</h4>
    <h5 class="card-title text-white"><i class="fa-solid fa-graduation-cap"></i> Intern</h5>
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
      <script src="https://kit.fontawesome.com/083b13e5ba.js" crossorigin="anonymous"></script>
    </head>

    <body>
    <header class="d-block mb-4 p-2 bg-danger text-white text-center">My Team</header>
      <div class="container">
        <div class="row justify-content-center">
          ${buildTeam(employees)}
        </div>
      </div>
      
    </body>
    </html>
    `;
};

module.exports = generatePage;
