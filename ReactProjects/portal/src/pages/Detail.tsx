import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { get4RandomProducts, getSingleProduct } from '../Api'
import { IProducts, Product } from '../models/IProducts'
import { toast } from 'react-toastify'
import { Rating } from 'react-simple-star-rating'
import ImageGallery from "react-image-gallery";
import ProductItem from '../components/ProductItem'
import NavBar from '../components/NavBar'
import Header from '../components/Header'

function Detail() {

    const { id } = useParams() //Sayfalar arası geçiş datanın taşınması UseParams
    const navigate = useNavigate()
    const [item, setItem] = useState<Product>()
    const [images, setImages] = useState<any[]>()
    const [proObj, setProObj] = useState<IProducts>()

    useEffect(() => {
        const idNum = Number(id)
        if (Number.isNaN(idNum) || idNum < 1) {
            navigate('/')
        } else {
            //servis ziyaretinde bulun
            toast('Yüklenior', {
                position: "top-center",
                theme: "light",
                hideProgressBar: true
            })
            getSingleProduct(idNum).then(res => {
                const dt = res.data
                setItem(dt)

                const arr = []

                for (let i = 0; i < dt.images.length; i++) {
                    const item = dt.images[i];
                    const image = {
                        original: item,
                        thumbnail: item
                    }
                    arr.push(image)
                }
                setImages(arr)

                toast.dismiss()
            }).catch(err => {
                toast.dismiss()
                toast.error('Service Error!')
            }).finally(() => {

            })
            console.log(idNum)
        }
    }, [])




    useEffect(() => {
        const skip = Math.floor(Math.random() * 96)
        get4RandomProducts(4, skip).then(res => {
            const dt = res.data
            setProObj(dt)
        })

    }, [])


    return (
        <>
        
            {item &&
                <>
                <Header/>
                <NavBar/>
                    <div className='row'>
                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-3'>
                            <h2>{item.title}</h2>
                            <div className="card ">
                                <div className="card-body">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            <span className="badge rounded-pill text-bg-success fs-5 p-2 mt-3 mb-3" >{item.price}₺</span>
                            <span className='float-end mt-3 mb-3' style={{ marginLeft: '1rem' }}><Rating initialValue={item.rating} readonly={true} size={22} showTooltip={true} /></span>
                            <div>
                                <span className="badge rounded-pill text-bg-secondary fs-6 p-2 mt-3 mb-3" style={{ marginRight: '1rem' }}>-% {item.discountPercentage}</span>
                                <span className="badge rounded-pill text-bg-secondary fs-6 p-2 mt-3 mb-3" style={{ marginRight: '1rem' }}>Stock: {item.stock}</span>
                                <span className="badge rounded-pill text-bg-secondary fs-6 p-2 mt-3 mb-3" style={{ marginRight: '1rem' }}>{item.brand}</span>
                                <span className="badge rounded-pill text-bg-secondary fs-6 p-2 mt-3 mb-3" style={{ marginRight: '1rem' }}>{item.category}</span>
                            </div>
                        </div>
                        <div className='col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 mb-3'>
                            {images &&
                                <ImageGallery
                                    items={images}
                                    showNav={false}
                                    showPlayButton={false}
                                    useBrowserFullscreen={false}
                                    autoPlay={true}
                                />
                            }
                        </div>
                    </div>

                    <h2>Sizin için seçtiklerimiz</h2>
                    <hr></hr>
                    <div className="row">
                        {proObj && proObj.products.map((item, index) =>
                            <ProductItem item={item} key={index} />
                        )}
                    </div>
                </>
            }
        </>
    )
}

export default Detail