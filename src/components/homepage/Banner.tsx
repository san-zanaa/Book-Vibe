import Image from 'next/image'
import image from '@/assets/hero_img.jpg'

const Banner = () => {
    return (
        <section className="w-[90%] mx-auto mt-10 rounded-3xl bg-gradient-to-r from-gray-100 to-green-50 px-6 py-10 md:px-12 lg:px-16 overflow-hidden">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                <div className="text-center md:text-left">
                    <p className="text-[#23BE0A] font-semibold text-lg mb-3">
                        Find Your Next Favorite Book
                    </p>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 mb-6">
                        Books to freshen up your bookshelf
                    </h1>

                    <p className="text-gray-500 text-base md:text-lg mb-8 max-w-lg">
                        Discover amazing books, explore new stories, and find something
                        perfect for your next reading adventure.
                    </p>

                    <button className="btn btn-lg bg-[#23BE0A] hover:bg-[#1da108] border-none text-white font-bold px-8 shadow-md hover:shadow-lg transition-all duration-300">
                        View The List
                    </button>
                </div>

                <div className="flex justify-center md:justify-end">
                    <Image
                        src={image}
                        alt="Books"
                        className="w-full max-w-md object-contain drop-shadow-xl hover:scale-105 transition-transform duration-300"
                    />
                </div>

            </div>
        </section>
    )

}

export default Banner;