import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { updateUser } from '../store/reducer';
import './styles.css'

function Update() {

    let users = useSelector((state) => state.users);
    const { id } = useParams();
    let uid = parseInt(id)
    let existUser = users.filter((user) => user.id === uid)
    console.log(existUser[0]);

    const{name,email}=existUser[0]

    const [upname, setUpName] = useState(name)
    const [upemail, setUpEmail]= useState(email)

    let dispatch = useDispatch();
    let navigate = useNavigate();
    
    

    let updateHandler = (e) => {
        e.preventDefault();
        dispatch(updateUser({ id: uid , name:upname, email:upemail }));
        navigate("/")
    }

  return (
      <div className="update">
          <h2>Update existing account</h2>
          <br/>
          <br/>
          <form onSubmit={updateHandler}>
              <label htmlFor="name">Name: </label>
              <input type="text" name="name" value={upname}
                  onChange={(e) => setUpName(e.target.value)}
              />
              <br />
              
              <label htmlFor="email">Email: </label>
              <input type="email" name="email" value={upemail}
                  onChange={(e) => setUpEmail(e.target.value)}
              />
              <br />
              <br />
              <Link to="/"><button className='back btn'>back</button></Link>
              <button type='submit' className='btn submit'>Update</button>
          </form>
      </div>
  )
}

export default Update