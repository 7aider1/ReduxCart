import { Typography, Button } from "@material-tailwind/react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ShoppingCart from "./ShoppingCart";
import { useSelector } from "react-redux";

export default function EmptyCart() {
    const { selectedProduct } = useSelector(state => state.data);
    return (
        <>
            {selectedProduct.length > 0 ? (
                <ShoppingCart />
            ) : (
                <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="min-h-screen flex flex-col justify-center items-center bg-gray-50 text-center px-4">
                    <HiOutlineShoppingBag className="text-6xl text-gray-400 mb-4" />

                    <Typography variant="h5" className="mb-2">
                        Your cart is empty
                    </Typography>

                    <Typography className="text-gray-500 mb-6">
                        Add some items to get started!
                    </Typography>

                    <Link to="/products">
                        <Button className="bg-[#7E57C2] hover:bg-[#6C44B4] text-white transition">
                            Continue Shopping
                        </Button>
                    </Link>
                </motion.div>
            )}
        </>
    );
}
