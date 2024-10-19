//rafce
import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchAllProducts } from '../redux/slices/productSlice'

const Home = () => {
  const dispatch = useDispatch()
  const {allProducts,loading,error} = useSelector(state=>state.productReducer)
  // console.log(allProducts,loading,error);
  const [currentPage,setCurrentPage] = useState(1)
  const productPerPage = 8
  const totalPage = Math.ceil(allProducts?.length/productPerPage)
  const currentPageLastProductIndex = currentPage * productPerPage
  const currentPageFirstProductIndex = currentPageLastProductIndex - productPerPage
  const visibleProductCards = allProducts?.slice(currentPageFirstProductIndex,currentPageLastProductIndex)

  useEffect(()=>{
    dispatch(fetchAllProducts())
  },[])

  const naviagteToNextPage = ()=>{
    if(currentPage!=totalPage){
      setCurrentPage(currentPage+1)
    }
  }

  const naviagteToPrevPage = ()=>{
    if(currentPage!=1){
      setCurrentPage(currentPage-1)
    }
  }

  return (
    <>
        <Header insideHome={true}/>
        <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
           { 
            loading ?
              <div className='flex justify-center items-center my-5 text-lg'>
                <img width={'70px'} height={'70px'} className='me-2' src="https://www.superiorlawncareusa.com/wp-content/uploads/2020/05/loading-gif-png-5.gif" alt="loading" /> Loading ...
              </div>
            :
            <>
              <div className="grid grid-cols-4 gap-4 ">
                 {
                  allProducts?.length>0 ?
                    visibleProductCards?.map(product=>(
                      <div key={product?.id} className="rounded border p-2 shadow">
                        <img width={'100%'} height={'200px'} src={product?.thumbnail} alt="" />
                        <div className="text-center">
                          <h3 className='text-xl font-bold'>{product?.title}</h3>
                          <Link className='bg-violet-500 rounded p-1 mt-3 text-white inline-block' to={`${product?.id}/view`}>View More...</Link>
                        </div>
                      </div>
                    ))
                    :
                    <div className='flex font-bold justify-center items-center text-red-600 my-5 text-lg'>
                      Product Not found!!!
                    </div>
                 }
              </div>
              <div className="text-center text-2xl font-bold mt-20">
                <span onClick={naviagteToPrevPage} className='cursor-pointer'> <i className="fa-solid fa-backward me-5"></i></span>
                <span> {currentPage} of {totalPage} </span>
                <span onClick={naviagteToNextPage} className='cursor-pointer'> <i className="fa-solid fa-forward ms-5"></i></span>
              </div>
            </>
            }
        </div>
    </>
  )
}

export default Home