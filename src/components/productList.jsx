
import React, { useState, useEffect } from 'react';
import ProductItem from './productitem';

import waffle from '../assets/image-waffle-desktop.jpg'
import bean from '../assets/image-creme-brulee-desktop.jpg'
import macron from '../assets/image-macaron-desktop.jpg'
import thiramiisu from '../assets/image-tiramisu-desktop.jpg'
import bakalava from '../assets/image-baklava-desktop.jpg'
import pie from '../assets/image-meringue-desktop.jpg'
import redvelvet from '../assets/image-cake-desktop.jpg'
import brownie from '../assets/image-brownie-desktop.jpg'
import panna from '../assets/image-panna-cotta-desktop.jpg'


const ProductList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Waffle with Berries",
      category: "Waffle",
      price: 6.50,
      imageUrl: waffle,
      count :1
    },
    {
      id: 2,
      name: "Vanilla Bean Crème Brûlée",
      category: "Crème Brûlée",
      price: 7.00,
      imageUrl: bean,
      count :1
    },
    {
      id: 3,
      name: "Macaron Mix of Five",
      category: "Macaron",
      price: 8.00,
      imageUrl: macron,
      count :1
    },
    {
      id: 4,
      name: "Classic Tiramisu",
      category: "Tiramisu",
      price: 5.50,
      imageUrl: thiramiisu,
      count :1
    },
    {
      id: 5,
      name: "Pistachio Baklava",
      category: "Baklava",
      price: 4.00,
      imageUrl: bakalava,
      count :1
    },
    {
      id: 6,
      name: "Lemon Meringue Pie",
      category: "Pie",
      price: 5.00,
      imageUrl: pie,
      count :1
    },
    {
      id: 7,
      name: "Red Velvet Cake",
      category: "Cake",
      price: 4.50,
      imageUrl: redvelvet,
      count :1
    },
    {
      id: 8,
      name: "Salted Caramel Brownie",
      category: "Brownie",
      price: 5.50,
      imageUrl: brownie,
      count :1
    },
    {
      id: 9,
      name: "Vanilla Panna Cotta",
      category: "Panna Cotta",
      price: 6.50,
      imageUrl: panna,
      count :1
    }
  ]);
  const [cart, setCart]=useState([])
console.log('cart',cart)

  const setCount = (product,value) => {
     if(product.count == 1 && value == "-") return;
     product.count = (value == "+") ? product.count + 1 : product.count - 1;
     let filteredCart = cart.filter(s=>s.id != product.id)
     setCart([...filteredCart,product]);
    };


  return (
    <div className=" m-5 product-list row">
        <div className='products col-sm-12 col-md-8'>
      <h2 className='fw-bold'>Desserts</h2>
      <ul className='row '>
        {products.map((product) => (
          <ProductItem setCount={(id,value)=>setCount(id,value)} key={product.id} product={product} setCart={(data)=>setCart([...cart,data])} cart={cart} />
        ))}
      </ul>
      </div>
      <div className='card_detail col-sm-12 col-md-4  bg-light p-3 rounded'>
        <p className=' cart_text fw-bold text-capitalize'>your cart ({cart.length})</p>
        {cart.length == 0 &&
        <div className='text-center'>
        <svg xmlns="http://www.w3.org/2000/svg" width="128" height="128" fill="none" viewBox="0 0 128 128"><path fill="#260F08" d="M8.436 110.406c0 1.061 4.636 2.079 12.887 2.829 8.252.75 19.444 1.171 31.113 1.171 11.67 0 22.861-.421 31.113-1.171 8.251-.75 12.887-1.768 12.887-2.829 0-1.061-4.636-2.078-12.887-2.828-8.252-.75-19.443-1.172-31.113-1.172-11.67 0-22.861.422-31.113 1.172-8.251.75-12.887 1.767-12.887 2.828Z" opacity=".15"/><path fill="#87635A" d="m119.983 24.22-47.147 5.76 4.32 35.36 44.773-5.467a2.377 2.377 0 0 0 2.017-1.734c.083-.304.104-.62.063-.933l-4.026-32.986Z"/><path fill="#AD8A85" d="m74.561 44.142 47.147-5.754 1.435 11.778-47.142 5.758-1.44-11.782Z"/><path fill="#CAAFA7" d="M85.636 36.78a2.4 2.4 0 0 0-2.667-2.054 2.375 2.375 0 0 0-2.053 2.667l.293 2.347a3.574 3.574 0 0 1-7.066.88l-1.307-10.667 14.48-16.88c19.253-.693 34.133 3.6 35.013 10.8l1.28 10.533a1.172 1.172 0 0 1-1.333 1.307 4.696 4.696 0 0 1-3.787-4.08 2.378 2.378 0 1 0-4.72.587l.294 2.346a2.389 2.389 0 0 1-.484 1.755 2.387 2.387 0 0 1-1.583.899 2.383 2.383 0 0 1-1.755-.484 2.378 2.378 0 0 1-.898-1.583 2.371 2.371 0 0 0-1.716-2.008 2.374 2.374 0 0 0-2.511.817 2.374 2.374 0 0 0-.493 1.751l.293 2.373a4.753 4.753 0 0 1-7.652 4.317 4.755 4.755 0 0 1-1.788-3.17l-.427-3.547a2.346 2.346 0 0 0-2.666-2.053 2.4 2.4 0 0 0-2.08 2.667l.16 1.173a2.378 2.378 0 1 1-4.72.587l-.107-1.28Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".974" d="m81.076 28.966 34.187-4.16"/><path fill="#87635A" d="M7.45 51.793c-.96 8.48 16.746 17.44 39.466 19.947 22.72 2.506 42.08-2.16 43.04-10.667l-3.947 35.493c-.96 8.48-20.24 13.334-43.04 10.667S2.463 95.74 3.423 87.18l4.026-35.387Z"/><path fill="#AD8A85" d="M5.823 65.953c-.96 8.453 16.746 17.44 39.573 20.027 22.827 2.586 42.053-2.187 43.013-10.667L87.076 87.1c-.96 8.48-20.24 13.333-43.04 10.666C21.236 95.1 3.53 86.22 4.49 77.74l1.334-11.787Z"/><path fill="#CAAFA7" d="M60.836 42.78a119.963 119.963 0 0 0-10.347-1.627c-24-2.667-44.453 1.893-45.333 10.373l-2.133 18.88a3.556 3.556 0 1 0 7.066.8 3.574 3.574 0 1 1 7.094.8l-.8 7.094a5.93 5.93 0 1 0 11.786 1.333 3.556 3.556 0 0 1 7.067.8l-.267 2.347a3.573 3.573 0 0 0 7.094.826l.133-1.2a5.932 5.932 0 1 1 11.787 1.36l-.4 3.52a3.573 3.573 0 0 0 7.093.827l.933-8.267a1.174 1.174 0 0 1 1.307-.906 1.146 1.146 0 0 1 1.04 1.306 5.947 5.947 0 0 0 11.813 1.334l.534-4.72a3.556 3.556 0 0 1 7.066.8 3.573 3.573 0 0 0 7.094.826l1.786-15.546a2.373 2.373 0 0 0-2.08-2.667L44.143 55.74l16.693-12.96Z"/><path fill="#87635A" d="m59.156 57.66 1.68-14.88-16.827 13.173 15.147 1.707Z"/><path stroke="#fff" stroke-linecap="round" stroke-linejoin="round" stroke-width=".974" d="M9.796 52.06c-.667 5.866 16.24 12.586 37.733 15.04 14.774 1.68 27.867.906 34.854-1.654"/></svg>
        <p className='text-center mt-3'>your added item will appear here</p>
        </div>}
        {(cart.length > 0) && 
        <>
        <div className='cart_detail_items overflow-auto'>
         {cart.map((item)=>
          <div className='bottom_border text-dark d-flex justify-content-between align-items-center'>
            <div>
            <p className='fw-bold text-capitalize mb-0'>{item.name}</p>
            <div className='d-flex gap-3'>
              <p className='count fw-bold mb-0'>{item.count}x</p>
               <p className='mb-0 gray_color'>Rs{item.price}</p>
            </div>
            </div>
            <div className='mb-1' onClick={()=>setCart(cart.filter(s=>s.id != item.id))}>
            <svg xmlns="http://www.w3.org/2000/svg" with="20" height="20" viewBox="0 0 512 512"><path fill="#a1aea1" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z"/></svg>            </div>
            </div>
        )}
         </div>
         <div className='mt-2 border-light border-bottom border-2 text-dark d-flex justify-content-between align-items-center'>
         <p className='mb-0 text-capitalize'>order total</p>
         <p className='mb-0 fw-bold text-dark fs-3'>Rs{cart.reduce((a,b)=>a+b.price*b.count,0)}</p>
          </div>

          <div className= ' d-flex justify-content-center align-items-center text-center mt-3 order_button fw-bold rounded-pill'>
           <p className='mb-0'  data-bs-toggle="modal" data-bs-target="#exampleModal">
            Confirm Order
            </p>
          </div>
         </>

            }
        </div>
        


<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      {/* <div class="modal-header">
        <br/><h1 class="modal-title fs-5" id="exampleModalLabel">Order Confirmed</h1>
      </div> */}
      <div class="modal-body">
        <div className='container'>
          <div className='d-flex justify-content-start mb-2'>
          <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 512 512"><path fill="#15c015" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
          </div>
          <div className='row'>
          <p class="modal-title text-dark fw-bold fs-5 ">Order Confirmed</p>
          <p >we hope you enjoy your food</p>
          </div>
        {cart.map((product)=>
        <div className=" bg-light text-center row border-light border-bottom border-2">
          <div className="col-3 d-flex justify-content-center align-items-center">
          <img src={product.imageUrl} className='h-75 w-75 rounded' alt="..."/>
            </div>
            <div className='col-6 d-flex justify-content-start align-items-center'>
            <div className='text-dark d-flex justify-content-between align-items-center'>
            <div>
            <p className='fw-bold text-capitalize mb-0'>{product.name}</p>
            <div className='d-flex gap-3'>
              <p className='count fw-bold mb-0'>{product.count}x</p> <p className='mb-0'>Rs{product.price}</p>
            </div>
            </div>
            </div>
              </div>
              <div className='col-3 d-flex justify-content-center align-items-center'>
              <p className='mb-0'>Rs{product.price}</p>
                </div>
          </div>
          )}
                  <div className=" order_total bg-light text-center row border-light border-bottom border-2">
                    <div className='col-9 d-flex justify-content-start align-items-center'>
                      <p className='ms-2 mb-0 text-dark fw-bold'>Order Total</p>
                      </div>
                   <div className='col-3 text-dark fw-bold d-flex justify-content-center align-items-center'>
                    Rs{cart.reduce((a,b)=>a+b.price*b.count,0)}
                    </div>
                    </div>

          </div>
      </div>
      <div class="container mb-2">
      <div className= ' d-flex justify-content-center align-items-center text-center mt-3 order_button fw-bold rounded-pill'>
           <p className='mb-0'  data-bs-dismiss="modal">
           Strat New Order
            </p>
          </div>
      </div>
    </div>
  </div>
</div>
      </div>
  );
};

export default ProductList;
