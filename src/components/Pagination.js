import React from "react";
import { useDispatch, useSelector } from 'react-redux'
import { getAllVehicles, initVehicles } from "../redux/reducers/vehicleReducer";

export const Pagination = () => {

    const state = useSelector(state => state.vehicles)

    const currentPageNumber = state.pageNumber
    const currentPageSize = state.pageSize
    const totalPages = state.totalPages

    const pages = []

    for (let i = 1; i <= totalPages; i++) {
        pages.push(i)
    }


    const dispatch = useDispatch()
    
    const changePagination = async (e) => {

        const {target} = e
        
        if (target.value !== "All"){
            dispatch(initVehicles(1, target.value))
        } else {
            dispatch(getAllVehicles())
        }
        
    }

    const changePage = async (_pageNumber) => {

        dispatch(initVehicles(_pageNumber, currentPageSize))
        
    }

    return (
    <React.Fragment>
<div className="container">
  <div className="row justify-content-start">
    <div className="col-4">
    <div className="row justify-content-start">
    <label className="col-6">Items per page: </label>
    <select className="custom-select col-6" name="paginationSelect" onChange={changePagination}>
        <option value="10" defaultValue>10</option>
        <option value="50">50</option>
        <option value="All">All</option>
    </select>
    </div>
    
    </div>
    <div className="col-4">
    <nav aria-label="...">
    <ul className="pagination">

        {
        pages.map((page => {
            if (page === currentPageNumber) {
                return <li key={page} className="page-item active">
                <span className="page-link">
                    {page}
                    <span className="sr-only">(current)</span>
                </span>
                </li>
            } else {
                return <li key={page} className="page-item"><button className="page-link" onClick={() => changePage(page)}>{page}</button></li>
            }
            
        }))
        }
        
    </ul>
    </nav>
    </div>
  </div>
  </div>


    </React.Fragment>   
    );
  }
  