import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Auth/AuthProvider";
import axios from "axios";


const MyBookings = () => {
    const { user } = useContext(AuthContext)
    const [bookings, setBookings] = useState([])

    const url = `http://localhost:5000/bookings?email=${user.email}`

    useEffect(() => {
        axios.get(url)
            .then(data => {
                setBookings(data.data)
                console.log(data.data);
            })
    }, [])


    const handleDelete = (_id) => {
        fetch(`http://localhost:5000/bookings/${_id}`, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            bookings?.map(booking => <tr key={booking._id}>
                                <th>
                                    <span className="btn btn-circle">X</span>
                                </th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle w-12 h-12">
                                                <img src={booking?.img} alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{booking.title}</div>
                                        </div>
                                    </div>
                                </td>
                                <td> {booking.price}</td>
                                <td>{booking.date}</td>
                                <th>
                                    <button onClick={() => handleDelete(booking._id)} className="btn btn-ghost bg-red-400 text-white ">Pending</button>
                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyBookings;