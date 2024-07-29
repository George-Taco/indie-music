import React from 'react';
import { getAuth, signOut } from 'firebase/auth';

export interface IHomePageProps {}

function Home() {
    const auth = getAuth();
    return (
        <div>
            <p>Home Page(Logged in)</p>
            <button onClick={() => signOut(auth)}>Sign out of Firebase</button>
        </div>
    );
}

export default Home;