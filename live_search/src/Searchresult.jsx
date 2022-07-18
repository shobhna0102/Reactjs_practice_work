import React from "react";

const Search_result = (props) => {
    const img = `http://source.unsplash.com/400x300/?${props.name}`;
    return (
        <>
            <div>
                <img src={img} alt='search' />
            </div>

        </>
    );

}
export default Search_result;