console.log("🟢 Content script loaded");

const article = document.querySelector("article");

if (article) {
  console.log("✅ Found <article>");
  const text = article.textContent;
  const wordMatchRegExp = /[^\s]+/g;
  const words = text.matchAll(wordMatchRegExp);
  const wordCount = [...words].length;
  const readingTime = Math.round(wordCount / 200);
  const badge = document.createElement("p");


  badge.classList.add("color-secondary-text", "type--caption");
  badge.textContent = `⏱️ ${readingTime} min read`;

  const heading = article.querySelector("h1");
  const date = article.querySelector("time")?.parentNode;
badge.style.cssText = `
  font-size: 16px;
  font-weight: bold;
  color: purple;
  background: #fff8f8;
  padding: 4px 8px;
  border-radius: 6px;
  margin: 8px 0;
  display: inline-block;
`;

  (date ?? heading)?.insertAdjacentElement("afterend", badge);
  
  console.log("📌 Reading time badge inserted:", badge.textContent);
} else {
  console.log("❌ No <article> found");
}


