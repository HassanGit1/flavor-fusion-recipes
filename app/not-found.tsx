import Link from 'next/link';

const NotFoundPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50 p-8 rounded-lg shadow-lg">
      <h1 className="text-6xl font-bold text-blue-600 mb-4">404</h1>
      <h2 className="text-3xl font-semibold text-gray-800 mb-2">Page Not Found</h2>
      <p className="text-lg text-gray-600 mb-6">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link 
        href="/" 
        className="bg-gradient-to-r from-[#2a4d69] to-[#4b86b4] text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
        Go Back Home
      </Link>
    </div>
  );
};

export default NotFoundPage;