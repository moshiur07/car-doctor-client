import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { useContext } from 'react';
import { AuthContext } from '../../Auth/AuthProvider';

const Register = () => {
    const {register}= useContext(AuthContext)
    const handleRegister = e =>{
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        register(email,password)
        .then(res => console.log('from register',res.user))
        .catch(error => console.log(error))
        

    }
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content  flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-xl ">
                    <form onSubmit={handleRegister} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Your Name" className="input input-bordered"  />
                        </div>
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
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Register</button>
                        </div>
                        <p>Already have an account? <Link to='/login' className='text-red-600'>Login</Link> </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;