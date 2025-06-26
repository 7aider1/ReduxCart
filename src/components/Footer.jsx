import React from "react";
import { Typography } from "@material-tailwind/react";
import {
    FaFacebookF,
    FaTwitter,
    FaInstagram,
    FaLinkedinIn
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#4A2E8E] text-white py-12">
            <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                {/* Brand */}
                <div>
                    <Typography variant="h5" className="font-bold mb-2">
                        ShopEase
                    </Typography>
                    <Typography className="text-gray-300 text-sm">
                        Your trusted shopping companion for quality products and
                        great deals.
                    </Typography>
                </div>

                {/* Links */}
                <div className="space-y-2">
                    <Typography className="text-white font-semibold mb-2">
                        Quick Links
                    </Typography>
                    <ul className="space-y-1">
                        <li>
                            <Link
                                to="/"
                                className="text-gray-300 hover:text-white transition">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                className="text-gray-300 hover:text-white transition">
                                Products
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="/"
                                className="text-gray-300 hover:text-white transition">
                                Contact Us
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Social */}
                <div className="space-y-2">
                    <Typography className="text-white font-semibold mb-2">
                        Follow Us
                    </Typography>
                    <div className="flex justify-center md:justify-start gap-4 text-xl">
                        <Link to="/" className="hover:text-blue-400 transition">
                            <FaFacebookF />
                        </Link>
                        <Link to="/" className="hover:text-pink-400 transition">
                            <FaInstagram />
                        </Link>
                        <Link to="/" className="hover:text-sky-400 transition">
                            <FaTwitter />
                        </Link>
                        <Link to="/" className="hover:text-blue-300 transition">
                            <FaLinkedinIn />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom */}
            <div className="mt-8 text-center text-sm text-gray-400">
                © {new Date().getFullYear()} ShopEase. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
