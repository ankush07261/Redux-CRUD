import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { create } from '../store/reducer';
import './styles.css'

function Create() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    let dispatch = useDispatch();
    let navigate = useNavigate();
    let users = useSelector((state) => state.users);

    let submitHandler = (e) => {
        e.preventDefault();
        dispatch(create({ id: users.length > 0 ? users[users.length - 1].id + 1 :1, name, email }));
        navigate("/")
    }

  return (
      <div className='create'>
          <h2>Create a new account</h2>
          <br />
          <br/>
          <form onSubmit={submitHandler}>
              <label htmlFor="name">Name: </label>
              <input type="text" name="name"
              onChange={(e)=>setName(e.target.value)}/>
              <br />
              <label htmlFor="email">Email: </label>
              <input type="email" name="email"
              onChange={(e)=>setEmail(e.target.value)}/>
              <br />
              <br />
              <Link to="/"><button className='back btn'>back</button></Link>
              <button type='submit' className='btn submit'>Submit</button>
          </form>
      </div>
  )
}

export default Create