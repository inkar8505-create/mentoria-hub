function saveProfile() {
    const user = {
        name: document.getElementById("name").value,
        age: document.getElementById("age").value,
        country: document.getElementById("country").value,
        interest: document.getElementById("interest").value,
        goal: document.getElementById("goal").value
    };

    localStorage.setItem("user", JSON.stringify(user));

    document.getElementById("result").innerHTML = `
        <h2>Hello, ${user.name}! 👋</h2>

        <p><b>Age:</b> ${user.age}</p>
        <p><b>Country:</b> ${user.country}</p>
        <p><b>Interest:</b> ${user.interest}</p>
        <p><b>Dream university:</b> ${user.goal}</p>

        <br>

        <button onclick="analyzeProfile()">
            Analyze my profile 🤖
        </button>

        <div id="ai-result"></div>
    `;
}

function analyzeProfile() {
    const user = JSON.parse(localStorage.getItem("user"));

    document.getElementById("ai-result").innerHTML = `
        <h3>Analyzing...</h3>

        <p>
        AI will soon create a personal roadmap for
        <b>${user.goal}</b>.
        </p>
    `;
}
