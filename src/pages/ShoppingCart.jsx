import { Card, CardBody, Typography, Button } from "@material-tailwind/react";
import { HiPlus, HiMinus, HiTrash } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
    decreaseProduct,
    deleteProduct,
    increaseProduct
} from "../../Redux/mainData";
import { useEffect, useState } from "react";

export default function ShoppingCart() {
    const dispatch = useDispatch();

    const { selectedProduct } = useSelector(state => state.data);

    const [subtotal, setSubtotal] = useState(0);
    const [tax, setTax] = useState(0);
    const [totalWithTax, setTotalWithTax] = useState(0);

    useEffect(() => {
        const subtotal = selectedProduct.reduce((total, product) => {
            return total + product.price * product.quantity;
        }, 0);
        setSubtotal(subtotal.toFixed(2));
        const tax = +(subtotal * 0.18).toFixed(2);
        setTax(tax);
        const totalWithTax = +(subtotal + tax).toFixed(2);
        setTotalWithTax(totalWithTax);
    }, [selectedProduct]);

    return (
        <div className="bg-gray-50 min-h-screen p-6">
            <Typography
                variant="h3"
                className="mb-2 text-[#4A2E8E] font-bold text-center">
                Shopping Cart
            </Typography>

            <Typography
                variant="paragraph"
                className="mb-6 text-gray-600 text-center">
                You have {selectedProduct.length} item(s) in your cart
            </Typography>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                    {selectedProduct.map(product => (
                        <Card
                            key={product.id}
                            className="hover:shadow-md transition rounded-xl">
                            <CardBody className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-center sm:text-left">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-28 h-28 sm:w-20 sm:h-20 object-cover rounded mx-auto sm:mx-0"
                                />

                                <div className="flex-1">
                                    <Typography
                                        variant="h6"
                                        className="text-gray-900">
                                        {product.name}
                                    </Typography>
                                    <Typography
                                        variant="small"
                                        className="text-gray-500 text-sm">
                                        Color: {product.color}
                                    </Typography>
                                    <Typography className="font-bold mt-2 text-[#4A2E8E]">
                                        ${product.price}
                                    </Typography>
                                </div>

                                <div className="flex flex-col items-center justify-center sm:flex-row sm:items-center sm:justify-end gap-2 sm:gap-4 mt-2 sm:mt-0">
                                    <div className="flex items-center gap-2">
                                        <Button
                                            onClick={() =>
                                                dispatch(
                                                    decreaseProduct(product.id)
                                                )
                                            }
                                            size="sm"
                                            variant="outlined"
                                            color="red"
                                            className="min-w-[32px] p-2"
                                            disabled={product.quantity <= 1}>
                                            <HiMinus />
                                        </Button>

                                        <span className="font-medium w-6 text-center">
                                            {product.quantity}
                                        </span>

                                        <Button
                                            disabled={product.count === 0}
                                            size="sm"
                                            variant="outlined"
                                            color="green"
                                            className="min-w-[32px] p-2"
                                            onClick={() =>
                                                dispatch(
                                                    increaseProduct(product.id)
                                                )
                                            }>
                                            <HiPlus />
                                        </Button>
                                    </div>

                                    <Button
                                        onClick={() =>
                                            dispatch(deleteProduct(product.id))
                                        }
                                        size="sm"
                                        variant="outlined"
                                        color="red"
                                        className="p-2 text-sm">
                                        <HiTrash />
                                    </Button>
                                </div>
                            </CardBody>
                        </Card>
                    ))}
                </div>

                <Card className="p-4 h-fit shadow-md">
                    <CardBody>
                        <Typography variant="h6" className="mb-4">
                            Order Summary
                        </Typography>
                        <div className="flex justify-between mb-2 text-sm text-gray-600">
                            <span>Subtotal</span>
                            <span>${subtotal}</span>
                        </div>
                        <div className="flex justify-between mb-4 text-sm text-gray-600">
                            <span>Tax</span>
                            <span>${tax}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg mb-6">
                            <span>Total</span>
                            <span className="text-[#4A2E8E]">
                                ${totalWithTax}
                            </span>
                        </div>
                        <Button
                            fullWidth
                            className="bg-[#7E57C2] hover:bg-[#6C44B4] text-white">
                            Proceed to Checkout
                        </Button>
                        <Link to="/products">
                            <Button
                                fullWidth
                                variant="outlined"
                                className="mt-2 border-[#4A2E8E] text-[#4A2E8E] hover:border-[#4A2E8E]">
                                Continue Shopping
                            </Button>
                        </Link>
                    </CardBody>
                </Card>
            </div>
        </div>
    );
}
