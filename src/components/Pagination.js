import React, { useState } from 'react';





function Pagination(props){
 
    const [currentPage, changePage] = useState(props.currentPage);

    const {totalRecords = null, pageLimit = 30, pageNeighbours = 0 } = props;
    const totalPages = Math.ceil(totalRecords / pageLimit);
    
    function clickNext(){
        if(currentPage<=totalPages){
            changePage(currentPage+1)
        }     
    }

    function clickPrevious(){
        if(currentPage>1){
            changePage(currentPage-1)
        }
    }

    return (
        <div className="Pagination">
            <div className="pagination-back" onClick={clickPrevious}>Back</div>
                {currentPage}
            <div className="pagination-next" onClick={clickNext}>Next</div>    
        </div>
    )

}

export default Pagination;