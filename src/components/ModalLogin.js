import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from './Context/UserContext';

const ModalLogin = () => {

    const {login} = useContext(UserContext);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="modal fade" id="modalLogin" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Login</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                            <input type="text" className="form-control" id="email" name = "email" onChange={(e)=> setEmail(e.target.value)} />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="inputGroup-sizing-default">Password</span>
                            <input type="text" className="form-control" id="password" name = "password" onChange={(e)=> setPassword(e.target.value) }/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary" onClick ={()=> login(email, password)}>Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalLogin