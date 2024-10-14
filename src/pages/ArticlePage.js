import React from 'react';
import { useParams } from 'react-router-dom';
import articles from './article-content';
import NotFoundPage from './NotFoundPage';

const ArticlePage = () =>{
  const {articleId} = useParams();
  const article = articles.find(article => article.name === articleId);
  
  if (!article){
    return <NotFoundPage/>
  }

  return(
    <article className="max-w-4xl mx-auto p-6 m-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">{article.title}</h1>
      {article.content.map((paragraph, index) => (
        <p key={index} className="text-lg text-gray-700 leading-relaxed mb-4">
          {paragraph}
        </p>
      ))}
    </article>
  );
}
export default ArticlePage;