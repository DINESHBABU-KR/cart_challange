import React from 'react'
import addcart from '../assets/icon-add-to-cart.svg'

const ProductItem = ({setCount, product,setCart,cart}) => {
  return (
    <div class="card_body col-12 col-lg-4 col-md-6 col-sm-6 col-xl-3 ">
        <div className='position-relative'>
  <img src={product.imageUrl} className={`${(cart.filter((item)=>item.id===product.id).length > 0) && "cart_img"} card-img-top rounded`} alt="..."/>
   {
    cart.filter((item)=>item.id===product.id).length > 0 ?
    <>
    <div className={`add_cart d-flex justify-content-evenly align-items-center position-absolute top-100 start-50 translate-middle rounded-pill text-center shadow-lg`}>
    <div onClick={()=>setCount(product,"+")} className='mb-1' >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="#fff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM232 344l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"/></svg>
    {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg> */}
    </div>
    <p className='mb-0'>{product.count}</p>
    <div onClick={()=>setCount(product,"-")}  className='mb-1' >
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="#fff" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM184 232l144 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-144 0c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>
    {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg> */}
    </div>
      </div>
    </>
    :
    <>
    <div onClick={()=>setCart(product)} className={`add_cart d-flex justify-content-center align-items-center bg-light position-absolute top-100 start-50 translate-middle rounded-pill text-center shadow-lg`}>
      <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
      <p className='ms-2 fw-bold fs-6 mb-0'>Add to Cart</p>
      </div>
    </>
   }
      
    
   

    {/* <div className="flip-card">
	<div className="flip-card-inner">
  <div className="flip-card-front card_cart d-flex justify-content-center align-items-center bg-secondary text-dark rounded-pill text-center shadow-lg">
    <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
    <p className='ms-2 fw-bold fs-6 mb-0'>Add to Cart</p>
    </div>
		<div className="flip-card-back card_cart d-flex justify-content-evenly align-items-center bg-secondary text-dark rounded-pill text-center shadow-lg">
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/></svg>
    {product.count}
    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="2" fill="none" viewBox="0 0 10 2"><path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/></svg>
		</div>
	</div>
</div> */}

  </div>
  <div class="card-body">
  <p class="card-text mt-4 mb-0 fs-6 fw-light">{product.category}</p>
    <p class="fw-bold mb-1">{product.name}</p>
    <p className='fw-bold text-danger '>$ {product.price}</p>
  </div>
</div>
  );
};

export default ProductItem;