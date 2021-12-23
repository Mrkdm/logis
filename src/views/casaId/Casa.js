import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import axios from 'axios'
const CasaId = () => {
    const { id } = useParams();

    const [casas, setCasa] = useState(null);
    const [urls, setUrls] = useState([])

    useEffect(() => {
        (async () => {
            await axios.get(`http://68.183.16.45/api/images/${id}/`).then((res) => {
                setCasa(res.data)
                setUrls(res.data.url)
            }).catch((err) => alert(err))
        })();
    }, [])
    console.log(urls)
    return (
        <div>
            <Navbar />

            <div className="container">
                <div className="row">
                    {casas ?
                        <div className="col-lg-10 border" style={{ marginTop: 60 }}>
                            <AwesomeSlider
                                bullets={false}
                            >
                                {
                                    casas.url.map((imgs) => {
                                        return (

                                            <div>
                                                <img className="img-fluid" src={imgs} />

                                            </div>
                                        )
                                    })
                                }
                            </AwesomeSlider>
                            <div className="m-4">
                                <h1 className="h4">{casas.title}</h1>
                                <h4 className="text-muted">{casas.typeOperation}</h4>
                                <div className="border-bottom"><p><i className="fas fa-bed m-3"></i>{casas.rooms} <span className="m-5 colorBlue">Recamaras</span> </p></div>
                                <div class="border-bottom"><p><i className="fas fa-bath m-3"></i> {casas.bathRooms}<span className="m-5 colorBlue">Baños</span>  </p></div>
                                <div class="border-bottom"><p><i className="fas fa-home m-3"></i>  {casas.mtsConst} <span className="m-3 colorBlue">Metros de construcción</span> </p></div>
                                <div class="border-bottom"><p><i className="fas fa-car m-3"></i>  {casas.parking} <span className="m-5 colorBlue">Estacionamientos</span>  </p> </div>
                            </div>
                            <div className="m-3">
                                <h3>Descripción</h3>
                                <p>{casas.description}</p>
                                <h3>Para mas información</h3>
                                <a href="tel:9983387357">9983387357</a>
                                <a class="" href="mailto:ventas@logisticainmobiliaria.mx"> <i class="far fa-envelope m-2"></i>  ventas@logisticainmobiliaria.mx</a>
                            </div>
                        </div> :
                        <div className="content-center mt-6">
                            <div className="loader"></div>
                        </div>

                    }
                </div>
            </div>
            <Footer/>
            <div class="fixed-bottom "><a href="https://api.whatsapp.com/send?phone=5219982323301"><i class="fab fa-whatsapp" style={{fontSize: 55, float: 'right', margin: 30, cursor: 'pointer', color: '#25D366'}}></i></a></div>
        </div>
    )
}

export default CasaId
