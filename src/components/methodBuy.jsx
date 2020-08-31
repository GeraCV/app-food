import React from 'react'
import '../styles/methodBuy.css'



const MethodBuy = () => {

  return (
    <>

      <div className="container-payment-method">
        <div className="container-select-method">
          <h3 className="title-method"> Deposito Bancario
        </h3>
          <h3 className="title-method"> PayPal o Tarjeta
         </h3>
        </div>
        <div className="container-method">
          <div className="primary-method">
            <button className="btn-select">
              Deposito Bancario
          </button>
            <p className="text-method"> El pago se realiza en nuestra moneda local. </p>
          </div>
          <div className="second-method">
            <button className="btn-select">
              Tarjeta de crédito o débito
          </button>
            <button className="btn-select">
              Pagar con Paypal
          </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default MethodBuy