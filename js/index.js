import museumsData from "./data.js";
console.log(museumsData[1]['description']);

document.querySelector('.content').innerHTML = `<p>${museumsData[0]['description']}</p>`
                                   