import axios from "axios";



const apisavecart = async (cartData) => {
    try {
        const response = await axios.post('http://192.168.0.131:3000/api/savecart', cartData);
        console.log('Cart saved successfully:', response.data);
    } catch (error) {
        console.error('Error saving cart:', error);
    }
};


 export {apisavecart};


