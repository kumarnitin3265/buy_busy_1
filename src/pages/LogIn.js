
import { useEffect, useState, useRef } from "react"
import loginStyle from "../Styles/Login.module.css";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../firebaseInit";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


function SignIn({setLogin}){
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        emailRef.current.focus();
    }, []);

    useEffect(() => {
        localStorage.setItem("email", email);
    }, [email]);

    useEffect(() => {
        localStorage.setItem("password", password);
    }, [password]);

    function handleSubmit(e) {
        e.preventDefault();

        if(!email || !password) {
            alert("All fields required!!!");
            return navigate("/signIn");
        }

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Handle successful Signed in 
            const user = userCredential.user;
            // ...
            console.log("User signed in:", user);
            setLogin(true);
            navigate("/");
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log("Error during sign in:", errorCode, errorMessage);
            alert(errorMessage);

            navigate("/signIn");
        });

        emailRef.current.focus();
        
        setEmail("");
        setPassword("");
    }

    return (
        <div className={loginStyle.login}>
            <h1>Sign In</h1>
            <form onSubmit={handleSubmit}>
                <input type="email" 
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        ref={emailRef} 
                        placeholder="Enter Email"
                /><br/>
                <input type="password" 
                        id="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter Password"
                /><br/>
                {/* <Link to="/"> */}
                    <button type="submit">Sign In</button>
                {/* </Link> */}

                <Link to="/signUp">
                    <p>Or SignUp instead</p>
                </Link>
            </form>
        </div>
    )
}

export default SignIn;