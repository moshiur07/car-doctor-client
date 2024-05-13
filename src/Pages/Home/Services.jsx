import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { GoMoveToEnd } from "react-icons/go";

const Services = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <div className="text-center my-8 space-y-6">
                <h3 className="text-2xl font-bold text-red-500">Services</h3>
                <h3 className='text-5xl font-medium'>Our Services Area</h3>
                <p>The majority have suffered alteration in some form, by injected <br /> humour, or randomized words which do not look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {
                    services?.map(service => <div key={service._id}>
                        <div className="card  bg-base-100 shadow-xl">
                            <figure><img className='p-4' src={service?.img} alt="Shoes" /></figure>
                            <div className="card-body">
                                <h2 className="card-title"> {service.title} </h2>
                                <div className="card-actions justify-end">
                                    <p className="text-red-500 font-bold text-xl">Price : ${service.price}</p>
                                    <button><Link to={`/services/${service._id}`}><GoMoveToEnd /></Link></button>
                                    
                                </div> 
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Services;