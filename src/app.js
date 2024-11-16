import context from "./context-tmp";

const element = document.getElementById("root");
element.innerHTML = `${context.appId} - ${context.dictId}`;
import('./log-context');
