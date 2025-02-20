const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-16">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4">Media Alpha</h3>
                        <p className="text-gray-400">Transforming consumer intent into valuable opportunities through data-driven insights.</p>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Solutions</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#" className="hover:text-cyan-500">Intent Recognition</a></li>
                            <li><a href="#" className="hover:text-cyan-500">Data Marketplace</a></li>
                            <li><a href="#" className="hover:text-cyan-500">Analytics</a></li>
                            <li><a href="#" className="hover:text-cyan-500">Partner Network</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Company</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="/about-us" className="hover:text-cyan-500">About Us</a></li>
                            <li><a href="/privacy" className="hover:text-cyan-500">Privacy and Policy</a></li>
                            <li><a href="/terms" className="hover:text-cyan-500">Terms</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-bold mb-4">Contact Us</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li>1234 Market Street</li>
                            <li>Suite 1000</li>
                            <li>San Francisco, CA 94103</li>
                            <li>info@mediaalpha.com</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
                    <p>&copy; 2023 Media Alpha. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;