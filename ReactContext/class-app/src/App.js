import "./App.css";
import BookListContextProvider from "./Context/BookListContext";
import Header from "./Components/Header";
import BookListUI from "./Components/BookListUI";

function App() {
  return (
    <div className="App">
      <Header />
      <BookListContextProvider>
        <BookListUI />
      </BookListContextProvider>
    </div>
  );
}

export default App;
