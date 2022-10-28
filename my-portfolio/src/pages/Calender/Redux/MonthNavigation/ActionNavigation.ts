import { DECREMENT, INCREMENT } from './TypeNavigation'

export const  increment = () => {
    return {                      
        type: INCREMENT,        
    }                              
} 

export const  decrement = () => {
    return {                      
        type: DECREMENT, 
        
    }                              
} 
