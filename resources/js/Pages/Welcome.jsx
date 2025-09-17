import { Head, Link } from '@inertiajs/react';
import Login from './Auth/Login' ;
import Register from './Auth/Register' ;
export default function Welcome({ auth}) {
  

    return (
        <>
        <Link
            href={route('login')}
            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
            Already registered?
        </Link>
        
        <Link
            href={route('register')}
            className="rounded-md text-sm text-gray-600 underline hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
            Not yet registered?
        </Link>
        </>
    );
}
