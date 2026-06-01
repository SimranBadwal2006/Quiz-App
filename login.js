 document.getElementById("start-btn").addEventListener("click", () => {
  const name = document.getElementById("username").value.trim();
  if (name === "") {
    alert("Please enter your name!");
  } else {
    localStorage.setItem("quizUser", name);
    window.location.href = "quiz.html";
  }
});
