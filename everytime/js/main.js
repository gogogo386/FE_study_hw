function setupPostForm() {
  const checkbox = document.getElementById("questionCheckbox");

  checkbox.addEventListener("change", function () {
    const infoDiv = document.getElementById("que_id");
    const queLabel = document.getElementById("queLabel");

    if (this.checked) {
      infoDiv.style.display = "block";
      queLabel.style.color = "#05bcbc";
    } else {
      infoDiv.style.display = "none";
      queLabel.style.color = "#000";
    }
  });
}

// postButton 클릭 시 이벤트
document.getElementById("postButton").addEventListener("click", async () => {
  const response = await fetch("post.html");
  const html = await response.text();
  const postContainer = document.getElementById("postContainer");

  postContainer.innerHTML = html;
  postContainer.style.display = "block";
  document.querySelector(".new_post").style.display = "none";

  setupPostForm();
});
