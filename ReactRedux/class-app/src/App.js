import "./App.css";
import Header from "./Components/Header";
import BookListUI from "./Components/BookListUI";
import store from "./Store";
import { Provider } from "react-redux";

function App() {
  return (
    <div className="App">
      <Header />
      <Provider store={store}>
        <BookListUI />
      </Provider>
    </div>
  );
}

export default App;
