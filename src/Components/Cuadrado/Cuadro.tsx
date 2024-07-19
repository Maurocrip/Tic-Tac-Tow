import './Cuadro.css'

function Cuadro({ children, clickEvent, index } : any) {

  function handClick(){
    clickEvent(index)
  }

  return (
    <>
      <div className='cuadrado'>
        <button className='botonCuadro' onClick={handClick}>{children}</button>
      </div>
    </>
  )
}
export default Cuadro
