import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    Card,
    CardBody,
    CardFooter,
    Button,
    Typography,
    Badge
} from "@material-tailwind/react";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { addProduct } from "../../Redux/mainData";

const Products = () => {
    const { items } = useSelector(state => state.data);

    const dispatch = useDispatch();

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-6 text-center">
            {items.map(product => (
                <Card
                    key={product.id}
                    className="group w-full max-w-sm mx-auto bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 rounded-2xl overflow-hidden border">
                    <div className="relative h-60 w-full overflow-hidden">
                        <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-cover"
                        />
                        <Badge
                            withBorder
                            className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-yellow-500 text-white">
                            NEW
                        </Badge>
                    </div>

                    <CardBody className="space-y-2 flex-grow">
                        <Typography
                            variant="h6"
                            className="text-gray-900 font-semibold group-hover:text-purple-700 transition-colors">
                            {product.name}
                        </Typography>
                        <Typography className="text-sm text-gray-600 line-clamp-2">
                            {product.description}
                        </Typography>
                        {product.count == 0 ? (
                            <Typography className="font-extrabold mt-2 text-red-700">
                                OUT OF STOCK
                            </Typography>
                        ) : (
                            <Typography className="font-extrabold mt-2 text-light-green-500">
                                IN STOCK
                            </Typography>
                        )}
                        <Typography
                            variant="h5"
                            className="text-purple-600 font-bold">
                            ${product.price}
                        </Typography>
                    </CardBody>

                    <CardFooter className="pt-0">
                        <Button
                            disabled={product.count == 0}
                            onClick={() => dispatch(addProduct(product.id))}
                            fullWidth
                            className="flex items-center justify-center gap-2 bg-[#7e57c2] hover:bg-purple-700 transition">
                            <HiOutlineShoppingCart className="h-5 w-5" />
                            Add to Cart
                        </Button>
                    </CardFooter>
                </Card>
            ))}
        </div>
    );
};

export default Products;
