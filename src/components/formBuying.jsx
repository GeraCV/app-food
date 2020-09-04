import React from 'react'
import '../styles/formBuying.css'
import InputForm from './input'


const FormBuying = () => {

  const saveInformation = e => {

    e.preventDefault()
    const t = e.target

    const purchaseInformation = {
      name: t.name.value,
      email: t.email.value,
      delegation: t.delegation.value,
      colony: t.colony.value,
      street: t.street.value,
      interiorNumber: t.interiorNumber.value,
      exteriorNumber: t.exteriorNumber.value
    }

    setTimeout(() => {
      window.location.reload()
      window.location.href = "/"
    }, 3000);

    t.reset()
    const body = document.getElementById('body')
    const showMessage = document.createElement('div')
    const image = document.createElement('img')
    const text = document.createElement('p')
    showMessage.appendChild(image)
    showMessage.appendChild(text)
    text.innerHTML = '¡Tu compra se realizó satisfactoriamente.!'
    image.src = 'https://images.emojiterra.com/google/android-10/512px/1f60e.png'
    image.alt = 'Check'
    showMessage.classList.add('showMessage')
    image.classList.add('img-message')
    text.classList.add('text-message-buy')
    body.appendChild(showMessage)
  }

  return (
    <div className="container-form-buy">
      <h2 className="title-form"> Ingresa tu información </h2>
      <form className="form-buy"
        id="form"
        onSubmit={saveInformation}
      >
        <div className="c-i">
          <p className="text-form"> Ingresa tu nombre</p>
          <InputForm name={"name"} placeholder={"Nombre"} />
        </div>
        <div className="c-i">
          <p className="text-form"> Ingresa tu correo electrónico</p>
          <InputForm name={"email"} placeholder={"Correo electrónico"} />
        </div>
        <div className="c-i">
          <p className="text-form"> Ingresa tu delegación </p>
          <InputForm name={"delegation"} placeholder={"Delegación"} />
        </div>
        <div className="c-i">
          <p className="text-form"> Ingresa tu colonia</p>
          <InputForm name={"colony"} placeholder={"Colonia"} />
        </div>
        <div className="c-i">
          <p className="text-form"> Ingresa tu calle </p>
          <InputForm name={"street"} placeholder={"Calle"} />
        </div>
        <div className="c-i">
          <p className="text-form"> Ingresa tu número interior o lote</p>
          <InputForm name={"interiorNumber"} placeholder={"Número interior o lote"} />
        </div>
        <div className="c-i">
          <p className="text-form"> Ingresa tu número exterior o manzana </p>
          <InputForm name={"exteriorNumber"} placeholder={"Número exterior o manzana"} />
        </div>
        <div className="c-btn-send">
          <button type="submit" className="btn-send"> Confirmar pedido </button>
        </div>
      </form>

    </div>
  )
}

export default FormBuying