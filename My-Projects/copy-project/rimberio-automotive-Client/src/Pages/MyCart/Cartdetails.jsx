/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import Swal from "sweetalert2";
const Cartdetails = ({ cart, carts, setCarts }) => {
    const { _id, image, email, price, name, type } = cart

    const handleDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://rimberio-automotive-server.vercel.app/addTocart/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Product has been deleted.',
                                'success'
                            )
                            const remaining = carts.filter(cot => cot._id !== _id)
                            setCarts(remaining)
                        }
                    })
            }
        })
    }


    return (
        <div >
            <div className="bg-base-100 shadow-xl flex flex-col lg:flex-row items-center gap-5 lg:p-5 pb-10">
                <img className="lg:w-1/2 px-2 lg:px-0 rounded-lg" src={image} alt="" />
                <div>
                    <h1 className="text-4xl text-center">{name}</h1>
                    <div className="flex gap-8 mt-5 justify-center">
                        <p className="text-xl font-semibold">price : {price}</p>
                        <p className="text-xl font-semibold">Type: {type}</p>
                    </div>
                    <div className=" ml-36 md:ml-32 mt-7">
                        <button onClick={() => handleDelete(_id)} className="btn btn-accent">Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cartdetails;