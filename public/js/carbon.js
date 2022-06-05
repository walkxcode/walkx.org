const wcID = (e) => document.getElementById(e),
  wcU = encodeURIComponent(window.location.href),
  newRequest = function (e = !0) {
    fetch("https://api.websitecarbon.com/b?url=" + wcU)
      .then(function (e) {
        if (!e.ok) throw Error(e);
        return e.json();
      })
      .then(function (n) {
        e && renderResult(n),
          (n.t = new Date().getTime()),
          localStorage.setItem("wcb_" + wcU, JSON.stringify(n));
      })
      .catch(function (e) {
        (wcID("wcb_g").innerHTML = "No Result"),
          console.log(e),
          localStorage.removeItem("wcb_" + wcU);
      });
  },
  renderResult = function (e) {
    (wcID("wcb_g").innerHTML = e.c + "g of CO<sub>2</sub>/view"),
      wcID("wcb_2").insertAdjacentHTML(
        "beforeEnd",
        "Cleaner than " + e.p + "% of pages tested"
      );
  },
  wcC = "",
  wcB = wcID("wcb");
if ("fetch" in window) {
  wcB.insertAdjacentHTML("beforeEnd", wcC),
    wcB.insertAdjacentHTML(
      "beforeEnd",
      '<span id="wcb_2"></span>&nbsp;<span id="wcb_g">Measuring CO<sub>2</sub>&hellip;</span>&nbsp;(<a id="wcb_a" target="_blank" rel="noopener" href="https://www.websitecarbon.com/website/walkx-org/">Website Carbon</a>)'
    );
  let e = localStorage.getItem("wcb_" + wcU);
  const n = new Date().getTime();
  if (e) {
    const t = JSON.parse(e);
    renderResult(t), n - t.t > 864e5 && newRequest(!1);
  } else newRequest();
}
