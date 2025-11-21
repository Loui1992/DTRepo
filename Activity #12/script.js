document.getElementById("generateBtn").addEventListener("click", getJoke);

function getJoke() {
  fetch("/joke")
    .then(res => res.json())
    .then(data => {
      document.getElementById("setup").textContent = data.setup;
      document.getElementById("punchline").textContent = data.punchline;
    })
    .catch(() => {
      document.getElementById("setup").textContent = "Error fetching joke.";
      document.getElementById("punchline").textContent = "";
    });
}