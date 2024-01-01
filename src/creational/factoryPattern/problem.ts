// problem
// need to provide 'Engine' in every render call
// othervise controller is tied to single 'View Engine'

// frameWork
abstract class ViewEngine {
  abstract render(): string;
}
class MatchaViewEngine implements ViewEngine {
  render(/** parameters */) {
    return "render by matchaViewEngine.";
  }
}

class Controller {
  render(/**rest parameters */ engineType: ViewEngine) {
    return engineType.render();
  }
}

// eg use case
// how people gonna use framework

class ProductController extends Controller {
  listProducts() {
    const products = [];
    // passing products and enginetype
    this.render(new MatchaViewEngine());
  }
}
