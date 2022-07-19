import React from 'react';
import Card from './Card';
import cardData from './CardData';
const Service = () => {
    return (
        <div className='my-5'>
            <h1 className='text-center'>Our Services</h1>
            <div className="container-fluid mb-5 ">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className='row gy-4'>
                            {
                                cardData.map((value, index) => {
                                    return (
                                        <Card
                                            key={index}
                                            imgsrc={value.imgsrc}
                                            title={value.title}
                                        />
                                    );

                                })
                            }

                        </div>

                    </div>
                </div>
            </div>


        </div>
    );

}

export default Service;