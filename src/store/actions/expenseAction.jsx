export { addExpense} from '../reducers/expenseSlice'


import { removeExpense } from '../reducers/expenseSlice'

export const aysncremoveExpense = (index)=> async (dispatch,getstate)=>{
        const state = getstate;
        console.log(state);
        
        try{
            setTimeout(()=>{
                // console.log("Async removed");
                dispatch(removeExpense(index));
            },2000);
        }
        catch(error){
            console.log(error);
        }
    };
