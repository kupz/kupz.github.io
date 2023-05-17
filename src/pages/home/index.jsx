import './popping.css'
function Home(){
    return(
        <div className="container-fluid" style={{ display: 'flex',  "flex-direction": 'column' , "justify-content": 'center' , "align-items": 'center', height: '70vh'}}>
            <div style={{"font-style": 'italic' , display: 'flex' , "justify-content": 'center' , "align-items": 'center' , "flex-direction": 'column' , 'text-shadow': '0 0 5px white'}}>
                <h1 style={{color: 'white' , "font-weight": 'bolder'}}>Ben John Villabesa</h1>
                <h3 style={{color: 'white'}}>Full Stack Web Developer</h3>
            </div>
            <div style={{display: 'flex' , "align-items": 'center' , "justify-content": 'center' , "margin-top": '100px'}}>
                <ul>
                <li style={{'--color': '#ef436b'}}>
                    <span class="base"></span>
                    <span class="title">About</span>
                    <span class="icon"><i class="bi bi-file-earmark-person"></i></span>
                </li>
                <li style={{'--color': '#ffce5c'}}>
                    <span class="base"></span>
                    <span class="title">projects</span>
                    <span class="icon"><i class="bi bi-cast"></i></span>
                </li>
                <li style={{'--color': '#05c770'}}>
                    <span class="base"></span>
                    <span class="title">contacts</span>
                    <span class="icon"><i class="bi bi-person-lines-fill"></i></span>
                </li>
                </ul>
            </div>  
        </div>
        
    )
}

export default Home;