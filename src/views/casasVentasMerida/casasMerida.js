import React, { useState, useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'


import axios from 'axios'
import Navbar from '../../components/Navbar'
import FormQuestion from '../../components/FormQuestion'
import WhatsappBottom from '../../components/WhatsappBottom'



const CasasMerida = () => {

    const navigate = useNavigate()
    const [casas, setCasas] = useState([])
 
    useEffect(() => {
        (async () => {
           await axios.get('http://68.183.16.45/api/images/ubication/Merida').then((res) => setCasas(res.data)).catch((err) => console.log(err))
        })();
    }, [])

    return (
        <div>
            <Navbar />
            <div className="container ">

                <div className="row">
                    {
                        casas.map((img) => {
                            
                            return (
                                <div className="col-lg-12 p-2 border m-4 bgLightGrey">
                                    <div className="row">
                                        <div className="col-lg-4 col-md-12">
                                            <img src={img.url[0]} className="img-fluid" alt="" />
                                        </div>
                                        <div className="col-lg-8">

                                            <p style={{cursor:'pointer'}} onClick={()=>{navigate( `/casa/${img._id}`)} }className="colorPink m-3">{img.title}</p>
                                            <hr />
                                            <div className="row">
                                                <div className="col-lg-2 col-sm-6">
                                                    <p>
                                                        <i class="fas fa-bed m-3"></i>
                                                        {img.rooms}
                                                    </p>
                                                </div>
                                                <div className="col-lg-2 col-sm-6">
                                                    <p>
                                                        <i class="fas fa-bath m-3"></i>
                                                        {img.bathRooms}
                                                    </p>
                                                </div>
                                                <div className="col-lg-4 col-sm-6">
                                                    <p>
                                                        <i class="fas fa-home m-3"></i>
                                                        {img.mtsTerr}m²
                                                    </p>
                                                </div>

                                            </div>
                                            <div className="row">
                                                <div className="col-lg-2 col-sm-6">
                                                    <p>{img.ubication}</p>
                                                </div>
                                                <div className="col-lg-1">
                                                    <p>|</p>
                                                </div>
                                                <div className="col-lg-2 col-sm-6">
                                                    <p>Yucatan</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-2">


                                                   <FormQuestion data={img}/>



                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <WhatsappBottom/>
        </div>
    )
}

export default CasasMerida
