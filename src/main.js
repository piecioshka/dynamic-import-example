function clearDOMElement($el) {
  while ($el.firstElementChild) {
    $el.firstElementChild.remove();
  }
}

function compile(template) {
  const parser = new DOMParser();
  const doc = parser.parseFromString(template, "text/html");
  return doc.body.firstElementChild;
}

function renderPage(template) {
  const $main = document.querySelector("main");
  const $page = compile(template);
  clearDOMElement($main);
  $main.append($page);
}

async function lazyLoadPage(pageId) {
  const { page } = await import(`./pages/${pageId}.js`);
  page();
}

function bindPageLink($button) {
  $button.addEventListener("click", () => lazyLoadPage($button.dataset.page));
}

function main() {
  // Bind all buttons (should be links of course, this is only DEMO)
  [
    document.querySelector("button.home-btn"),
    document.querySelector("button.contact-btn"),
  ].forEach(bindPageLink);

  // Load default page
  lazyLoadPage("home");
}

main();
