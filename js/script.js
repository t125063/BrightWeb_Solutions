const newsData = [
  {
    date: "2025.07.10",
    title: "新サービス開始のお知らせ – ECサイト構築支援パッケージを提供開始しました。"
  },
  {
    date: "2025.06.01",
    title: "制作実績100件突破 – おかげさまで制作実績100件を達成しました。"
  },
  {
    date: "2025.07.25",
    title: "夏季休業のお知らせ – 8月13日～16日を休業期間とさせていただきます。"
  }
];

const newsList = document.querySelector('#news_list');

for(let i = 0; i < 3; i++){
  const {date, title} = newsData[i];
  const content = `<li>${date}　${title}</li>`;
  newsList.insertAdjacentHTML('beforeend', content);
}

const cardData = [
  {
    name: "株式会社アクティブ",
    img: "株式会社アクティブ.png",
    kind: "コーポレートサイト",
    explain: "ブランドイメージを重視したシンプルで信頼感のある企業サイトを制作。"
  },
  {
    name: "グリーンショップ",
    img: "グリーンショップ.png",
    kind: "ECサイト",
    explain: "商品を見やすく整理したオンラインショップを構築し、UI/UXを改善。"
  },
  {
    name: "未来デザイン",
    img: "未来デザイン.png",
    kind: "SEO改善プロジェクト",
    explain: "既存サイトのSEO戦略を見直し、検索順位とアクセス数を大幅改善。"
  }
];

const cardContent = document.querySelector('#card');

for(let i = 0; i < 3; i++){
  const {name, img, kind, explain} = cardData[i];
  const content = `<div class = "card"><h2>${name}</h2><img src="./img/${img}" alt="${img}"><p><span>種類：${kind}</span>\n　${explain}</p></div>`;
  cardContent.insertAdjacentHTML('beforeend', content);
}

const cursor = document.getElementById('cursor');
let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;

  cursor.style.left = `${currentX}px`;
  cursor.style.top = `${currentY}px`;

  requestAnimationFrame(animate);
}

animate();

console.log('OK');