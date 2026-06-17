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
