// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
var directoryOpen = (async (e = {}) => (e.recursive = e.recursive || !1, new Promise((n, t) => {
  const r = document.createElement("input");
  let i;
  r.type = "file", r.webkitdirectory = !0;

  const o = () => i(t);

  e.setupLegacyCleanupAndRejection ? i = e.setupLegacyCleanupAndRejection(o) : (i = e => {
    window.removeEventListener("pointermove", o), window.removeEventListener("pointerdown", o), window.removeEventListener("keydown", o), e && e(new DOMException("The user aborted a request.", "AbortError"));
  }, window.addEventListener("pointermove", o), window.addEventListener("pointerdown", o), window.addEventListener("keydown", o)), r.addEventListener("change", () => {
    i();
    let t = Array.from(r.files);
    e.recursive || (t = t.filter(e => 2 === e.webkitRelativePath.split("/").length)), n(t);
  }), r.click();
})));

export default directoryOpen;
