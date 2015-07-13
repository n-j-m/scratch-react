import React from "react";

import App from "./components/App.jsx";

function main() {
  let content = document.createElement("div");

  document.body.appendChild(content);

  React.render(<App />, content);
}

main();
