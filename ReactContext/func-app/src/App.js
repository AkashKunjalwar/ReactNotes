import "./App.css";
import Header from "./Components/Header";
import BookListUI from "./Components/BookListUI";
import BookListContextProvider from "./Context/BookListContextProvider";

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
