import React from "react";
import { Button, Typography, Badge } from "@material-tailwind/react";
import {
    HiOutlineShoppingCart,
    HiOutlineDevicePhoneMobile,
    HiOutlineHomeModern
} from "react-icons/hi2";
import { GiClothes } from "react-icons/gi";
import { MdSports } from "react-icons/md";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function EcommerceNavbar() {
    const { selectedProduct } = useSelector(state => state.data);
    return (
        <header className="fixed top-0 w-full z-50 bg-[#5E35B1CC] shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Brand Name */}
                    <Typography variant="h5" className="text-white font-bold">
                        ShopEase
                    </Typography>

                    {/* Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        <Link
                            to="/"
                            className="relative text-white font-medium transition duration-300 hover:text-gray-100 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                            Home
                        </Link>
                        <Link
                            to="/products"
                            className="relative text-white font-medium transition duration-300 hover:text-gray-100 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full">
                            Products
                        </Link>
                    </nav>

                    {/* Cart Icon */}
                    <div className="flex items-center relative">
                        <Link to="/cart">
                            <Button
                                variant="text"
                                className="relative p-2 rounded-full">
                                <HiOutlineShoppingCart className="h-6 w-6 text-white" />
                                {selectedProduct.length > 0 && (
                                    <Badge className="absolute -top-2 -right-2 text-white text-xs bg-red-500 rounded-full px-1.5">
                                        {selectedProduct.length}
                                    </Badge>
                                )}
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    );
}
