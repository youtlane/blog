const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
      <p className="text-xl text-gray-600 mb-6">Oups ! Page non trouvée.</p>
      <p className="text-lg text-gray-500 mb-8">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <a 
        href="/" 
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
      >
        Retourner à l'accueil
      </a>
    </div>
  );
}

export default NotFoundPage;
