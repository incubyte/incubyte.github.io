function generateArticleHTML(
  title,
  permalink,
  imageSrc,
  tags,
  summary,
  authors,
  date
) {
  let tagsHTML = "";
  for (const tag of tags) {
    tagsHTML += `<span class="badge rounded-pill bg-dark">
                    <a class="text-white" href="/tags/${tag}">${tag}</a>
                  </span>`;
  }

  let authorsHTML = "";
  for (const author of authors) {
    authorsHTML += `<a href="/authors/${author}">${author}</a>`;
  }

  const articleHTML = `
      <div class="col-lg-4 col-sm-6 mb-5">
        <article class="card border-0">
          ${
            imageSrc
              ? `<a href="${permalink}">
                         <img src="${imageSrc}" alt="${title}" class="mb-1 card-img rounded-lg mb-4">
                       </a>`
              : ""
          }
          <div class="card-body p-0">
            <h3><a href="${permalink}" title="${title}" class="post-title">${title}</a></h3>
            ${tagsHTML}
            <p class="card-text">${summary}</p>
            <p class="blockquote-footer text-right">
              By ${authorsHTML}, ${date}
            </p>
          </div>
        </article>
      </div>
    `;

  return articleHTML;
}
function displayResults(results, store) {
  const searchResults = document.getElementById("results");
  if (results.length) {
    let resultList = "";
    for (const n in results) {
      const item = store[results[n].ref];
      const articleHTML = generateArticleHTML(
        item.title,
        item.url,
        item.image,
        item.tags,
        item.summary,
        item.authors,
        item.date
      );
      resultList += articleHTML;
    }
    let resultHtml = `
        <div class="container">
            <div class="row">
                ${resultList}
            </div>
        </div>
    `;
    searchResults.innerHTML = resultHtml;
  } else {
    searchResults.innerHTML = "No results found.";
  }
}

const params = new URLSearchParams(window.location.search);
const query = params.get("query");

if (query) {
  document.getElementById("search-input").setAttribute("value", query);

  const idx = lunr(function () {
    this.ref("id");
    this.field("title", {
      boost: 15,
    });
    this.field("tags");
    this.field("authors");
    this.field("summary");
    this.field("date");
    for (const key in window.store) {
      this.add({
        id: key,
        title: window.store[key].title,
        tags: window.store[key].category,
        authors: window.store[key].authors,
        summary: window.store[key].summary,
        image: window.store[key].image,
        date: window.store[key].date,
        url: window.store[key].url,
      });
    }
  });
  const results = idx.search(query);
  displayResults(results, window.store);
}
