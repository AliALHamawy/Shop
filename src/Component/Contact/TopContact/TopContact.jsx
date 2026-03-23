import './TopContact.css'
// import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

function TopContact() {
    return (
        <>
            <div className="topContact mt-24 md:mt-32 lg:mt-32 bg-(--bg-gray)">
                <div className="txt max-w-[546px] text-center m-auto py-20">
                    <h1 className='text-5xl font-bold'>Contact Us</h1>
                    <p className='text-xl text-zinc-900 font-semibold'>Proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet.</p>
                </div>
                <div className="map h-[450px] bg-gray-300 overflow-hidden">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-73.985291684584!3d40.74844097932781!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1644262071854!5m2!1sen!2sus"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </>
    )
}

export default TopContact