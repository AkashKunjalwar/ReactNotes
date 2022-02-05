import "./App.css";
import Header from "./Components/Header";
import BookListUI from "./Components/BookListUI";
import { Provider } from "react-redux";
import store from "./Store";

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
