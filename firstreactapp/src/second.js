// import { useState } from "react"
import './second.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
export default function Second() {


    
    // const productData = [{ id: 1, name: 'Dinesh' }, { id: 2, name: 'Hemanth' }, { id: 3, name: 'Prasad' }]

    // const [data2, setData2] = useState([]);

    // const btnResult = (val) => {
    //     alert(val);
    //     const datavalue = productData.filter(item => item.id === val);
    //     setData2(datavalue[0])
    //     console.log(datavalue);
    //   }

    return (
        <>

            {/* <h1>Printing the Name from array of objets using buttons</h1>
            
            <input type="button" value="Button1" onClick={() => btnResult(1)} />
            <input type="button" value="Button2" onClick={() => btnResult(2)} />
            <input type="button" value="Button3" onClick={() => btnResult(3)} />

           <h1>{data2.name}</h1>  */}



            <div id='reg'>
                <form className='for' action="#">
                    <h1 id="title" align="center">Registration Form</h1>
                    <label id="fn">First Name: </label>
                    <input id='in3' type="text" name="firstname" size="15" required /><br/><br/>

                    <label id="ln">Last name: </label>
                    <input id='in4' type="text" name="lastname" size="15" required /><br/><br/>

                    <label id="em">Email:</label>
                    <input id='in5' type="text" name="emailid" size="15" required /><br/><br/>

                    <label id="pn">Mobile No:</label>
                    <input id='in6' type="text" name="mobileno" size="15" required /><br/><br/>



                    <label id="gen">Gender:</label>
                    <span id='in7'>MALE</span><input type="radio" name="g" value="m" />
                    <span id='in7'>Female</span><input type="radio" name="g" value="f" /><br/><br/>

                    <label id="qf">city:</label>
                    <select id='in8'>
                        <option value="select">Select</option>
                        <option value="vizag">Vizag</option>
                        <option value="hyd">Hyderabad</option>
                        <option value="blr">Chennai</option>
                        <option value="chn">Banglore</option>
                        <option value="pune">Mumbai</option>
                        <option value="mi">Pune</option>
                    </select><br></br><br></br>



                    <button className='button' type="submit" value="submit">Submit</button>
                </form>
            </div>
        </>
    )



} 