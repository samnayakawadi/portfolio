/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';

const Resources = ({ onHoverHandler }) => {
    const [isLocked, setIsLocked] = useState(true);
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [selectedMenu, setSelectedMenu] = useState('Important Links');
    const correctPassword = 'cdac@123$';

    const handleUnlock = () => {
        if (password === correctPassword) {
            setIsLocked(false);
            setError('');
        } else {
            setError('Incorrect password. Please try again.');
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleUnlock();
        }
    };

    useEffect(() => {
        onHoverHandler('resources');
    }, [onHoverHandler]);

    const renderIframeSrc = () => {
        switch (selectedMenu) {
            case 'Projects':
                return 'https://v2-embednotion.com/fa1ed14b803a43a8a3a3214db1bf59d8';
            case 'Work Reports':
                return 'https://docs.google.com/document/d/e/2PACX-1vRzvWoz0-sh-w-SXAWIGMDWtShIsKPBmjDA2ypGthF1nMZFcriUi2OGXk293l7mil4X9rh6FKnbAAYQ/pub?embedded=true';
            case 'Meeting Notes':
                return 'https://v2-embednotion.com/b4625616ca1548048e70c8fee051554f';
            case 'Events':
                return 'https://drive.google.com/drive/folders/1JOLUMsm0MuncrVZSTbQUysCGinz7wylv?usp=sharing';
            default:
                return 'https://v2-embednotion.com/fa1ed14b803a43a8a3a3214db1bf59d8';
        }
    };

    return (
        <div className="relative h-full w-full flex">
            <div className="basis-3/12 h-full bg-gray-100 p-4">
                <h2 className="text-2xl font-semibold mb-4">Resources</h2>
                <ul className="space-y-2">
                    {['Projects', 'Work Reports', 'Meeting Notes', 'Events'].map((menu) => (
                        <li key={menu}>
                            <button
                                className={`w-full text-left p-2 rounded-md transition ${selectedMenu === menu ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'
                                    }`}
                                onClick={() => setSelectedMenu(menu)}
                            >
                                {menu}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="basis-9/12 h-full">
                <iframe src={renderIframeSrc()} className="w-full h-full" />
                {isLocked && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-md flex items-center justify-center">
                        <div className="bg-white bg-opacity-90 p-8 rounded-lg shadow-2xl max-w-md w-full">
                            <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Enter Password</h2>
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onKeyDown={handleKeyDown}
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
        </div>
    );
};

export default Resources;
