
function Button({clickFunc,label="Click"}){
    return <button onClick={clickFunc}>{label}</button>
}
export default Button