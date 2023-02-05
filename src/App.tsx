import { useState } from 'react'
import productMobile from './assets/images/image-product-mobile.jpg'
import productDesktop from './assets/images/image-product-desktop.jpg'
import cart from './assets/images/icon-cart.svg'

function App() {
  return (
    <div className="flex justify-center items-center w-full mx-auto h-screen bg-cream">
      <div className="flex flex-col sm:flex-row items-center rounded-xl w-full max-w-[340px] sm:h-full sm:max-h-[450px] sm:max-w-[600px] bg-white">
        <img src={productMobile} className="sm:hidden h-auto w-full rounded-t-xl" alt="product-image" />
        <img src={productDesktop} className="hidden sm:block rounded-l-xl sm:h-full" alt="product-image" />
        <div className="flex flex-col sm:justify-between p-6 sm:p-8 gap-4 sm:h-full font-montserrat">
          <h4 className='uppercase text-xs text-dark-grayish-blue tracking-[0.5em]'>perfume</h4>
          <h1 className="text-[32px] font-bold font-fraunces leading-none text-very-dark-blue">Gabrielle Essence Eau De Parfum</h1>
          <p className='text-dark-grayish-blue text-sm leading-6'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>
          <div className='flex items-center gap-4'>
            <h2 className='text-[32px] font-bold text-dark-cyan font-fraunces'>$149.99</h2>
            <span className='text-xs line-through text-dark-grayish-blue'>$169.99</span>
          </div>
          <button className='flex items-center gap-4 justify-center bg-dark-cyan text-white text-sm font-bold w-full p-4 rounded-lg hover:bg-darker-cyan'>
            <img src={cart} alt="cart icon" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
