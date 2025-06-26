import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [
        {
            id: 1,
            name: "Wireless Mouse",
            price: 25.99,
            description: "Ergonomic wireless mouse with adjustable DPI.",
            color: "Black",
            count: 0,
            image: "https://api.mobilaty.com/storage/uploads/Iconz-mouse-wm02-blu-1-1707290361.jpg"
        },
        {
            id: 2,
            name: "Bluetooth Headphones",
            price: 79.99,
            description: "Over-ear headphones with noise cancellation.",
            color: "Blue",
            count: 2,
            image: "https://m.media-amazon.com/images/I/71exNLc-CnL.jpg"
        },
        {
            id: 3,
            name: "Gaming Keyboard",
            price: 49.99,
            description: "Mechanical keyboard with RGB lighting.",
            color: "White",
            count: 12,
            image: "https://i.rtings.com/assets/products/gIzsUYgF/nuphy-field75-he/design-small.jpg?format=auto"
        },
        {
            id: 4,
            name: "Smartphone Stand",
            price: 9.99,
            description: "Adjustable aluminum stand for smartphones.",
            color: "Silver",
            count: 30,
            image: "https://m.media-amazon.com/images/I/61d7kG8IRbL.AC_SL1292.jpg"
        },
        {
            id: 5,
            name: "USB-C Hub",
            price: 39.99,
            description: "Multiport hub with HDMI, USB, and SD card slots.",
            color: "Gray",
            count: 20,
            image: "https://m.media-amazon.com/images/I/71p2z8+KEsL.AC_SL1500.jpg"
        },
        {
            id: 6,
            name: "Laptop Backpack",
            price: 59.99,
            description: "Water-resistant backpack with padded laptop sleeve.",
            color: "Green",
            count: 10,
            image: "https://www.ubuy.com.eg/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzF2clg3cTErV0wuX0FDX1NMMTUwMF8uanBn.jpg"
        },
        {
            id: 7,
            name: "LED Desk Lamp",
            price: 29.99,
            description: "Touch control lamp with adjustable brightness.",
            color: "White",
            count: 18,
            image: "https://images-cdn.ubuy.co.in/639e4df3ff8a9416f210c192-360-lighting-modern-desk-table-lamp-led.jpg"
        },
        {
            id: 8,
            name: "Portable Charger",
            price: 19.99,
            description: "10,000mAh power bank with fast charging.",
            color: "Red",
            count: 25,
            image: "https://www.travelandleisure.com/thmb/l5EiHHzFWePXYyY2r4GqiwMeT5Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/portable-charger-with-built-in-cables-e786244d83934a64b022435671886cfd.jpg"
        },
        {
            id: 9,
            name: "Action Camera",
            price: 99.99,
            description: "4K waterproof camera with wide-angle lens.",
            color: "Black",
            count: 5,
            image: "https://www.redsharknews.com/hubfs/Which%20action%20camera%20to%20buy.jpg"
        },
        {
            id: 10,
            name: "Fitness Tracker",
            price: 45.99,
            description: "Track your steps, heart rate, and sleep patterns.",
            color: "Purple",
            count: 14,
            image: "https://techwellness.com/cdn/shop/files/Screen_Shot_2024-07-27_at_9.09.29_PM_1024x1024@2x.png?v=1722132597"
        }
    ],
    copyOfItems: [
        {
            id: 1,
            name: "Wireless Mouse",
            price: 25.99,
            description: "Ergonomic wireless mouse with adjustable DPI.",
            color: "Black",
            count: 0,
            image: "https://api.mobilaty.com/storage/uploads/Iconz-mouse-wm02-blu-1-1707290361.jpg"
        },
        {
            id: 2,
            name: "Bluetooth Headphones",
            price: 79.99,
            description: "Over-ear headphones with noise cancellation.",
            color: "Blue",
            count: 2,
            image: "https://m.media-amazon.com/images/I/71exNLc-CnL.jpg"
        },
        {
            id: 3,
            name: "Gaming Keyboard",
            price: 49.99,
            description: "Mechanical keyboard with RGB lighting.",
            color: "White",
            count: 12,
            image: "https://i.rtings.com/assets/products/gIzsUYgF/nuphy-field75-he/design-small.jpg?format=auto"
        },
        {
            id: 4,
            name: "Smartphone Stand",
            price: 9.99,
            description: "Adjustable aluminum stand for smartphones.",
            color: "Silver",
            count: 30,
            image: "https://m.media-amazon.com/images/I/61d7kG8IRbL.AC_SL1292.jpg"
        },
        {
            id: 5,
            name: "USB-C Hub",
            price: 39.99,
            description: "Multiport hub with HDMI, USB, and SD card slots.",
            color: "Gray",
            count: 20,
            image: "https://m.media-amazon.com/images/I/71p2z8+KEsL.AC_SL1500.jpg"
        },
        {
            id: 6,
            name: "Laptop Backpack",
            price: 59.99,
            description: "Water-resistant backpack with padded laptop sleeve.",
            color: "Green",
            count: 10,
            image: "https://www.ubuy.com.eg/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzF2clg3cTErV0wuX0FDX1NMMTUwMF8uanBn.jpg"
        },
        {
            id: 7,
            name: "LED Desk Lamp",
            price: 29.99,
            description: "Touch control lamp with adjustable brightness.",
            color: "White",
            count: 18,
            image: "https://images-cdn.ubuy.co.in/639e4df3ff8a9416f210c192-360-lighting-modern-desk-table-lamp-led.jpg"
        },
        {
            id: 8,
            name: "Portable Charger",
            price: 19.99,
            description: "10,000mAh power bank with fast charging.",
            color: "Red",
            count: 25,
            image: "https://www.travelandleisure.com/thmb/l5EiHHzFWePXYyY2r4GqiwMeT5Y=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/portable-charger-with-built-in-cables-e786244d83934a64b022435671886cfd.jpg"
        },
        {
            id: 9,
            name: "Action Camera",
            price: 99.99,
            description: "4K waterproof camera with wide-angle lens.",
            color: "Black",
            count: 5,
            image: "https://www.redsharknews.com/hubfs/Which%20action%20camera%20to%20buy.jpg"
        },
        {
            id: 10,
            name: "Fitness Tracker",
            price: 45.99,
            description: "Track your steps, heart rate, and sleep patterns.",
            color: "Purple",
            count: 14,
            image: "https://techwellness.com/cdn/shop/files/Screen_Shot_2024-07-27_at_9.09.29_PM_1024x1024@2x.png?v=1722132597"
        }
    ],

    selectedProduct: []
};

