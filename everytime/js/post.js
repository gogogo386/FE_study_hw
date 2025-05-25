document.addEventListener("DOMContentLoaded", function () {
  const infoDiv = document.getElementById("que_id");
  infoDiv.style.display = "none"; // 처음에 숨김

  // 체크박스 이벤트 리스너
  document
    .getElementById("questionCheckbox")
    .addEventListener("change", function () {
      const queLabel = document.getElementById("queLabel");

      if (this.checked) {
        infoDiv.style.display = "block";
        queLabel.style.color = "#05bcbc";
      } else {
        infoDiv.style.display = "none";
        queLabel.style.color = "#000";
      }
    });
});
