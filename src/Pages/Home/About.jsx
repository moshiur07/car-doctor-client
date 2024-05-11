import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'
const About = () => {
    return (
        <div className="hero min-h-[80vh] ">
            <div className="hero-content gap-10 flex-col lg:flex-row">
                <div className='flex-1  relative'>
                    <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
                    <img src={parts} className="w-1/2 absolute right-8 top-28 border-8 border-gray-200 rounded-lg shadow-2xl" />
                </div>
                <div className='flex-1  space-y-5'>
                    <h2 className='text-3xl font-semibold text-red-500 '>About Us!</h2>
                    <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
                    <p className="pt-4 pb-2">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                    <p className="pb-5">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable.</p>
                    <button className="btn bg-red-500 text-white">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;