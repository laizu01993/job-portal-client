import React, { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

const SocialLogin = () => {

    const {signInWithGoogle} = useContext(AuthContext);

    const handleWithGoogle = () =>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user);
            
        })
        .catch(error =>{
            console.log(error.message);
            
        })
    }
    return (
        <div>
            <button onClick={handleWithGoogle} className='btn btn-primary'>Google</button>
        </div>
    );
};

export default SocialLogin;