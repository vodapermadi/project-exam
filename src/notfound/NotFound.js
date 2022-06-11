import React from 'react'
import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <>
        <div className="container" style={{ display : "flex", justifyContent : "center", alignItems : "center", margin : "auto" }}>
            <div className="row bgTask p-5 my-5 justify-content-center">
                <div className="col-md-12 text-center">
                    <h1>Not Found !!!!</h1>
                </div>
                <div className="col-md-5 text-center">
                    <h2>Developer Sedang Capek Atau Mungkin Sedang Sibuk Yang Lain Harap Maklum Karena Developer Web Ini Sama Sama Manusia</h2>
                    <Link to={`/project-exam`} className="btn btn-primary px-5">Kembali</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default NotFound