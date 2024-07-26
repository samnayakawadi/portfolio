import { useEffect, useState } from 'react';

const Links = ({ onHoverHandler }) => {
    const [isLocked, setIsLocked] = useState(true);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const correctPassword = 'cdac@123$';

    const handleUnlock = () => {
        if (password === correctPassword) {
            setIsLocked(false);
            setError(''); // Clear any previous error message
        } else {
            setError('Incorrect password. Please try again.');
        }
    };

    useEffect(() => {
        onHoverHandler("links")
    }, [])

    return (
        <div className="relative h-full w-full flex-grow">
            <iframe
                src="https://v2-embednotion.com/fa1ed14b803a43a8a3a3214db1bf59d8"
                className="w-full h-full"
            />
            {isLocked && (
                <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md flex items-center justify-center">
                    <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl max-w-md w-full">
                        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Enter Password</h2>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="border border-gray-300 p-3 mb-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Password"
                        />
                        {error && <p className="text-red-500 text-sm mb-6">{error}</p>}
                        <button
                            onClick={handleUnlock}
                            className="bg-blue-600 text-white px-6 py-3 rounded-md w-full font-semibold hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Unlock
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Links;
