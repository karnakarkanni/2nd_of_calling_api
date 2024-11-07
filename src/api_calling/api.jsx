import { useState } from "react"
function Api() {
    var [a, seta] = useState([])

    var n = (event) => {
        event.preventDefault()
        var p = event.target[0].value
        fetch(`https://restcountries.com/v3.1/name/${p}?fullText=true`).then((res) => {
            return res.json()
        }).then((data) => {
            seta(data)
            console.log(data)
        })
    }
    var res=a.map((val,ind)=>{
      return (<div >
        <h3>area:{val["area"]}</h3>
        <h3>capital:{val["capital"]}</h3>
        <h3>region:{val["region"]}</h3>
        <h3>population:{val["population"]}</h3>

        <img src={val["flags"]["png"]} alt="" />
    </div>)
        
    })

    return (<>
        <form action="" onSubmit={n}>
            <input type="text" name="user" />
            <input type="submit" value="register" />
        </form>
        {res}
        
    </>)
}
export default Api