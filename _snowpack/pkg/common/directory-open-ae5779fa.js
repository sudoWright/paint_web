// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const e = async (t, r, a = t.name) => {
  const i = [],
        n = [];

  for await (const s of t.values()) {
    const o = `${a}/${s.name}`;
    "file" === s.kind ? n.push(s.getFile().then(e => (e.directoryHandle = t, Object.defineProperty(e, "webkitRelativePath", {
      configurable: !0,
      enumerable: !0,
      get: () => o
    })))) : "directory" === s.kind && r && i.push(e(s, r, o));
  }

  return [...(await Promise.all(i)).flat(), ...(await Promise.all(n))];
};

var directoryOpen = (async (t = {}) => {
  t.recursive = t.recursive || !1;
  const r = await window.showDirectoryPicker({
    id: t.id,
    startIn: t.startIn
  });
  return e(r, t.recursive);
});

export default directoryOpen;