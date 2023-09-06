import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getSingleProduct } from '../Api'
import { Product } from '../models/IProducts'
import { toast } from 'react-toastify'
import { Rating } from 'react-simple-star-rating'

function Detail() {

    const { id } = useParams()
    const navigate = useNavigate()
    const [item, setItem] = useState<Product>()

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
                console.log(dt)
                setItem(dt)
                toast.dismiss()
            }).catch(err => {
                toast.dismiss()
                toast.error('Service Error!')
            }).finally(() => {

            })
            console.log(idNum)
        }
    }, [])

    return (
        <>
            {item &&
                <>
                    <div className='row'>
                        <div className='col-sm-6'>
                            <h2>{item.title}</h2>                           
                            <div className="card ">
                                <div className="card-body">
                                    <p>{item.description}</p>
                                </div>
                            </div>
                            <span className="badge rounded-pill text-bg-success fs-5 p-2 mt-3 mb-3" >{item.price}₺</span>
                            <span className='float-end mt-3 mb-3' style={{marginLeft:'1rem'}}><Rating initialValue={item.rating} readonly={true} size={22} showTooltip={true}/></span>
                            <div>
                            <span className="badge rounded-pill text-bg-secondary fs-6 p-2 mt-3 mb-3" style={{marginRight: '1rem'}}>-% {item.discountPercentage}</span>
                            <span className="badge rounded-pill text-bg-secondary fs-6 p-2 mt-3 mb-3" style={{marginRight: '1rem'}}>Stock: {item.stock}</span>
                            <span className="badge rounded-pill text-bg-secondary fs-6 p-2 mt-3 mb-3" style={{marginRight: '1rem'}}>{item.brand}</span>
                            <span className="badge rounded-pill text-bg-secondary fs-6 p-2 mt-3 mb-3" style={{marginRight: '1rem'}}>{item.category}</span>
                            </div>
                        </div>
                        <div className='col-sm-6'></div>
                    </div>
                </>
            }
        </>
    )
}

export default Detail