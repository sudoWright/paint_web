// @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
const e=async e=>{const t=await e.getFile();return t.handle=e,t};var fileOpen = async(t={})=>{const i={};t.mimeTypes?t.mimeTypes.map((e=>{i[e]=t.extensions||[];})):i["*/*"]=t.extensions||[];const n=await window.showOpenFilePicker({types:[{description:t.description||"",accept:i}],multiple:t.multiple||!1}),s=await Promise.all(n.map(e));return t.multiple?s:s[0]};

export default fileOpen;
