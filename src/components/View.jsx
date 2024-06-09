import React, { useEffect, useState } from 'react'
import NavBar from './NavBar'
import axios from 'axios'

const View = () => {

  const [data, changeData] = useState([])

  const fetchDataformApi = () => {

    axios.get("https://jsonplaceholder.typicode.com/albums").then(

      (response) => {
        changeData(response.data)
      }
    ).catch().finally()

  }
  useEffect(() => { fetchDataformApi() }, [])

  return (
    <div>
      <NavBar />

      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


            <div className="row">

              <h2>View Users</h2>

              <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                <table class="table table-stripped">
                  <thead>
                    <tr>
                      <th scope="col">User Id</th>
                      <th scope="col">Id</th>
                      <th scope="col">Title</th>

                    </tr>
                    {data.map(

                      (value, index) => {

                        return <tr>
                          <td>{value.userId}</td>
                          <td>{value.id}</td>
                          <td>{value.title}</td>

                        </tr>



                      }

                    )}

                  </thead>
                </table>




              </div>
            </div>



          </div>
        </div>
      </div>




    </div>
  )
}

export default View