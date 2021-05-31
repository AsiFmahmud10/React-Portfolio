import Typewriter from "typewriter-effect";

const Type = () => {
    return ( 
        <Typewriter
            options={{
                strings: [
                "A Front-End Developer",
                "A Learner",
                "A tech enthuasist",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
            />

     );
}
 
export default Type;