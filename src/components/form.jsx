import React, { useState } from 'react'

const Form = () => {
    //state variabls
    const [fname, setFName] = useState("");
    const [fnameError, setFNameError] = useState("");

    const [lname, setLName] = useState("");
    const [lnameError, setLNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [image, setImage] = useState("");

    let [userData, setUserData] = useState([]);
    

    const createUser = (e) => {
        e.preventDefault();
        let newUser = { fname, lname, email, password, image };
        console.log("Welcome", newUser);
        setUserData ([...userData, newUser]);
    }

    const handleFname = (e) => {
        setFName(e.target.value);
        if(e.target.value.length < 1) {
            setFNameError("Input is required!");
        } else if(e.target.value.length < 3) {
            setFNameError("Must be 3 characters or longer!");
        } else {
            setFNameError("");
        }
    }
    const handleLname = (e) => {
        setLName(e.target.value);
        if(e.target.value.length < 1) {
            setLNameError("Input is required!");
        } else if(e.target.value.length < 3) {
            setLNameError("Must be 3 characters or longer!");
        } else {
            setLNameError("");
        }
    }
    const handleEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Input is required!");
        } else if(e.target.value.length < 3) {
            setEmailError("Must be 3 characters or longer!");
        } else {
            setEmailError("");
        }
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Input is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Must be 8 characters or longer!");
        } else {
            setPasswordError("");
        }
    }
    
    
    return (
        <div>
            <form onSubmit={createUser}>
                <div className='form-group'>
                    <label>FirstName: </label>
                    {/* <input type="text" className='form-control' onChange={(e) => setFName(e.target.value)} /> */}
                    <input type="text" className='form-control' onChange={handleFname} />
                    {fnameError ? <p style={{color: 'red'}}>{fnameError}</p>: ""}
                </div>
                <div className='form-group'>
                    <label>Last Name: </label>
                    {/* <input type="text" className='form-control' onChange={(e) => setLName(e.target.value)} /> */}
                    <input type="text" className='form-control' onChange={handleLname} />
                    {lnameError ? <p style={{color: 'red'}}>{lnameError}</p>: ""}
                </div>
                <div className='form-group'>
                    <label>Email Address: </label>
                    {/* <input type="text" className='form-control' onChange={(e) => setEmail(e.target.value)} /> */}
                    <input type="text" className='form-control' onChange={handleEmail} />
                    {emailError ? <p style={{color: 'red'}}>{emailError}</p>: ""}
                </div>
                <div className='form-group'>
                    <label>Password: </label>
                    {/* <input type="password" className='form-control' onChange={(e) => setPassword(e.target.value)} /> */}
                    <input type="password" className='form-control' onChange={handlePassword} />
                    {passwordError ? <p style={{color: 'red'}}>{passwordError}</p>: ""}
                </div>
                <div className='form-group'>
                    <label>Confirm Password: </label>
                    {/* <input type="password" className='form-control' onChange={(e) => setPassword(e.target.value)} /> */}
                    <input type="password" className='form-control' onChange={handlePassword} />
                </div>
                <div className='form-group'>
                    <label>Image: </label>
                    {/* <input type='text' className='form-control' onChange={(e) => setImage(e.target.value)} /> */}
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