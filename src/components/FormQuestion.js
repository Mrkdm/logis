import React,{useState} from 'react'
import axios from 'axios'
import Logo from '../assets/images/Logo-Logistica.png'
const FormQuestion = (props) => {

    const [idProp, setIdProp] = useState(null)
    const [email, setEmail] =useState(null);
    const [name, setName] = useState(null);
    const [message, setMessage] = useState("Hola, me interesa este inmueble que vi en LogisticaInmobiliaria y quiero que me contacten. Gracias.");
    const [phoneNumber, setPhoneNumber] = useState(null);


    const onChangeEmail = (e)=>{
        setEmail(e.target.value)
        console.log(e.target.value)
    }
    const onChangeName = (e)=>{
        setName(e.target.value)
    }
    const onChangeMessage = (e)=>{
        setMessage(e.target.value)
    }
    const onChangePhoneNumber = (e)=>{
        setPhoneNumber(e.target.value)
    }


    

    const onSubmitSendServer = async (e)=>{
        e.preventDefault()
        console.log(name)
        var user = {
            name,
            email,
            message,
            phoneNumber,
            idProp,
        }
        await axios.post('http://68.183.16.45/api/message/inmo', user).then((res)=>alert(res.data))
    }
    

    
    return (
        <div>
             <button type="button" onClick={()=>{setIdProp(props.img._id)}} className="btn btn-outline-dark btn-sm mt-4" data-toggle="modal"  data-target=".bd-example-modal-lg">Contactar</button>

<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Nuevo mensage</h5>
                <button type="button"  class="close" data-dismiss="modal" aria-label="Close">
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
                                    
                                    <input value={idProp} type="hidden" class="form-control" id="recipient-name" />
                                </div>
                                <div class="form-group">
                                    <label for="recipient-name" onChange={onChangeEmail} class="col-form-label">Email:</label>
                                    <input type="text" class="form-control" id="recipient-name" />
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div class="form-group">
                                            <label for="message-text" class="col-form-label">Nombre:</label>
                                            <input type="text" onChange={onChangeName} class="form-control" id="recipient-name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div class="form-group">
                                            <label for="message-text" class="col-form-label">Teléfono:</label>
                                            <input type="text" onChange={onChangePhoneNumber} class="form-control" id="recipient-name" />
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="message-text" class="col-form-label">Mensaje:</label>
                                    <textarea onChange={onChangeMessage} value="Hola, me interesa este inmueble que vi en LogisticaInmobiliaria y quiero que me contacten. Gracias." class="form-control" id="message-text"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal-footer">
            <a className="btn btn-secondary" href="tel:9983387357">9983387357</a>
                <button type="button" onClick={onSubmitSendServer} class="btn btn-primary">Enviar</button>
            </div>
        </div>
    </div>
</div>
        </div>
    )
}

export default FormQuestion
