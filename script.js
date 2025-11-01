// ===========================
// 🌐 共通パーツの読み込み処理
// ===========================
async function loadComponent(id, path) {
  try {
    const response = await fetch(path);
    const html = await response.text();
    document.getElementById(id).innerHTML = html;
  } catch (e) {
    console.error(`⚠️ ${path} を読み込めませんでした`, e);
  }
}

// 📁 URL階層に応じてパスを自動調整
let basePath = "./components/";

if (location.pathname.includes("/articles/") || location.pathname.includes("/tags/")) {
  basePath = "../components/";
}

// ✅ headerとsidebarを読み込み
loadComponent("header", `${basePath}header.html`);
loadComponent("sidebar", `${basePath}sidebar.html`);


// ===========================
// 🔍 検索機能（今後追加予定）
// ===========================
function searchArticles() {
  const keyword = document.getElementById("searchInput").value;
  alert(`「${keyword}」で検索しました！（仮）`);
}

