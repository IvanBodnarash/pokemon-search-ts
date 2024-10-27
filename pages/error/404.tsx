import Link from "next/link";

export default function NotFoundPage() {
    return (
        <div className="bg-blue-950 h-screen flex flex-col items-center justify-center text-slate-200">
            <h1 className="text-9xl">404</h1>
            <h1 className="text-3xl mt-4">Not Found</h1>
            <p>The Pokemon you&apos;re looking for does not exist.</p>
            <Link href="/" className="text-slate-400 hover:text-slate-300">
                Go back to Home
            </Link>
        </div>
    );
}