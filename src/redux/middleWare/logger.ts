

const logger=(state)=>(next)=>(action)=>{
    console.log('current State ==>',state.getState())
    console.log("action==>",action)
    next(action)
    console.log(' State ==>',state.getState())

}

export default logger