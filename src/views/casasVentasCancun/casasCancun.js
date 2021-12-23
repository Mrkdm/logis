import React, { useState, useEffect } from 'react'
import {  useNavigate } from 'react-router-dom'
import Logo from '../../assets/images/Logo-Logistica.png'

import axios from 'axios'
import Navbar from '../../components/Navbar'



const CasasMerida = () => {

    const navigate = useNavigate()
    const [casas, setCasas] = useState([])
    useEffect(() => {
        (async () => {
           await axios.get('http://68.183.16.45/api/images/ubication/Cancun').then((res) => setCasas(res.data)).catch((err) => console.log(err))
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
                                                <div className="col-lg-3 col-sm-6">
                                                    <p>Quintana Roo</p>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-2">


                                                    <button type="button" className="btn btn-outline-dark btn-sm mt-4" data-toggle="modal" data-target=".bd-example-modal-lg">Contactar</button>

                                                    <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                                                        <div class="modal-dialog modal-lg">
                                                            <div class="modal-content">
                                                                <div class="modal-header">
                                                                    <h5 class="modal-title" id="exampleModalLabel">Nuevo mensage</h5>
                                                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                                                        <span aria-hidden="true">&times;</span>
                                                                    </button>
                                                                </div>
                                                                <div class="modal-body">
                                                                    <div className="container">
                                                                        <div className="row">
                                                                            <div className="col-lg-6">
                                                                                <h5>Contactar</h5>
                                                                                <img src={Logo} style={{ width: 270, objectFit: 'cover' }} alt="" />
                                                                            </div>
                                                                            <div className="col-lg-6">
                                                                                <form>
                                                                                    <div class="form-group">
                                                                                        <label for="recipient-name" class="col-form-label">Email:</label>
                                                                                        <input type="text" class="form-control" id="recipient-name" />
                                                                                    </div>
                                                                                    <div className="row">
                                                                                        <div className="col-lg-6">
                                                                                            <div class="form-group">
                                                                                                <label for="message-text" class="col-form-label">Nombre:</label>
                                                                                                <input type="text" class="form-control" id="recipient-name" />
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="col-lg-6">
                                                                                            <div class="form-group">
                                                                                                <label for="message-text" class="col-form-label">Teléfono:</label>
                                                                                                <input type="text" class="form-control" id="recipient-name" />
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="form-group">
                                                                                        <label for="message-text" class="col-form-label">Mensaje:</label>
                                                                                        <textarea value="Hola, me interesa este inmueble que vi en LogisticaInmobiliaria y quiero que me contacten. Gracias." class="form-control" id="message-text"></textarea>
                                                                                    </div>
                                                                                </form>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="modal-footer">
                                                                <a className="btn btn-secondary" href="tel:9983387357">9983387357</a>
                                                                    <button type="button" onClick={axios.post('http://68.183.16.45/api/message', 
                                                                )} class="btn btn-primary">Send message</button>
                                                             
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>



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
            <div class="fixed-bottom "><a href="https://api.whatsapp.com/send?phone=5219982323301"><i class="fab fa-whatsapp" style={{fontSize: 55, float: 'right', margin: 30, cursor: 'pointer', color: '#25D366'}}></i></a></div>
        </div>
    )
}

export default CasasMerida
