import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Auth/AuthProvider";
import Swal from "sweetalert2";
import axios from "axios";


const CheckOut = () => {
    const service = useLoaderData()
    const { user } = useContext(AuthContext)
    console.log(service);


    const handleCheckout = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name?.value
        const email = form.email?.value
        const date = form.date?.value
        const price = form.price?.value

        const checkoutDetails = {
            serviceName: name,
            email,
            price,
            date,
            img: service.img
        }

        axios.post('http://localhost:5000/bookings', checkoutDetails)
            .then(data => {
                console.log(data);
                if(data?.data.insertedId){
                    Swal.fire({
                    title: "Successful!",
                    text: "CheckOut completed! ",
                    icon: "success"
                });
                }
                
            })
            .catch(error => console.log(error))




    }

    return (
        <div>
            Book Service for :{service.title}
            <div>
                <div className="hero min-h-screen ">
                    <div className="w-[80vw]">
                        <div className="card w-full shadow-xl bg-base-100">
                            <form onSubmit={handleCheckout} className="card-body">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Service Name</span>
                                        </label>
                                        <input type="text" name='name' defaultValue={service.title} className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Date</span>
                                        </label>
                                        <input type="date" name='date' className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">email</span>
                                        </label>
                                        <input type="email" name='email' defaultValue={user?.email} className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="price" name='price' defaultValue={service.price} className="input input-bordered" />
                                    </div>
                                </div>
                                <div className="form-control mt-6">
                                    <button type='submit' className="btn btn-block bg-orange-600">Checkout</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckOut;