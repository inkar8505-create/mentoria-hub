function start() {
  document.body.innerHTML = `
    <h1>Mentoria Hub 🚀</h1>
    <p>Choose your path:</p>

    <button onclick="show('English')">English</button>
    <button onclick="show('STEM')">STEM</button>
    <button onclick="show('Business')">Business</button>

    <div id="result"></div>
  `;
}

function show(path) {
  let data = {
    English: ["FLEX program", "IELTS prep", "Essay writing competitions"],
    STEM: ["Olympiads", "Hackathons", "NASA challenges"],
    Business: ["Startup contests", "Case competitions", "Young Entrepreneurs programs"]
  };

  document.getElementById("result").innerHTML =
    "<h3>Opportunities for " + path + "</h3><ul>" +
    data[path].map(i => "<li>" + i + "</li>").join("") +
    "</ul>";
}
function saveProfile() {
  let user = {
    name: document.getElementById("name").value,
    age: document.getElementById("age").value,
    interest: document.getElementById("interest").value,
    goal: document.getElementById("goal").value
  };

  localStorage.setItem("user", JSON.stringify(user));

  showDashboard(user);
}

function showDashboard(user) {
  document.body.innerHTML = `
    <h1>Hello ${user.name}</h1>
    <h2>Your path: ${user.interest}</h2>

    <button onclick="showOpportunities('${user.interest}')">
      See Opportunities
    </button>

    <div id="result"></div>
  `;
}

function showOpportunities(path) {
  let data = {
    English: ["IELTS", "FLEX", "Essay contests"],
    STEM: ["Olympiads", "Hackathons", "NASA programs"],
    Business: ["Startups", "Case competitions", "Internships"]
  };

  document.getElementById("result").innerHTML =
    "<ul>" +
    data[path].map(x => "<li>" + x + "</li>").join("") +
    "</ul>";
}
