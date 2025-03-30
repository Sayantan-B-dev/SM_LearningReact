function handleFormSubmit(e){
    e.preventDefault()
    console.log("aa pa cha pa chi")
}


function Form(){
    return (
        <form action="" onSubmit={handleFormSubmit}>
            <button>ok</button>
        </form>
    )
}

export default {Form,handleFormSubmit}