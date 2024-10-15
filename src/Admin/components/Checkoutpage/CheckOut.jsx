import React from 'react'
import Checkout from '../../../Shared/Components/Checkout/Checkout'
import { Provider } from 'react-redux'
import Store from '../../../Components/Store/Store'

function CheckOut() {
    return (
        <>


            <Provider store={Store}>



                <Checkout />
            </Provider>
        </>

    )
}

export default CheckOut
