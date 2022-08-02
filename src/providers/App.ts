import Express from "./Express";

class App {
  // Carga el servidor
	public loadServer (): void {
    console.log('Loading Server...');
    Express.init();
	}
  public getHTTPServer (): any {
    return Express.getHTTPServer();
  }
  public async stop() {
    return Express.stop();
  }
}
export default new App;
