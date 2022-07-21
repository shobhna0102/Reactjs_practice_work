import React from 'react'

function Catmenu({ filterItem, catItem }) {
    return (
        <div className="menu-tabs container">
            <div className="menu-tab d-flex justify-content-around">
                {
                    catItem.map((crntCatItem, index) => {
                        return (
                            <button className="btn btn-warning" key={index} onClick={() => filterItem(crntCatItem)}>{crntCatItem}</button>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default Catmenu
