
import React, { useEffect, useState } from 'react'



function Put() {
    var [data, setData] = useState([])
    var [name, setName] = useState("")
    var [id, setId] = useState("")
    var [chips, setChips] = useState("")
    var [classes, setClasses] = useState("")



    useEffect(() => {
        fetch('http://localhost:3004/students').then((res) => {
            res.json().then((result) => {
                console.log(result)
                setData(result)
            })
        }, [])
    })


function insertingdata(){

let items={id,name,chips,classes}
fetch(`http://localhost:3004/students`,{
    method: 'post',
    headers:{
        'Accept':'application/json',
        'Content-type':'application/json',
    },
    body:JSON.stringify(items)
}).then((res)=>{
    res.json().then((result)=>{
console.log(result)
    })
})

}

function editingdata(){
    alert(id+name+chips+classes)
    let items={id,name,chips,classes}
    fetch(`http://localhost:3004/students/${id}`,{
    method: 'PUT',
    headers:{
        'Accept':'application/json',
        'Content-type':'application/json',
    },
    body:JSON.stringify(items)
}).then((res)=>{
    res.json().then((result)=>{
console.log(result)
    })
})

}



function deletedata(id){
 

    fetch(`http://localhost:3004/students/${id}`,{
    method: 'delete'
    
})

}
function selectuser(id){
setId(data[id-1].id)
setName(data[id-1].name)
setChips(data[id-1].chips)
setClasses(data[id-1].classes)

}


    return (
        <>
            <h1>editing deleting  data</h1>
            <table border="1">
                <tr>
                    <td>ID</td>
                    <td>NAME</td>
                    <td>CHIPS</td>
                    <td>CLASS</td>
                    <td>Edit</td>
                    <td>Delet</td>


                </tr>
                {
                    data.map((students) => <tr>
                        <td>{students.id}</td>
                        <td>{students.name}</td>
                        <td>{students.chips}</td>
                        <td>{students.classes}</td>
                        <td><button onClick={()=>{selectuser(students.id)}}>edit</button></td>
                        <td><button onClick={()=>{deletedata(students.id)}}>Delete</button></td>
                    </tr>)
                }

            </table>
<br />

<br />
<h1>editing data data</h1>

<span>id</span>
<input type="number"   value={id} name="" onChange={(e)=>{setId(e.target.value)}}/>


<span>name</span>
<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />


<span>chips</span>
<input type="text" value={chips} onChange={(e)=>{setChips(e.target.value)}} />


<span>class</span>
<input type="text" value={classes} onChange={(e)=>{setClasses(e.target.value)}} />

<input type="submit" onClick={()=>{editingdata()}}/>



<br />
<h1>inserting data</h1>
<div>
<h1>id</h1>
<input type="number"   value={id} name="" onChange={(e)=>{setId(e.target.value)}}/>
</div>
<div>
<h1>name</h1>
<input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} />
</div>
<div>
<h1>chips</h1>
<input type="text" value={chips} onChange={(e)=>{setChips(e.target.value)}} />
</div>
<div>
<h1>class</h1>
<input type="text" value={classes} onChange={(e)=>{setClasses(e.target.value)}} />
</div>
<input type="submit" onClick={()=>{insertingdata()}}/>


        </>
    )
}

export default Put
