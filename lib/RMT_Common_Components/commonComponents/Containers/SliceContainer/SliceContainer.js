import PropTypes from "prop-types";
import { SliceContainerBase } from "./SliceContainerStyles";
 
const SliceContainer = ({children, ...rest}) => {
 return (
   <SliceContainerBase
     {...rest}
   >
     {children}
   </SliceContainerBase>
 )
}
 
SliceContainer.propTypes = {
 children: PropTypes.element,
 rest: PropTypes.element
};
 
SliceContainer.defaultProps = {
};
 
export default SliceContainer;
 

