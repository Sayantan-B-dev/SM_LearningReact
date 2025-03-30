import Property from "./Property"
import PropTypes from 'prop-types'
import "./PropertyList.css"
function PropertyList({properties}){
  return (
    <div className="PropertyList">
      {properties.map((p)=>{
          return <Property {...p} key={p.id}/>
        })}
    </div>
  )
}
//properties coming from data from app.jsx,,and Property is coming from property.jsx
//https://github.com/facebook/prop-types
PropertyList.propTypes = {
  properties: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      name: PropTypes.string,
      price: PropTypes.number,
      rating: PropTypes.number,
    })
  ),
};

export default PropertyList