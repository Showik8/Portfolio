export const Actions = (props)=>{
  const {
    todo,
     id} = props
  
  function EditBtn(){
    console.log(id,todo)
    }

  function DeleteBtn(e,id){
    console.log(e,id)
  }


  console.log(id)



    return(<div className="todoActions">
        <button onClick={EditBtn}>E</button>
        <button onClick={DeleteBtn} >D</button>
      </div>)
}