import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import images from '../index.js'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'



//Import Components
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer.js'
import WhatsappBottom from '../../components/WhatsappBottom'

import FormConsult from '../../components/FormConsult';
const Home = () => {
    const [totalCasas, setTotalCasas] = useState([]);
    const [casasCancun, setCasasCancun] = useState([]);
    const [casasMerida, setCasasMerida] = useState([]);


    useEffect(() => {
        (async () => {
            await axios.get('//68.183.16.45/api/images/ubication/Cancun').then((res) => { setCasasCancun(res.data) }).catch((err) => console.log(err))
        })();
        (async () => {
            await axios.get('//68.183.16.45/api/images/ubication/Merida/').then((res) => { setCasasMerida(res.data) }).catch((err) => console.log(err))
        })();
        (async () => {
            await axios.get('//68.183.16.45/api/images/').then((res) => { setTotalCasas(res.data) }).catch((err) => console.log(err))
        })();
    }, [])
    

    return (
        <div>
            <Navbar />
            <section id="hero">
                <div className="container">
                    <div className="content-center">
                        <h1 className="mt-5">Estrena la casa quieres en el lugar que quieras</h1>

                        <a href="#section" className="btn btn-primary rounded-0 mt-4">Ver ahora <img src={images.arrowRight} className="ml-2" /></a>
                    </div>
                </div>
            </section>
            <section>
                <div className="container-fluid" >
                    <div className="content-center">
                    <h1 className="h3">Mira nuestras casas en Mérida, Yucatan y Cancun y elije una!</h1>
                     
                    </div>
                    <div id="section" className="row" style={{ marginTop: 140 }}>
                        <div className="col-md-6">
                            <div className="portfolio-container">
                                <div className="portfolio-details">
                                    <Link to="/casasCancun">
                                        <h2>Cancun</h2>
                                    </Link>

                                </div>
                                <AwesomeSlider>
                                    {
                                        casasCancun.map((imgs) => {

                                            return (

                                                <div key={imgs._id}>
                                                    <img src={imgs.url[0]} className="img-fluid" style={{ width: 1800, height: 410,objectFit:'cover' }} alt="Portfolio 01" />
                                                </div>


                                            )

                                        })
                                    }
                                </AwesomeSlider>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className="portfolio-container">
                                <div className="portfolio-details">
                                    <Link to="/casasMerida">
                                        <h2>Merida</h2>
                                    </Link>

                                </div>
                                <AwesomeSlider>
                                    {
                                        casasMerida.map((imgs) => {

                                            return (

                                                <div key={imgs._id}>
                                                    <img src={imgs.url[0]} className="img-fluid" style={{ width: 1800, height: 410,objectFit:'cover' }} alt="Portfolio 01" />
                                                </div>


                                            )

                                        })
                                    }
                                </AwesomeSlider>
                            </div>
                        </div>
                        <div className="col-md-6 content-center">
                            <div className="portfolio-container">
                                <div className="portfolio-details">
                                    <Link to="#">
                                        <h2>Todo</h2>
                                    </Link>

                                </div>
                                <AwesomeSlider>
                                    {
                                        totalCasas.map((imgs) => {

                                            return (

                                                <div key={imgs._id}>
                                                    <img src={imgs.url[0]} className="img-fluid" style={{ width: 1800, height: 410 ,objectFit:'cover'}} alt="Portfolio 01" />
                                                </div>


                                            )

                                        })
                                    }
                                </AwesomeSlider>
                            </div>
                        </div>
                    </div>
                 
                </div>
            </section>

<section>
<section id="hero2">
                <div className="container">
                    <div className="">
                        <h1 className="mt-5">Estas interesado en vender tu casa?</h1>

                        <p className="text-white">El equipo de Logisticainmobiliaria esta dispuesto a ayudarte en lo necesario para vender tu inmueble contactanos ahora! </p>
                    </div>
                </div>
                <div className="container ">
                   <FormConsult/>
                </div>
            </section>
</section>

            <section>
               




            </section>

            <Footer />
            <WhatsappBottom/>
        </div>


    )
}

export default Home
