import { useState, useRef, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom";
import SignUpStyle from "../Styles/Ragister.module.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";



function SignUp({isLogin, setLogin}){

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [id, setId] = useState([]);
    const nameRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const storedEmail = localStorage.getItem("email");
        if(storedEmail){
            setEmail(storedEmail);
        }

        nameRef.current.focus();
    }, []);

    useEffect(() => {
        localStorage.setItem("email", email);
    }, [email]);

    function handleSubmit(e){
        // debugger;
        e.preventDefault();
        // console.log("debugger");
        // validate inputs 

        if(!name || !email || !password) {
            alert("All fields required!!!");
            return navigate("/signUp");
        }

        // setId([{name, email, password}, ...id]);

        const auth = getAuth();
        const user = createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
        // Signed up 
            const user = userCredential.user;
            console.log("User signed up: ", user);
        // ...
            setLogin(true);
            navigate("/");
            // await setDoc(doc(db, 'users', registerDetail.user.uid), formData);
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
        // ..
            console.log("Error during sign up:", errorCode, errorMessage);
            alert(errorMessage);
            navigate("/signUp");
        });

        // console.log(user);
        // setLogIn(true);
        nameRef.current.focus();

        

        setName("");
        setEmail("");
        setPassword("");
        navigate("/");
    }   

    console.log(email, password);

    return (
        <div className={SignUpStyle.signUp}>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" 
                        value={name} 
                        ref={nameRef} 
                        onChange={(e) => setName(e.target.value)} 
                        placeholder="Enter Name"
                /><br/>
                <input type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Enter Email"
                /><br/>
                <input type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Enter Password"
                /><br/>
                {/* <Link to="/"> */}
                    <button>Sign Up</button>
                {/* </Link> */}
            </form>
        </div>
    )
}

export default SignUp;