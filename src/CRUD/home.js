import React,{useState,useEffect} from "react";
import axios from 'axios';
import { API_URL } from '../DemoApi/url';
import Form from './form';
import netflix from './Netflix.png';
import { FaPencilAlt } from "react-icons/fa";
import { ImBin } from "react-icons/im";

function Home(){

    const initialForm={
    
        title:'',
        company:'',
        industry:'',
        location:'',
        remote:'',
        minExp:'',
        maxExp:'',
        minSal:'',
        maxSal:'',
        totEmp:'',
        apply:'',
        
      }
      const [createbtn,setCreatebtn]= useState(false)
    const [apidata,setApidata]= useState([])

    const [formdata,setFormdata] = useState(initialForm)
   
    const [errors,setErrors]=useState({});

    const [display, setDisplay] = useState(true);
   const [display2, setDisplay2] = useState(true);
   
    const handleChange = (e) => {
        const { name, value } = e.target;
    
        setFormdata((prevForm) => ({...prevForm,[name]: value }));
      };

  
      const validationErrors = {};

    const handleSubmit=async(e)=>{
e.preventDefault()
if(!formdata.apply) {
    validationErrors.apply = "Apply  is required";
    setErrors(validationErrors)
}else{
    await axios.post(API_URL,formdata)
   
    setFormdata(initialForm)
    setDisplay(true)
    setDisplay2(true)
    setCreatebtn(false)
    getData()
}


  }



    // -----------------view ------------


    const getData=async()=>{
        const response= await axios.get(API_URL);
        setApidata(response.data)
    
      }
    
      useEffect(()=>{
        getData();
      },[])


   

//     ---------------delete -------------------


const deleteData = async (id) => {
    await axios.delete(API_URL+id)
    getData();  
  };


// ------------------edit---------------

const [editform, setEditform]= useState(false)

const[editformdata, setEditformdata]= useState({
    title:'',
    company:'',
    industry:'',
    location:'',
    remote:'',
    minExp:'',
    maxExp:'',
    minSal:'',
    maxSal:'',
    totEmp:'',
    apply:'',
    id:''
})





const editChange=async(e)=>{

    const{value,name}=e.target;
    setEditformdata((pre)=>{
return{
...pre,[name]:value
}
    })
}


const editUpdate=async(e)=>{
    e.preventDefault();
const id=editformdata.id
  await axios.put(API_URL+id, editformdata);
  setEditform(false);
  getData()
  setCreatebtn(false)

}

const edit=(user)=>{
    setCreatebtn(true)
    setEditform(true)
    setDisplay(true)
    setDisplay2(true)
    
setEditformdata({
    title:user.title,
    company:user.company,
    industry:user.industry,
    location:user.location,
    remote:user.remote,
    minExp:user.minExp,
    maxExp:user.maxExp,
    minSal:user.minSal,
    maxSal:user.maxSal,
    totEmp:user.totEmp,
    apply:user.apply,
    id:user.id
    })
}

   

   
   

const next = (e) => {
    e.preventDefault()
    
    
    if(!formdata.title.trim()) {
        validationErrors.title = "Title is required"
    }

    if(!formdata.company.trim()) {
        validationErrors.company = "company is required"
    } 

    if(!formdata.industry.trim()) {
        validationErrors.industry = "industry is required"
    } 
      
    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
       
        setDisplay(false)
    setDisplay2(false)
        
    }      
  }

  const next2=(e)=>{
    e.preventDefault();
    
    const validationErrors = {}
    if(!editformdata.title.trim()) {
        validationErrors.title = "Title is required"
    }

    if(!editformdata.company.trim()) {
        validationErrors.company = "company is required"
    } 

    if(!editformdata.industry.trim()) {
        validationErrors.industry = "industry is required"
    } 
      
    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
        
        setDisplay(false)
    setDisplay2(false)
        
    }
   

  }

  
  

    return(
        <>


<button className='m-[5px] rounded-[5px] font-bold py-[5px] bg-[#1597E4] w-32  text-[#FFFFFF]' onClick={()=>{setCreatebtn(true)}}> Create a Job </button>

        {

             createbtn  && (

            editform ? < Form   formdata={editformdata}  handleSubmit={editUpdate}  handleChange={editChange} 
            next={next2}  display={display} display2={display2} errors={errors} /> :

            <Form  formdata={formdata} handleSubmit={handleSubmit}  handleChange={handleChange}
            next={next}  display={display} display2={display2} errors={errors} />)
        }



<div className="bg-[#E6E6E6] flex flex-wrap ">
    
       {apidata[0] && apidata.map((user,index)=>{


return(
    <>
   
    
    <div className="w-[782px]  border-[1px] rounded-[10px] border-[#E6E6E6] m-8 px-6 py-4 bg-[#ffffff] ">
        <div className="w-[350px] flex ">
        <div>
       <img  src={netflix} className="w-16 h-16"  alt="sorry"/>
       </div>
       <div className="ml-[8px]"  key={index}>
      <div className="flex justify-between">
       <h3 className=" text-[20px] text-[#212121]">{user.title} </h3>
       <div className="flex ">
        <FaPencilAlt  className="ml-[15px]" onClick={()=>{edit(user)}}/>
       <ImBin  className="ml-[10px]" onClick={()=>{deleteData(user.id)}}/>
       
       </div>
       </div>
       <p className=" text-[16px] text-[#212121]"> {user.company} - <span> {user.industry}</span> </p>
       <p className=" font-light text-[18px]"> {user.location} <span> ({user.remote})</span></p>

        <h3 className=" text-[18px] mt-6 text-[#212121] "> Part-Time (9.00 am - 5.00 pm IST) </h3>
        <h3 className=" text-[20px] mt-[8px] text-[#212121]"> Experience ({user.minExp } - { user.maxExp } years ) </h3>
        <h3 className=" text-[20px] mt-[8px] text-[#212121]">INR(₹)   {user.minSal} - {user.maxSal} / Month    </h3>
        <h3 className=" text-[20px] mt-[8px]  text-[#212121]"> <span> {user.totEmp} </span> employees</h3>
        <button className={`mt-6 font-bold   px-[16px] py-[8px] rounded-[5px] ${user.apply ==='Apply Now' ? 'bg-[#1597E4]  w-[118px] text-white' : 'bg-[white]  text-[#1597E4] border-[1px] border-[#1597E4]  w-[150px] border:[#1597E4]' } `}>  {user.apply}  </button>
       </div>
       </div>
       </div>


    
    </>
)

       }) 
       
       
       }
   
    </div>



    
 
        
        </>
    )
}

export default Home