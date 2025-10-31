// ページが読み込まれたときに実行される処理
document.addEventListener("DOMContentLoaded", () => {

  // 「検索ボタン」をクリックしたときの処理
  const searchBtn = document.querySelector(".search-box button");
  searchBtn.addEventListener("click", searchArticles);

  // 「タグリンク」をクリックしたときの処理を登録
  const tagLinks = document.querySelectorAll(".tag-link");
  tagLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); // ページがリロードされるのを防ぐ
      const tagText = link.textContent.replace('#',''); // #を除いたタグ名
      filterByTag(tagText); // 指定のタグに一致する記事だけ表示
    });
  });
});

// 🔍 検索バーで記事を絞り込む関数
function searchArticles() {
  const input = document.getElementById("searchInput").value.toLowerCase(); // 入力文字を取得
  const cards = document.querySelectorAll(".article-card");
  cards.forEach(card => {
    const text = card.innerText.toLowerCase(); // カード内の文字
    card.style.display = text.includes(input) ? "" : "none"; // 含まれていれば表示、なければ非表示
  });
}

// 🏷 タグクリックで記事を絞り込む関数
function filterByTag(tag) {
  const cards = document.querySelectorAll(".article-card");
  cards.forEach(card => {
    // カード内のタグ部分を取得（例: "#勉強 #IT" → ["勉強","IT"]）
    const tags = card.querySelector("p").textContent.replace(/#/g,'').split(' ');
    card.style.display = tags.includes(tag) ? "" : "none";
  });
}
