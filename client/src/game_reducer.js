export const INITIAL_STATE = {
    1:{value:'',clicked:false, border:'border-b-4',color:''},
    2:{value:'',clicked:false, border:'border-x-4 border-b-4',color:''},
    3:{value:'',clicked:false, border:'border-b-4',color:''},
    4:{value:'',clicked:false, border:'border-b-4',color:''},
    5:{value:'',clicked:false, border:'border-x-4 border-b-4',color:''},
    6:{value:'',clicked:false, border:'border-b-4',color:''},
    7:{value:'',clicked:false, border:'',color:''},
    8:{value:'',clicked:false, border:'border-x-4',color:''},
    9:{value:'',clicked:false, border:'',color:''},
}

export const reducerFunction = (state,action)=>{
    switch(action.type){
        case "UPDATE_VALUE":
            return{
                ...state,
        [action.payload.name]:{
            ...state[action.payload.name],
            value:action.payload.value,
            clicked:true
        }
            }
        case "UPDATE_COLOR":
            return {
                ...state,
                [action.payload.name]:{
                    ...state[action.payload.name],
                    color:action.payload.value
                }
            }
        case "RESET":
            return {
                1:{value:'',clicked:false, border:'border-b-4',color:''},
                2:{value:'',clicked:false, border:'border-x-4 border-b-4',color:''},
                3:{value:'',clicked:false, border:'border-b-4',color:''},
                4:{value:'',clicked:false, border:'border-b-4',color:''},
                5:{value:'',clicked:false, border:'border-x-4 border-b-4',color:''},
                6:{value:'',clicked:false, border:'border-b-4',color:''},
                7:{value:'',clicked:false, border:'',color:''},
                8:{value:'',clicked:false, border:'border-x-4',color:''},
                9:{value:'',clicked:false, border:'',color:''},
            }
        case "UPDATE":
            return state
        default:
            return state

    }
}