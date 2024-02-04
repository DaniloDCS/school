import App from "./App";
import "dotenv/config";

import db from "./database/connection";
import init from "./database/init";
init();

const port = process.env.PORT || 3333;

new App().server.listen(port, () => console.log("Server running on port 3333"));
