import React, { useState } from 'react'

const Form = () => {
    //state variabls
    const [fname, setFName] = useState("")
    const [lname, setLName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [image, setImage] = useState("")

    let [userData, setUserData] = useState([])

    const createUser = (e) => {
        e.preventDefault();
        let newUser = { fname, lname, email, password, image };
        console.log("Welcome", newUser);
        setUserData ([...userData, newUser])
        
    }
    return (
        <div>
            <form onSubmit={createUser}>
                <div className='form-group'>
                    <label>FirstName: </label>
                    <input type="text" className='form-control' onChange={(e) => setFName(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Last Name: </label>
                    <input type="text" className='form-control' onChange={(e) => setLName(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Email Address: </label>
                    <input type="text" className='form-control' onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Password: </label>
                    <input type="password" className='form-control' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Confirm Password: </label>
                    <input type="password" className='form-control' onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div className='form-group'>
                    <label>Image: </label>
                    <input type='text' className='form-control' onChange={(e) => setImage(e.target.value)} />
                </div>
                <button className='btn btn-outline-success mt-2' type="submit" >Button</button>
            </form>
            <hr />
            <h3>Your Form Data</h3>
            <div>
                {
                    userData.map((user, i) => {
                        return (
                            <div key={i}>
                                <p>Name:{user.fname}</p>
                                <p>Last Name:{user.lname}</p>
                                <p>Email:{user.email}</p>
                                <img src={user.image} alt="user pic" height= "200px"/>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )


}
export default Form;