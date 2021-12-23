import React from 'react'

const whatsappBottom = () => {
    return (
        <div class="fixed-bottom  ">

            <a href="https://api.whatsapp.com/send?phone=5219982323301">
                <i class="fab fa-whatsapp"   style={{fontSize: 55, float: 'right', margin: 43, cursor: 'pointer', color: '#25D366'}}>
                    
                </i>

            </a>
            
            <div class="alert alert-dark"style={{ float: 'right', marginRight: -105,}} role="alert">
  Contacta un asesor
</div>
       </div>

    )
}

export default whatsappBottom
