import { DECREMENT_MONTH, INCREMENT_MONTH, RESET } from './TypeMonthIndex'

export const  increment = (n : number) => {
    return {                      
        type: INCREMENT_MONTH,
        payload : n        
    }                              
} 

export const  decrement = (n : number) => {
    return {                      
        type: DECREMENT_MONTH, 
        payload : n 
    }                              
} 

export const  reset = () => {
    return {                      
        type: RESET, 
    }                              
} 
