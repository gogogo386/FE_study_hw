const scrapButton = document.getElementById("buttons_scrap");
const scrapNum = document.querySelector(".scrap_num");
let isScrapped = false;
let scrapCount = parseInt(scrapNum.textContent); // 초기 스크랩 수 가져오기

scrapButton.addEventListener("click", function () {
  isScrapped = !isScrapped;
  const scrapText = this.querySelector(".buttons_num");

  if (isScrapped) {
    // 스크랩 상태일 때
    scrapText.textContent = "스크랩 취소";
    scrapCount++;
    scrapNum.textContent = scrapCount;
  } else {
    // 스크랩 취소 상태일 때
    scrapText.textContent = "스크랩";
    scrapCount--;
    scrapNum.textContent = scrapCount;
  }
});
//공감 버튼 클릭
const likeButton = document.getElementById("buttons_like");
const hotNum = document.querySelector(".hot_num");
let isLiked = false;
let hotCount = parseInt(hotNum.textContent);

likeButton.addEventListener("click", function () {
  if (!isLiked) {
    isLiked = true;
    hotCount++;
    hotNum.textContent = hotCount;
  } else {
    isLiked = false;
    hotCount--;
    hotNum.textContent = hotCount;
  }
});

// 대댓글 부분
document.querySelectorAll(".reply-btn").forEach((button) => {
  button.addEventListener("click", function () {
    const comment = this.closest(".comment");

    const newReplyForm = document.createElement("form");
    newReplyForm.className = "reply-form";

    newReplyForm.innerHTML = `
      <input type="text" placeholder="대댓글을 입력하세요." class="reply-input">
      <div class="check_js">
              <input type="checkbox">
              <span>익명</span>
              </div>
      <img src="../img/container.write.background.png" alt="연필 이미지">
    `;
    // 대댓글이면 comment_sec 뒤에 추가
    const commentSec = comment.nextElementSibling;
    if (commentSec && commentSec.classList.contains("comment_sec")) {
      commentSec.insertAdjacentElement("afterend", newReplyForm);
    } else {
      // 일반 댓글이면 바로 아래에 추가
      comment.appendChild(newReplyForm);
    }
  });
});
// 댓글 작성 기능
const commentForm = document.querySelector(".article_bottom");
const commentInput = commentForm.querySelector(".comment_1");
const commentSubmit = commentForm.querySelector("img");

commentSubmit.addEventListener("click", function () {
  const commentText = commentInput.value.trim();
  if (commentText) {
    alert(`${commentText}`);
    commentInput.value = "";
  } else {
    alert("댓글을 입력해주세요.");
  }
});
