import context from "../context-tmp";
// import contextAppEntry from "./app-entry-a";

// context.appId = contextAppEntry.appId;
// context.dictId = contextAppEntry.dictId;

const start = () => {
  console.log("== context ==");
  console.log(context);
  import("../app");
};

export { context, start };