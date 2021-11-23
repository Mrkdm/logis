import React,{useState, useEffect} from 'react'
import axios from 'axios'
import Navbar from '../../components/Navbar'

const CasasCancun = () => {
    const [casas, setCasas] = useState([])

    useEffect(()=>{
        (async()=>{
            axios.get('http://68.183.16.45/api/images/ubication/Cancun').then((res)=>setCasas(res.data)).catch((err)=>console.log(err))
        })();
    },[])
    return (
        <div>
              <Navbar/>
            <div className="container ">
              
                <div className="row">
                 {
                     casas.map((img)=>{
                         return(
                            <div className="col-lg-12 p-2 border m-4 bgLightGrey">
                            <div className="row">
                                <div className="col-lg-4 col-md-12">
                                    <img src={img.url[0]} className="img-fluid" alt="" />
                                </div>
                                <div className="col-lg-8">
                                   <p className="colorPink m-3">{img.title}</p> 
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
                                   </div>
                                </div>
                                
                            </div>
                        </div>
                         )
                     })
                 }
                </div>
            </div>
        </div>
    )
}

export default CasasCancun
