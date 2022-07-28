import React from 'react'

const Home = (props) => {
    console.log("home data", props.data);
    return (

        <div>
            <div className="add-to-cart">
                <span className="cart-count">{props.data.length}</span>
                <img src="images/add.png" alt="not found" />

            </div>
            <h1>Home</h1>
            <div className="cart-wrapper">
                <div className="img-wrapper item">
                    <img src="images/phone.webp" alt="not found" />
                </div>
                <div className="text_wrapper item">
                    <span>Vivo</span>
                    <span> price:$10000</span>
                </div>
                <div className="btn_wrapper item">
                    <button onClick={() => props.addTOCartHandeler({ price: 10000, name: 'vivo' })}>Add to Cart</button>
                    <button className="remove-btn" onClick={() => props.removeTOCartHandeler()}>Remove to Cart</button>
                </div>
            </div>
        </div>

    )
}

export default Home
