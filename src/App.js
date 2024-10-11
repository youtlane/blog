import { BrowserRouter ,Routes ,Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ArticleListPage from "./pages/ArticleListPage";
import ArticlePage from "./pages/ArticlePage";



function App() {
  return (
    <BrowserRouter>
      <div className="App flex flex-col items-center">
        <h1 className="text-red-600"> My Awesome blog</h1>
        <div>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/about" element={<AboutPage/>}/>
            <Route path="/articles" element={<ArticleListPage/>}/>
            <Route path="/articles/:articleId" element={<ArticlePage/>}/>
            
            
          </Routes>
        </div>
      </div>

    </BrowserRouter>
  );
}

export default App;
