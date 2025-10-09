import toast, { Toaster } from "react-hot-toast";
import Footer from "../Footer/Footer";

const AddProduct = () => {

    const handleAddProduct = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const brandName = form.brand_name.value
        const type = form.type.value
        const price = form.price.value
        const description = form.description.value
        const rating = form.rating.value
        const image = form.image.value

        const newProduct = { name, brandName, type, price, description, rating, image }
        console.log(newProduct)


        fetch('https://rimberio-automotive-server.vercel.app/product', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('Product added succesfully')
                }
                form.reset()
            })
    }


    return (
        <div className="bg-[#EAF2F8] pt-20">
            <div className="bg-[#D4E6F1] container mx-auto border pt-10 px-1 lg:p-16 rounded-md shadow">
                <h1 className="text-4xl text-center font-bold text-[#374151] mb-8">Add A Product</h1>
                <p className="text-center text-base font-medium text-[#1B1A1AB3]">Discover a curated selection of top-tier vehicles at our car brand shop. From sleek sedans to rugged SUVs, we offer a range of models known for their quality, performance, and style. Each vehicle is meticulously inspected and maintained to ensure you drive away with confidence. Explore our showroom today and find the perfect car that suits your lifestyle and preferences.</p>
                <form onSubmit={handleAddProduct}>
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-6 ">
                        <div className="w-full md:w-1/2">
                            <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Name</h2>
                            <input className="pt-5 pb-5 pl-2 md:p-5 w-full shadow-md  text-base font-normal text-[#1B1A1A99] rounded" type="text" name="name" placeholder="Enter Name Here" id="" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Brand Name</h2>
                            <select className="pt-5 pb-5 pl-2 md:p-5 w-full shadow-md text-base font-normal text-[#1B1A1A99] rounded" name="brand_name" id="brand">
                                <option value="Toyota">Toyota</option>
                                <option value="Ford">Ford</option>
                                <option value="BMW">BMW</option>
                                <option value="Mercedes-Benz">Mercedes-Benz</option>
                                <option value="Tesla">Tesla</option>
                                <option value="Honda">Honda</option>
                            </select>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-6 ">
                        <div className="w-full md:w-1/2">
                            <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Type</h2>
                            <input className="pt-5 pb-5 pl-2 md:p-5 w-full shadow-md  text-base font-normal text-[#1B1A1A99] rounded" type="text" name="type" placeholder="Enter Type Here" id="" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Price</h2>
                            <input className="pt-5 pb-5 pl-2 md:p-5 w-full shadow-md  text-base font-normal text-[#1B1A1A99] rounded" type="text" name="price" placeholder="Enter Price Here" id="" />
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center gap-6 mb-6 ">
                        <div className="w-full md:w-1/2">
                            <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Short description</h2>
                            <input className="pt-5 pb-5 pl-2 md:p-5 w-full shadow-md  text-base font-normal text-[#1B1A1A99] rounded" type="text" name="description" placeholder="Enter Description Here" id="" />
                        </div>
                        <div className="w-full md:w-1/2">
                            <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Rating</h2>
                            <input className="pt-5 pb-5 pl-2 md:p-5 w-full shadow-md  text-base font-normal text-[#1B1A1A99] rounded" type="text" name="rating" placeholder="Enter Rating Here" id="" />
                        </div>
                    </div>
                    <div className="w-full mb-6">
                        <h2 className=" text-base md:text-xl font-semibold text-[#1B1A1ACC] mb-4">Image</h2>
                        <input className="pt-5 pb-5 pl-2 md:p-5 w-full shadow-md  text-base font-normal text-[#1B1A1A99] rounded" type="text" name="image" placeholder="Enter Price Here" id="" />
                    </div>
                    <input type="submit" value="Add Product" className="btn btn-block bg-[#196F3D] text-lg text-[#fff] hover:bg-[#154360] " />
                </form>
            </div>
            <Footer></Footer>
            <Toaster/>
        </div>
    );
};

export default AddProduct;