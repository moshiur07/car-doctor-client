import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';
import axios from 'axios';

const Login = () => {
    const { login } = useContext(AuthContext)

    const location = useLocation()
    console.log(location);
    const navigate = useNavigate()

    const handleLogin = e => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        login(email, password)
            .then(res => {
                console.log(res.user)

                const user = {email}

                axios.post('http://localhost:5000/jwt',user)
                .then(data => console.log(data.data))
                // navigate(location?.state ? location?.state : '/')
            })
            .catch(error => {
                console.log(error)
            })

        console.log(email, password);
    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content  flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-xl ">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                        <p>Do not have an account? <Link to='/signup' className='text-red-600'>Register</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;