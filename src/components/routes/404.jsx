/* eslint-disable react/no-unescaped-entities */
import { useNavigate } from 'react-router-dom';

const NotFoundPage = () => {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col items-center justify-center h-full w-full bg-gray-100 text-center p-6">
            <div className="text-9xl font-bold text-blue-500">404</div>
            <h1 className="text-4xl font-extrabold mt-4 mb-2 text-gray-800">Oops! Page Not Found</h1>
            <p className="text-lg text-gray-600 mb-6">It looks like the page you're looking for doesn't exist. Maybe you mistyped the URL or the page has been moved.</p>
            {/* <div className="mb-6">
                <input
                    type="text"
                    placeholder="Search..."
                    className="border border-gray-300 p-3 w-full max-w-md rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div> */}
            <button
                onClick={() => navigate('/')}
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
                Go to Homepage
            </button>
        </div>
    );
};

export default NotFoundPage;
