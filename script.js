document.addEventListener("DOMContentLoaded", () => {
  const tags = document.querySelectorAll(".tag");
  const articles = document.querySelectorAll("#article-list li");

  tags.forEach(tag => {
    tag.addEventListener("click", (e) => {
      e.preventDefault(); // ページ遷移を止める
      const selectedTag = tag.textContent.replace("#", "");

      // タイトルを変える
      document.querySelector("h2").textContent = `タグ「#${selectedTag}」の記事一覧`;

      // 記事を絞り込み表示
      articles.forEach(article => {
        const tags = article.getAttribute("data-tags").split(",");
        if (tags.includes(selectedTag)) {
          article.style.display = "";
        } else {
          article.style.display = "none";
        }
      });
    });
  });
});

// 「すべての記事を表示」ボタン
const showAllBtn = document.getElementById("show-all");
showAllBtn.addEventListener("click", () => {
  document.querySelector("h2").textContent = "最近の記事";
  articles.forEach(article => article.style.display = "");
});

