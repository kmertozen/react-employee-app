import React, { useState, useEffect } from 'react'
import {Link } from "react-router-dom"
function Employeetbl() {
    const [employees, setEmployees] = useState({
        calisan: []

    })
    useEffect(() => {


        fetch('https://alerjify.com/api/employees')
            .then(res => {
                if (res.ok && res.status === 200) {

                    return res.json()
                }
            })
            .then(res => setEmployees(employees => ({ ...employees, calisan: res })))
            .catch(err => console.log(err))
    }, [])

    const puanla = (key) => {

        setEmployees(employees => ({

            ...employees,
            calisan: employees.calisan.map((employee, i) => {
                if (key === i) {
                    employee["puan"]++
                }
                return employee
            })

        }))

        setEmployees(employees => ({
            ...employees,
            calisan: [...employees.calisan].sort((a, b) => b.puan - a.puan),
        }))

    }


    const calisanlar = employees && employees.calisan.map((employee, key) =>
    (
        <tr key={key}>

            <th scope="row"><img src={employee.resim} alt={employee.ad} style={{ objectFit: "cover", maxHeight: "150px", width: "150px" }} /></th>
            <td style={{verticalAlign:"middle"}}>{employee.ad}</td>
            <td style={{verticalAlign:"middle"}}>{employee.soyad}</td>
            <td style={{verticalAlign:"middle"}}>{employee.gorev}</td>
            <td style={{verticalAlign:"middle"}}>{employee.puan}</td>
            <td style={{verticalAlign:"middle"}}><button className='btn btn-primary' onClick={() => puanla(key)} type='submit'>Oyla</button></td>
            <td style={{verticalAlign:"middle"}}><Link to={"/EmployeePage/"+employee.id}><button className='btn btn-primary' onClick={() => puanla(key)} type='submit'>Görüntüle</button></Link></td>
        </tr>


    ));

    return (
        <>
            <table className="table w-75 m-auto">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Ad</th>
                        <th scope="col">Soyad</th>
                        <th scope="col">Görev</th>
                        <th scope="col">Puanı</th>
                        <th scope="col">Oyla</th>
                        <th scope="col">Profil</th>
                    </tr>
                </thead>
                <tbody>
                    {calisanlar}

                </tbody>

            </table>
        </>
    )
}

export default Employeetbl