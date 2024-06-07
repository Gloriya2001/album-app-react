import React from 'react'
import NavBar from './NavBar'

const Add = () => {
  return (
    <div>
        <NavBar/>

<div className="container">

<div className="row">
  <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

    <h2>Add Album Details </h2>

    <div className="row g-3">
      <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">Album Name</label>
        <input type="text" className="form-control" />

      </div>
      <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">Album Id</label>
        <input type="text" className="form-control" />

      </div>
      <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">User Name</label>
        <input type="text" className="form-control" />

      </div>
      <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">User Id</label>
        <input type="text" className="form-control" />

      </div>
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

        <label htmlFor="" className="form-label">Description</label>
        <input type="text" className="form-control" />

      </div>
      <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">release date</label>
        <input type="date" name="" id="" className="form-control" />

      </div>
      <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <label htmlFor="" className="form-label">Email-id of user</label>
        <input type="text" className="form-control" />

      </div>
     
      <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">

        <button className="btn btn-success">Add</button>

      </div>
    </div>

  </div>
</div>
</div>


    </div>
  )
}

export default Add