import {v1} from 'uuid';


export type TaskType={
    id: string
    title: string
    isDone: boolean

}

const initialState:TaskType[]=[]
export const taskReducer=(state:TaskType[]=initialState, action:ActionType): TaskType[]=>{
    switch (action.type) {
        case "ADD-TASK":{
          return  [{id:v1(), title:action.title, isDone: false},...state]
        }
        case "CHANGE-STATUS":{
            return state.map(el=>el.id=== action.id?{...el, isDone: action.status}:el)
        }
        default: return state
    }
}


export type ActionType = ReturnType<typeof addTaskAC> | ReturnType<typeof changeStatusAC>
export const addTaskAC=(title:string)=>({type:'ADD-TASK', title} as const)
export const changeStatusAC=(status:boolean, id: string)=>({type:'CHANGE-STATUS', status, id} as const)

