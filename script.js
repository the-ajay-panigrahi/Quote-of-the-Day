async function fetchQuotes() {
  const response = await fetch(
    "https://api.freeapi.app/api/v1/public/quotes/quote/random"
  );

  const data = await response.json();

  displayQuote(data.data.author, data.data.content);
}

function displayQuote(author, content) {
  document.querySelector("#quote-container #quote").textContent = content;
  document.querySelector(
    "#quote-container #author"
  ).textContent = ` ~ ${author}`;
}

async function copyQuote() {
  const quote = document.querySelector("#quote-container #quote").textContent;
  const author = document.querySelector("#quote-container #author").textContent;
  try {
    await navigator.clipboard.writeText(quote + author);
  } catch (err) {
    console.error("Failed to copy: ", err);
  }
}

function shareOnTwitter() {
  const quote = document.querySelector("#quote-container #quote").textContent;
  const author = document.querySelector("#quote-container #author").textContent;
  const tweetText = encodeURIComponent(`"${quote}" ${author} #QuoteOfTheDay`);
  const twitterUrl = `https://twitter.com/intent/tweet?text=${tweetText}`;
  window.open(twitterUrl, "_blank");
}

fetchQuotes();
