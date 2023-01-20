const TextBox = (props) => {
    return ( 
        <div className="textContainer" >
          <span className="textbox">{props.text}</span>
        </div>
     );
}
 
export default TextBox;