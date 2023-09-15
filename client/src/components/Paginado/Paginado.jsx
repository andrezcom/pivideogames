 function Paginado({page, total}) {
  
  const pageNumbers = [];

  for (let i=1; i<=total; i++){
    pageNumbers.push(i);
  }
  return (
    <div>
      <h4>Paginado</h4>
      {pageNumbers.map((pageNumber)=>(<button key={pageNumber} onClick={()=>page(pageNumber)}>{pageNumber}</button>))}

      
      </div>
  )
}


export default Paginado