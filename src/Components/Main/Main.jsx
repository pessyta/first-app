
/*const Main = () => {

}*/

const titleStyle = {
   /* color: 'white',
    backgroundColor: 'red',*/
}


    function Main(props) {
       const user =props.user;
    return (
        <>
        <h1 style={titleStyle}>
            Welcome, {user.name}
        </h1>

        <h3 style={{
            /*color: 'red',
            backgroundColor: 'white',*/
        }}
        >
            {props.user.age}
        </h3>
        </>
    )
}

/* Desustructurado:

    function Main({user}) {
    
        {user.age}

*/ 

export default Main;