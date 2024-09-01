import React from "react";

interface ErrorMessageProps {
    error: string | null;
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ error }) => {
    return error ? <p>Error: {error}</p> : null;
};

export default ErrorMessage;