const date = new Date()
//month = date.getMonth()
const  getMonth = (month = date.getMonth()) =>{
    
    const year = date.getFullYear()
   
    // find the first day of the month that is if it is friday, monday etc
    date.setMonth(month)
    date.setDate(1)
    
    const firstDayOfThMonth = date.getDay()
  
  
    let currentMonthCount = 0 - firstDayOfThMonth
    const daysMatrix = new Array(5).fill([]).map(()=>{
        return new Array(7).fill(null).map(()=>{
            // here is were there is all individual day
            currentMonthCount++
            return new Date(year, month, currentMonthCount)
        })
    })
    return daysMatrix
     
}



export {getMonth}