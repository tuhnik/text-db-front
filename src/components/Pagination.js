import React, { useState } from 'react';





function Pagination(props){

    const [currentPage, changePage] = useState(props.currentPage);
    const {pageChanged=()=>{}, totalRecords = null, pageLimit = 5, pageNeighbours = 2, backButton = "«BACK", nextButton= "NEXT»" } = props;
    const totalPages = Math.ceil(totalRecords / pageLimit);

    const totalNumbers = (pageNeighbours * 2) + 3;
    const totalBlocks = totalNumbers + 2;
    let pages = []
    
    if (totalPages > totalBlocks) {
        const startPage = Math.max(2, currentPage - pageNeighbours);
        const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);
    
        pages = range(startPage, endPage);
    
        const hasLeftSpill = startPage > 2;
        const hasRightSpill = (totalPages - endPage) > 1;
        const spillOffset = totalNumbers - (pages.length + 1);
    
        switch (true) {
            // (1) < {5 6} [7] {8 9} (10)
            case (hasLeftSpill && !hasRightSpill): {
            const extraPages = range(startPage - spillOffset, startPage - 1);
            pages = [backButton, ...extraPages, ...pages];
            break;
            }
            // (1) {2 3} [4] {5 6} > (10)
            case (!hasLeftSpill && hasRightSpill): {
            const extraPages = range(endPage + 1, endPage + spillOffset);
            pages = [...pages, ...extraPages, nextButton];
            break;
            }
            // (1) < {4 5} [6] {7 8} > (10)
            case (hasLeftSpill && hasRightSpill):
            default: {
            pages = [backButton, ...pages, nextButton];
            break;
            }
        }
        pages =  [1, ...pages, totalPages];   
        }
    else {
        pages =  range(1, totalPages);
    } 
    
    
    function clickNext(p){
        if(currentPage<=totalPages){
            pageChanged(p)
            changePage(p)       
        }
    }

    function clickPrevious(p){
        if(currentPage>1){
            pageChanged(p)
            changePage(p)
        }
    }

    function clickPageItem(p){
        pageChanged(p)
        changePage(p)
    }
   
    return (
        <div className="Pagination">
            {pages.map((el, i)=>{
                if(el===nextButton){
                    return <div onClick={()=>{clickNext(currentPage+1)}} key={i} className="pagination-button next">{el}</div>
                }
                if(el===backButton){
                    return <div onClick={()=>{clickPrevious(currentPage-1)}} key={i} className="pagination-button back">{el}</div>
                }
                if(el===currentPage){
                    return <div key={i} className="pagination-button current">{el}</div>
                }
                return <div onClick={()=>{clickPageItem(el)}} key={i} className="pagination-button">{el}</div>
            })} 
        </div>
    )

}


const range = (from, to, step = 1) => {
    let i = from;
    const range = [];
    while (i <= to) {
      range.push(i);
      i += step;
    }
    return range;
}
  


export default Pagination;