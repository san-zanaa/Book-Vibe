import Link from "next/link";

const Footer = () => {
    return (
        <footer className="mt-20 bg-gray-100 border-t border-gray-200">

            <div className="container w-[95%] mx-auto px-6 py-12">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div>
                        <h2 className="text-xl font-bold">Book Vibe</h2>
                        <p className="mt-4 text-sm text-gray-500 leading-6">
                            Enjoy deep classics, exciting stories and powerful books by brilliant writers
                        </p>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Quick Links</h3>

                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><Link href="/" className="hover:text-green-500" />Home</li>
                            <li><Link href="/books" className="hover:text-green-500" />Listed Books</li>
                            <li><Link href="/pages-to-read" className="hover:text-green-500" />Pages to Read</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Support</h3>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-green-500" />Contact Us</li>
                            <li><Link href="#" className="hover:text-green-500" />FAQ</li>
                            <li><Link href="#" className="hover:text-green-500" />Privacy Policy</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-bold mb-4">Follow Us</h3>
                        <ul className="space-y-3 text-sm text-gray-500">
                            <li><Link href="#" className="hover:text-green-500" />Facebook</li>
                            <li><Link href="#" className="hover:text-green-500" />Instagram</li>
                            <li><Link href="#" className="hover:text-green-500" />LinkedIn</li>
                        </ul>
                    </div>

                </div>
                
                <div className="mt-10 pt-6 border-t border-gray-200 text-center">
                    <p className="text-sm text-gray-500">
                        © 2026 Book Vibe. All rights reserved.
                    </p>
                </div>

            </div>
        </footer >
  );
};

export default Footer;