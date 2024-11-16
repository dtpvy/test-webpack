// const appEntry = "app-entry";
const appEntry = "app-entry-a";
// const appEntry = "app-entry-b";

const script = document.createElement("script");
script.type = "text/javascript";
script.src = `/${appEntry}.js`;
document.head.appendChild(script);

console.log('Script đã được chèn vào header.');
