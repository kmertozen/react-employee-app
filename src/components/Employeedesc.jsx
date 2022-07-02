import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from "react-redux"
import { setEmployee } from "../store/site.js"


function Employeedesc() {

    const employee = useSelector(state => state.site.employee)
    const dispatch = useDispatch()

    console.log(employee)
    const { url } = useParams();
    useEffect(() => {
        fetch(`https://www.alerjify.com/api/employee/${url}`)
            .then(res => {
                if (res.ok && res.status === 200) return res.json()
            })
            .then(res => dispatch(setEmployee(res)))
            .catch(err => console.log(err))

    }, [url,dispatch])

    return (
        <>
            <div className='w-50 m-auto bg-light rounded'>
                {employee && Object.values(employee).map((employee, key) =>
                (
                    <div className='d-flex p-4' key={key}>
                        <div> <img src={employee.resim} alt={employee.ad} style={{ objectFit: "cover", maxHeight: "350px", width: "300px" }} /></div>
                        <div className='ml-4 flex-column'>
                            <h2 className='my-2'>{employee.ad} {employee.soyad}</h2>
                            <div className='my-2'><h6>Görevi:</h6> {employee.gorev}</div>
                            <div className='my-2'><h6>E-Posta:</h6> {employee.email}</div>
                            <div className='my-2'><h6>Adresi:</h6> {employee.adres}</div>
                            <div className='my-2'><h6>Telefon Numarası:</h6> {employee.telno}</div>
                            <div className='my-2'><h6>Maaş:</h6> {employee.maas}₺</div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Employeedesc