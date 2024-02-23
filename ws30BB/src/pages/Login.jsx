import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { login } from '../API';

const Login = ({}) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    async function handleSubmit(event) {
        event.prevenDefault();
        const data = await login(username, password);
        console.log(data);
        navigate('/books');
    }

    return(
        <div>
            <h1>Login</h1>
            <form className="loginCard" onSubmit={handleSubmit}>
                <input value={username} onChange={(e) => setUsername(e.target.value)} type="text" placeholder="Username" />
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
export default Login;