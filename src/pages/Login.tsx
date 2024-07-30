import React, { useState } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

export interface ILoginPageProps {}

const Login: React.FunctionComponent<ILoginPageProps> = (props) => {
    const auth = getAuth();
    const navigate = useNavigate();
    const [authing, setAuthing] = useState(false);

    const signInWithGoogle = async () => {
        setAuthing(true);

        signInWithPopup(auth, new GoogleAuthProvider())
        .then(response => {
            console.log(response.user.uid);
            navigate('/');
        })
        .catch(error => {
            console.log(error);
            setAuthing(false);
        });
    }

    return (
    <div>
        <p>Login</p>
        <button onClick={() => signInWithGoogle()} disabled={authing}>Sign in with Google</button>
    </div>
    );
}
 
export default Login;