document.getElementById('button').addEventListener('click', ()=>{
    const arrDivs = [...document.getElementsByClassName('half_div')]

    arrDivs.forEach((elem)=>{
        elem.textContent = elem.textContent.trim().substring(0,10) + '...'
    })
})

document.getElementById('button2').addEventListener('click', ()=>{
    const arrNumbers = []
    const arrayTr = Array.from(document.getElementById('table').rows)
    arrayTr.forEach((elem)=>{
        for(let i = 0; i < elem.cells.length; i++){
            arrNumbers.push(elem.cells[i].textContent)
        }
    })
    const biggestNumber = arrNumbers.sort((a,b)=>a-b)[arrNumbers.length-1]
    
    arrayTr.forEach((elem)=>{
        for(let i = 0; i < elem.cells.length; i++){
           if(elem.cells[i].textContent === biggestNumber){
              elem.cells[i].style.backgroundColor = 'red'
           }
        }
    })
})