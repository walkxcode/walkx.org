class HeadComp extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <img src="/imgs/construction.gif">
      <br>
      <h1 class="title"><b><i>Walkx - Freedom</i></b></h1>
      <span class="icons">
        <a title="Discord Server" href="https://poo.url.lol/walkxhub"><img src="/imgs/discord.svg"></a>
        <a title="GitHub" href="https://github.com/walkxcode"><img src="/imgs/github.svg"></a>
        <a title="Ko-Fi" href="https://ko-fi.com/walkx"><img src="/imgs/coffee.svg"></a>
      </span>

      <h2 class="title-2"><a href=/webrings><i>(Webrings)</i></a></h2>
      <h2 class="title-2 back"><a href=javascript:history.back()><i>(Back)</i></a></h2>

      <hr width=100% size=5.5px color=#9C4E97 align=left>
    `
  }
}

class HeadCompMobile extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <img src="/imgs/construction.gif">
      <br>
      <h1 class="title"><b><i>Walkx - Freedom</i></b></h1>
      <h2 class="title-2"><a href=/webrings><i>(Webrings)</i></a></h2>
      <h2 class="title-2 back"><a href=javascript:history.back()><i>(Back)</i></a></h2>

      <hr width=100% size=4px color=#9C4E97 align=left>

      <span class="icons">
        <a title="RSS Feed" href="rss.xml"><img src="/imgs/discord.svg"></a>
        <a title="RSS Feed" href="rss.xml"><img src="/imgs/github.svg"></a>
        <a title="RSS Feed" href="rss.xml"><img src="/imgs/coffee.svg"></a>
      </span>
    `
  }
}

customElements.define('pc-head', HeadComp);
customElements.define('mobile-head', HeadCompMobile);

function random_imglink() {
  path = "imgs/gall/";
  var used = [];
  var num;
  var howmany = 69;
  for (var i = 1; i <= howmany; i++) {
    num = Math.ceil(Math.random() * 79);
    while (used.indexOf(num) != -1) {
      num = Math.ceil(Math.random() * 79);
    }
    used.push[num];
  }
  var img = path + num + ".jpg";
  return img;
}

document.addEventListener("DOMContentLoaded", (event) => {
  var gal = document.getElementById("img-gallery");
  var img = document.createElement("img");
  img.src = random_imglink();
  gal.appendChild(img);
});

function new_img() {
  img = random_imglink();
  var targetDiv = document.getElementById("img-gallery").getElementsByTagName("img")[0];
  targetDiv.src = img;
  // gal.appendChild(img);
};
