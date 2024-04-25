import React, { Component} from "react";
import '../index.css';



export default class Contacto extends Component {
    
  render() {
    
    return (
      
        <header class="fondoy fondoy-wrap p-5 d-flex">
      <div class="container d-flex text-center rounded-md  fondox mt-5 mx-5 my-5" Style={{ fontFamily: "Raleway,bold" }} id="card_sesion">
        <div class="section-title mt-5  ">
        
          <p class=" mt-2 mx-2 my-2"  
           style={{
            color: '#056183',
            fontWeight: 'bold',
            textAlign: 'justify',
          }} >
            ¡Si tiene novedad respecto al reporte tanto académico como convivencial, por favor enviar tu mensaje por este medio.!
          </p>

      
        </div>

        <div class="row " data-aos="fade-in">
     

          <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch ">
            <form
              action="https://formsubmit.co/paolapacheco.moreno@gmail.com"
              class="php-email-form"
              method="POST"
            >
              <div class="row section-title  text-center mt-2 ">
                <div class="form-group col-md-6">
                  <label Style={" color:  #056183"} for="name">
                    Nombre
                  </label>
                  <input
                    type="text"
                    name="name"
                    class="form-control img-thumbnail m-5 rounded-md"
                    placeholder="Ingrese nombre"
                    id="name"
                    required
                  />
                </div>
                <div class="form-group col-md-6">
                  <label Style={" color:  #056183"} for="name">
                    Email
                  </label>
                  <input
                    type="email"
                    class="form-control img-thumbnail m-5 rounded-md"
                    name="email"
                    id="email"
                    placeholder="Ingrese su email"
                    required
                  />
                </div>
              </div>
              <div class="form-group section-title  text-center mt-5 ">  
                <label Style={" color:  #056183"} for="name">
                  Asunto
                </label>
                <input
                  type="text"
                  class="form-control img-thumbnail m-5 rounded-md"
                  placeholder="Ingrese su asunto"
                  name="subject"
                  id="subject"
                  required
                />
              </div>
              <div class="form-group section-title  text-center mt-5 mx-5 my-5">
                <div Style={" color:  #056183"} for="name" class=" mt-2 mx-2 my-2">
                  Mensaje
                </div>
                <textarea
                  class=" textarea img-thumbnail rounded-md mt-2 mx-2 my-2"
                  name="message"
                  placeholder="Ingrese descripción del mensaje"
                  rows="10"
                  required
                  
                ></textarea>
              </div>
              <div class="text-center ">
              
                <button  classNames="img-thumbnail bg-white text-white rounded-md hover:bg-green-600" type="submit " 
                 style={{
                    color: '#056183',
                    fontWeight: 'bold',
                    border: '2px solid #056183',
                    padding: '5px',
                    borderRadius: '5px',
                    display: 'inline-block',
                  }}>
                  Enviar Mensaje
                </button>

                <p   class=" mt-2 mx-2 my-2"  
                style={{
                    color: '#056183',
                    fontWeight: 'bold',
                
                  }}>
                    GRACIAS POR CONTACTARNOS .</p>
              </div>
            </form>
         
          </div>
        </div>
       
      </div>

      <a  classNames="mt-2 mx-2 my-2 " type="submit  " href = "http://localhost:3001/home"
      style={{
        color: '#4c0546',
        fontWeight: 'bold',
        border: '2px solid #4c0546',
        padding: '2px',
        borderRadius: '5px',
        display: 'inline-block',
  
      }} >
                  Regresar
                </a>
                
      
      </header>
      
    
    )
    ;
   
  }

}
