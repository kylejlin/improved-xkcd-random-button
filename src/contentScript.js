if (!localStorage.maxComicNumber) {
  localStorage.maxComicNumber = 2000;
}

let comicHref = null;
const generateNewComicHref = shouldPrerender => {
  const maxComicNumber = parseInt(localStorage.maxComicNumber, 10);
  const comicNumber = 1 + Math.floor(Math.random() * maxComicNumber);
  const href = "https://xkcd.com/" + comicNumber + "/";

  if (shouldPrerender) {
    const link = document.createElement("link");
    link.rel = "prerender";
    link.href = href;
    document.head.appendChild(link);
  }

  comicHref = href;
};
generateNewComicHref(false);

fetch("https://xkcd.com/")
  .then(r => r.text())
  .then(html => {
    localStorage.maxComicNumber = html
      .match(/(https:\/\/xkcd.com\/\d+)/i)[0]
      .match(/\d+/)[0];

    generateNewComicHref(true);
  });

Array.from(document.getElementsByTagName("a"))
  .filter(a => a.innerText === "Random")
  .forEach(randomButton => {
    randomButton.addEventListener("click", e => {
      e.preventDefault();
      location.href = comicHref;
    });
  });
