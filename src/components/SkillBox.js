import './SkillBox.css'


const SkillBox = (props) => {
    let game = 'BsCodeSlash'
    return ( 
        <div className="skillBox">
            <div>
                    <h3>HTML</h3>
                    <p>- HTML5</p> 
                    <p>- JSX</p> 
                    <p>-  EJS</p> 
                    <p>- Semantic HTML </p> 
            </div>
             {props.children}
            


        </div>
     );
}
 
export default SkillBox;