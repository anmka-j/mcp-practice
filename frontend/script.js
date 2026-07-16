function showOpportunities() {

  const opportunities = [
    "Google Solution Challenge",
    "Smart India Hackathon",
    "Infosys Internship",
    "MLH Fellowship"
  ];

  const result = document.getElementById("result");

  result.innerHTML = "";

  opportunities.forEach(item => {

    const li = document.createElement("li");

    li.textContent = item;

    result.appendChild(li);

  });

}