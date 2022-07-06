export default function CategoryButton(props) {

  // Plug in the props for parameters required. 
  return(
  <button 
      className="button" 
      onClick={props.handleCatClick} 
      value={props.name}> {props.name} </button>
  )
}