const mainDataSlice = createSlice({
    name: "mainData",
    initialState,
    reducers: {
        addProduct: (state, { payload }) => {
            const currentProduct = state.items.find(
                product => product.id === payload
            );
            const exitProduct = state.selectedProduct.find(
                product => product.id === payload
            );

            if (exitProduct) {
                if (exitProduct.count > 0) {
                    exitProduct.count -= 1;
                    currentProduct.count -= 1;
                    exitProduct.quantity += 1;
                }
            } else {
                state.selectedProduct.push({
                    ...currentProduct,
                    quantity: 1
                });
            }

            // console.log(JSON.parse(JSON.stringify(state.selectedProduct)));
        },
        increaseProduct: (state, { payload }) => {
            const currentProduct = state.items.find(
                product => product.id === payload
            );

            const exitProduct = state.selectedProduct.find(
                product => product.id === payload
            );
            if (exitProduct.count > 0) {
                exitProduct.count -= 1;

                currentProduct.count -= 1;

                exitProduct.quantity += 1;
            }
        },
        decreaseProduct: (state, { payload }) => {
            const currentProduct = state.items.find(
                product => product.id === payload
            );

            const exitProduct = state.selectedProduct.find(
                product => product.id === payload
            );
            if (exitProduct.count >= 0) {
                exitProduct.count += 1;

                currentProduct.count += 1;

                exitProduct.quantity -= 1;
            }
        },
        deleteProduct: (state, { payload }) => {
            const currentProduct = state.items.find(
                product => product.id === payload
            );

            const copy = state.copyOfItems.find(
                product => product.id === payload
            );

            const targetProduct = state.selectedProduct.filter(
                product => product.id !== payload
            );

            state.selectedProduct = targetProduct;

            // console.log(JSON.parse(JSON.stringify(state.copyOfItems)));

            currentProduct.count = copy.count;
        },
        getTotal: state => {
            const total = state.selectedProduct.reduce((acc, product) => {
                return acc + product.price * (product.quantity || 1);
            }, 0);
        }
    }
});

export const selectTotal = state =>
    state.data.selectedProduct.reduce(
        (acc, p) => acc + p.price * p.quantity,
        0
    );

export const data = mainDataSlice.reducer;
export const { addProduct, increaseProduct, decreaseProduct, deleteProduct } =
    mainDataSlice.actions;
