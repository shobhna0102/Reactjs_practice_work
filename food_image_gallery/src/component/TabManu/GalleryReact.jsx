import React, { useState } from 'react'
import '../TabManu/tab.css'
import Menu from "../TabManu/Menu";
import Menuitems from './Menuitems';
import Catmenu from './Catmenu';

const alllCategory = [...new Set(Menu.map((crntval) => crntval.category)), 'all'];

const GalleryReact = () => {

    const [items, setItems] = useState(Menu);
    const [catItem, setcatItems] = useState(alllCategory);


    const filterItem = (categItem) => {

        if (categItem === 'all') {
            setItems(Menu);
            return;

        }
        const updatedItems = Menu.filter((curElem) => {
            return curElem.category === categItem;
        });

        setItems(updatedItems);
    }

    return (
        <>
            <h1 className="mt-5 text-center main-heading">Order Your Favourite Dish</h1>
            <hr />
            <Catmenu filterItem={filterItem} catItem={catItem} />


            {/* my main items section  */}
            <Menuitems items={items} />

        </>
    )
}

export default GalleryReact