import React from 'react';
import ArticleList from '../components/ArticleList';
import articles from './article-content';


const ArticleListPage = ()=>{
  return(
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Articles</h1>
      <ArticleList articles={articles}/>
    </div>

  );
}
export default ArticleListPage ;
