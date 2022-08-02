import App from "./providers/App";

let server = App;
server.loadServer();
export const stop = server.stop;
export default server?.getHTTPServer();
