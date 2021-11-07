import React,{useEffect,useState} from 'react'



function Getdata() {
var [data,setData]=useState([])
useEffect(()=>{
    fetch('http://localhost:3004/students').then((res)=>{
        res.json().then((result)=>{
            console.log(result)
            setData(result)
        })
    },[])
})

    return (
        <>
            <h1>getting students data</h1>
            <table border="1">
                <tr>
<td>ID</td>
<td>NAME</td>
<td>CHIPS</td>
<td>CLASS</td>


                </tr>
                {
                    data.map((students)=><tr>
                        <td>{students.id}</td>
                        <td>{students.name}</td>
                        <td>{students.chips}</td>
                        <td>{students.classes}</td>
                    </tr>)
                }
                
            </table>
        </>
    )
}

export default Getdata
