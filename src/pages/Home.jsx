import {
    Button,
    Card,
    CardBody,
    Typography,
    Badge
} from "@material-tailwind/react";
import {
    HiOutlineDevicePhoneMobile,
    HiOutlineHomeModern
} from "react-icons/hi2";
import { GiClothes } from "react-icons/gi";
import { MdSportsHandball } from "react-icons/md";
import { useSelector } from "react-redux";

export default function EcommerceLanding() {
    const { items } = useSelector(state => state.data);
    console.log(items);

    const categories = [
        {
            name: "Electronics",
            icon: HiOutlineDevicePhoneMobile,
            color: "bg-blue-100 text-blue-600"
        },
        {
            name: "Clothing",
            icon: GiClothes,
            color: "bg-purple-100 text-purple-600"
        },
        {
            name: "Home & Garden",
            icon: HiOutlineHomeModern,
            color: "bg-green-100 text-green-600"
        },
        {
            name: "Sports",
            icon: MdSportsHandball,
            color: "bg-orange-100 text-orange-600"
        }
    ];

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white py-20">
                <div className="max-w-7xl mx-auto px-4 text-center">
                    <Typography
                        variant="h2"
                        className="text-4xl md:text-6xl font-bold mb-6">
                        Shop with Ease
                    </Typography>
                    <Typography
                        variant="lead"
                        className="text-blue-100 text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        Discover amazing products at unbeatable prices. Your
                        one-stop destination for everything you need.
                    </Typography>
                    <Button
                        size="lg"
                        className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg">
                        Start Shopping
                    </Button>
                </div>
            </section>

            {/* Featured Products */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <Typography
                            variant="h3"
                            className="font-bold text-gray-900 mb-4">
                            Featured Products
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-gray-600 text-lg">
                            Discover our most popular items
                        </Typography>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                        {items.map(
                            (product, index) =>
                                index < 4 && (
                                    <Card
                                        key={product.id}
                                        className="group hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                                        <CardBody className="p-4">
                                            <div className="relative mb-4">
                                                <img
                                                    src={product.image}
                                                    alt={product.name}
                                                    className="w-full h-48 object-cover rounded-lg"
                                                />
                                            </div>
                                            <Typography
                                                variant="h6"
                                                className="text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                                                {product.name}
                                            </Typography>
                                            <Typography
                                                variant="lead"
                                                className="text-blue-600 text-2xl font-bold">
                                                {product.price}
                                            </Typography>
                                        </CardBody>
                                    </Card>
                                )
                        )}
                    </div>
                </div>
            </section>

            {/* Categories Section */}
            <section className="py-16">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <Typography
                            variant="h3"
                            className="font-bold text-gray-900 mb-4">
                            Shop by Category
                        </Typography>
                        <Typography
                            variant="paragraph"
                            className="text-gray-600 text-lg">
                            Find exactly what you're looking for
                        </Typography>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                        {categories.map(category => {
                            const Icon = category.icon;
                            return (
                                <Card
                                    key={category.name}
                                    className="group hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1">
                                    <CardBody className="p-8 text-center">
                                        <div
                                            className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${category.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                            <Icon className="h-8 w-8" />
                                        </div>
                                        <Typography
                                            variant="h6"
                                            className="text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                                            {category.name}
                                        </Typography>
                                    </CardBody>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>
        </div>
    );
}
