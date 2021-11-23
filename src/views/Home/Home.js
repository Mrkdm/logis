import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import images from '../index.js'
import AwesomeSlider from 'react-awesome-slider'
import 'react-awesome-slider/dist/styles.css'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer.js'
const Home = () => {
    const [totalCasas, setTotalCasas] = useState([]);
    const [casasCancun, setCasasCancun] = useState([]);
    const [casasMerida, setCasasMerida] = useState([]);

    const [email, setEmail] =useState(null);
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    useEffect(() => {
        (async () => {
            await axios.get('http://68.183.16.45/api/images/ubication/Cancun').then((res) => { setCasasCancun(res.data) }).catch((err) => console.log(err))
        })();
        (async () => {
            await axios.get('http://68.183.16.45/api/images/ubication/Merida/').then((res) => { setCasasMerida(res.data) }).catch((err) => console.log(err))
        })();
        (async () => {
            await axios.get('http://68.183.16.45/api/images/').then((res) => { setTotalCasas(res.data) }).catch((err) => console.log(err))
        })();
    }, [])
    

    const onChangeEmail = (e)=>{
        setEmail(e.target.value)
        console.log(e.target.value)
    }
    const onChangeName = (e)=>{
        setName(e.target.value)
    }
    const onChangeLastname = (e)=>{
        setLastname(e.target.value)
    }
    const onChangePhoneNumber = (e)=>{
        setPhoneNumber(e.target.value)
    }


    

    const onSubmitSendServer = async (e)=>{
        e.preventDefault()
        const formData = new FormData()
        formData.append('email',email)
        formData.append('name', name)
        formData.append('lastname', lastname)
        formData.append('phoneNumber', phoneNumber)
        await axios.post('http://68.183.16.45/api/message', formData).then((res)=>console.log(res))
    }
    return (
        <div>
            <Navbar />
            <section id="hero">
                <div className="container">
                    <div className="content-center">
                        <h1 className="mt-5">Estrena la casa quieres en el lugar que quieras</h1>

                        <a href="#section" className="btn btn-secondary rounded-0 mt-4">Explore now <img src={images.arrowRight} className="ml-2" /></a>
                    </div>
                </div>
            </section>
          
            <section>
                <div className="container-fluid" >
                    <div className="content-center">

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
                <div className="container ">
                    <div className="row">
                        <div className="col-md-6 mt-4">
                            <h3 className="text-dark">
                                Contactanos <b>Sin ningun compromiso</b>
                            </h3>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. At, hic fugit harum repellat libero earum odit perferendis delectus rerum vero cupiditate nesciunt dolores placeat aperiam optio alias excepturi reiciendis porro.
                            </p>
                        </div>
                        <div className="col-md-6 mt-4">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" onChange={onChangeName} className="form-control" placeholder="Nombre" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" onChange={onChangeLastname} className="form-control" placeholder="Apellido" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" onChange={onChangeEmail} className="form-control" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <input type="text" onChange={onChangePhoneNumber} className="form-control" placeholder="Numero telefonico (opcional)" />
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="form-group">
                                        <button onClick={onSubmitSendServer} className="btn btn-primary full-width">
                                            Enviar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>




            </section>

            <Footer />
            <div class="fixed-bottom "><a href="https://api.whatsapp.com/send?phone=5219982323301"><i class="fab fa-whatsapp" style={{fontSize: 55, float: 'right', margin: 30, cursor: 'pointer', color: '#25D366'}}></i></a></div>
        </div>


    )
}

export default Home
