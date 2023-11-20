import React from 'react'
import { useDispatch } from 'react-redux'
import '../App.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { deleteUser } from '../store/reducer'
import './styles.css'

function Home() {
    let users = useSelector((state) => state.users)
    const dispatch = useDispatch();
    console.log(users)
  return (
      <div className='home'>
          <h1>Home</h1>
          <br />
          <Link to="/create" ><button className='create-btn'>Create new</button></Link><br /><br />
          <table>
              <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                  </tr>
              </thead>
              <tbody>
                  {
                      users.map((user) => (
                          <tr key={user.id} >
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link to={`/edit/${user.id}`}><button className='edit-btn'>edit</button></Link>
                            <button className='delete-btn' onClick={()=> dispatch(deleteUser(user.id))}>delete</button>
                              </td>
                              </tr>
                      ))
                  }
                  
              </tbody>
          </table>
      </div>
      
  )
}

export default Home