import React, { useEffect, useState } from "react";
import '../statewiseData/statedata.css';


const Statedata = () => {
    const [data, setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch('https://api.steinhq.com/v1/storages/5e732accb88d3d04ae0815ae/StateWiseHealthCapacity');
        const actualData = await res.json();
        console.log(actualData);
        setData(actualData);

    }

    useEffect(() => {
        getCovidData();

    }, [])
    return (

        <>

            <div className="container-fluid mt-5">
                <div className="main_heading">
                    <h1 className="mb-5 text-center"><span className="font-weight-bold ">INDIA </span>COVID-19 DASHBOARD</h1>
                </div>
                <div className="table-responsive">
                    <table className="table table-hover">
                        <thead className="thead-dark">
                            <tr>
                                <th>State</th>
                                <th>RuralHospitalsCount</th>
                                <th>RuralBeds</th>
                                <th>UrbanHospitals</th>
                                <th>UrbanBeds</th>
                                <th>TotalBedsCount</th>
                                <th>TotalHospitalsCount</th>
                                <th>LastUpdated</th>
                                <th>Source</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                data.map((crntval, index) => {
                                    return (

                                        <tr key={index}>
                                            <td>{crntval.State}</td>
                                            <td>{crntval.RuralHospitalsCount}</td>
                                            <td>{crntval.RuralBeds}</td>
                                            <td>{crntval.UrbanHospitals}</td>
                                            <td>{crntval.UrbanBeds}</td>
                                            <td>{crntval.TotalBedsCount}</td>
                                            <td>{crntval.TotalHospitalsCount}</td>
                                            <td>{crntval.LastUpdated}</td>
                                            <td>{crntval.Source}</td>
                                        </tr>
                                    );

                                })
                            }


                        </tbody>

                    </table>

                </div>
            </div>
        </>


    )
}
export default Statedata;
