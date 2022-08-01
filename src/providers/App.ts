import Express from "./Express";

class App {
  // Carga el servidor
	public loadServer (): void {
    console.log('Loading Server...');
    Express.init();
	}
}
export default new App;
