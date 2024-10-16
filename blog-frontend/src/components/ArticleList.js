
import { Link } from 'react-router-dom';
const ArticleList = ({articles}) =>{
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.map((article) => (
                <Link 
                    to={`/articles/${article.name}`}
                    className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                    key={article.name}
                    >
                        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{article.name}</h3>
                        <p className="text-gray-600 leading-relaxed">
                            {article.content[0].substring(0, 150)}...
                        </p>
                </Link>
            ))}
        </div>
    );
}
export default ArticleList;