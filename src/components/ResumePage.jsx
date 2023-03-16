import React from 'react'
import Style from "./Resumepage.module.css"
const ResumePage = () => {
  return (
    <>
    <div className={Style.ressumepage}>
    
        <h1 id={Style.heading}>RESUME</h1>
        <div className={Style.firstdiv}>
            <p> Ravindra Deshmukh</p>
             <p>Mobile no: - 7038510366</p>
              <p>Mail id: -ravinbdeshmukh@gmail.com</p>
              </div>
              <h1> ● Technical Skills Earned </h1>
              <div className={Style.fristddiv}> 
              <p>● Languages and Protocols:</p> 
              <p>1)HTML 2)CSS 3)JAVASCRIPT 4)REACT
              </p>
              </div>
              <h1>  ● PROJECT</h1>
               <div className={Style.firstdiv}>
                <p> Language : HTML,CSS,JAVASCRIPT,REACT</p>
                 <p>1. JAVASCRIPT PROJECT</p>
                  <p> 1) Digital -clock 2)youtub project 3) color</p>
                  <p> 2.REACT PROJECT</p><p> 1) Gitub-card 2)CRUD project
                   </p></div>
                  <h1> ● Education Details </h1>
                  <div >  
                   <p> ● BCS from Pune university.</p>
                    <table className={Style.table}>
                        <thead>
                            <tbody>
                                <tr>
                                <th>Qualification</th>
                                <th>  Board/University</th>
                                <th>Year of passing</th>
                                <th> GRADE</th>
                                   </tr>
                                   <tr>
                                    <td>B.C.S</td>
                                    <td>     Pune University </td>
                                    <td>2019-2020</td>
                                    <td> 2nd Class</td>
                                   </tr>
                                   <tr>
                                    <td> H.S.C</td>
                                    <td>Maharashtra state Board</td>
                                    <td>2015-2016</td>
                                    <td>2nd Class</td>
                                   </tr>
                                   <tr>
                                    <td> S.S.C</td>
                                    <td>Maharashtra state Board</td>
                                    <td>2014-2015</td>
                                    <td> 1st Class</td>
                                   </tr>
                            </tbody>
                        </thead>
                    </table>
                   </div>
                     <h1>●hobbies</h1>  
                     <div className={Style.firstdiv}> 
                   <p> Acting, Reading, Singing ,Dancing.</p>
                   <p> 1. ACTING</p>
                  <p>  1) FILM -
                  * gharya
                  * Dadpan </p>
                   <p> 2)SERIAL</p>
                   <p> * DO babasaheb ambedkar (charector roll) </p>
                   <p> * swarajj janani jijamata (vyankoji raje) </p>
                    <h1>●Personal Details </h1>
                   <div className={Style.firstdiv}> <p> Nationality : Indian </p>
                   <p>  Marital Status : Single </p>
                    <p> Father Name : : Babasaheb Sitaram Deshmukh</p>
                   <p>  Languages Known : English, Hindi</p>
                     </div>
</div>

</div>
</>
  )
}

export default ResumePage;