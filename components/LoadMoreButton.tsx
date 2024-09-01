import React from "react";

interface LoadMoreButtonProps {
    loading: boolean;
    nextUrl: string | null;
    onClick: () => void;
}

const LoadMoreButton: React.FC<LoadMoreButtonProps> = ({ loading, nextUrl, onClick }) => {
    return (
        <button onClick={onClick} disabled={loading || !nextUrl} className="transition duration-300 ease-in-out bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 my-10 rounded">
            Load More
        </button>
    );
};

export default LoadMoreButton;