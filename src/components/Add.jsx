import React, { useState } from 'react'
import NavBar from './NavBar'

const Add = () => {

  const [data, setData] = useState(

    {
      "albumName": "",
      "albumId": "",
      "userName": "",
      "userId": "",
      "description": "",
      "releaseDate": "",
      "emailid": ""
    }

  )

  const inputHandler = (event) => {

    setData({ ...data, [event.target.name]: event.target.value })

  }

const outputHandler = () => {

  console.log(data)

}

  return (
    <div>
      <NavBar />

      <div className="container">

        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <h2>Add Album Details </h2>

            <div className="row g-3">
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Album Name</label>
                <input type="text" className="form-control" name='albumName' value={data.albumName} onChange={inputHandler} />

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Album Id</label>
                <input type="text" className="form-control" name='albumId' value={data.albumId} onChange={inputHandler}/>

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">User Name</label>
                <input type="text" className="form-control" name='userName' value={data.userName} onChange={inputHandler}/>

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">User Id</label>
                <input type="text" className="form-control" name='userId' value={data.userId} onChange={inputHandler} />

              </div>
              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <label htmlFor="" className="form-label">Description</label>
                <input type="text" className="form-control" name='description' value={data.description} onChange={inputHandler}/>

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">release date</label>
                <input type="date"  id="" className="form-control" name='releaseDate' value={data.releaseDate} onChange={inputHandler}/>

              </div>
              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <label htmlFor="" className="form-label">Email-id of user</label>
                <input type="text" className="form-control" name='emailid' value={data.emailid} onChange={inputHandler} />

              </div>

              <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

                <button className="btn btn-success" onClick={outputHandler}>Add</button>

              </div>
            </div>

          </div>
        </div>
      </div>


    </div>
  )
}

export default Add