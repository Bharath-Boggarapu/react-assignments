import logo from './logo.svg';
import './App.css';



function App(props) {
 const {employee}=props;
    
return(
  <div className="container">
    <div className='prof-img'>
      <img src={employee.profileImg}/>
      
    </div>
    <div className='name'>
    <strong>{employee.name}</strong>
    </div>
    <div className='location'>
      <p>Location</p>
      <strong>{employee.location}</strong>
      
    </div>
    <div className='Blood-Grp'>
    <p>Blood group</p>
    <strong>{employee.bloodGroup}</strong>
    </div>
    <div className='age'>
      <p>Age</p>
    <strong>{employee.age}</strong>

    </div>
</div>
)
}



export default App;
