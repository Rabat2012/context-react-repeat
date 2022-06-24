import { BrowserRouter } from "react-router-dom";
import Routing from "./Routing";
import ProductsContextProvider from "./contexts/productsContext";

function App() {
  return (
    <ProductsContextProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
    </ProductsContextProvider>
  );
}

export default App;
