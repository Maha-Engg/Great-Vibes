import React from 'react'

function Form(props) {
  return (
    <>
     <form onSubmit={props.handleSubmit}>
<div className='bg-[#E6E6E6] flex justify-center'>
<div className={`text-[#212121]  bg-[#FAFAFA] border-[1px] rounded-[10px] border-[#E6E6E6]  w-[513px] h-[500px] p-[32px]   ${props.display ? 'visible' : 'hidden'}`}>
 
 
<div className='flex justify-between '>
<h3 className='font-bold text-lg'> Create a job</h3>
<h3 className='font-bold text-lg' > Step 1</h3>
</div>

<p className='mt-6 font-bold'>Job title <span className='text-[#D86161] '>*</span>{props.errors.title && <span className='text-[#D86161]'> {props.errors.title}</span>}
</p>
<input type='text ' className='w-[100%] text-[#7A7A7A] border mt-1 ' placeholder='ex. UX UI Designer' name='title' value={props.formdata.title}  onChange={props.handleChange}/>

<p className='mt-6 font-bold'>Company name <span className='text-[#D86161]'>*</span>  {props.errors.company && <span className='text-[#D86161]'> {props.errors.company}</span>}
</p>
<input type='text' className='w-[100%] mt-1   text-[#7A7A7A] border' placeholder='ex. Google' name='company' value={props.formdata.company} onChange={props.handleChange}/>

<p className='mt-6 font-bold'>Industry <span className='text-[#D86161]'>*</span>{props.errors.industry && <span className='text-[#D86161]'> {props.errors.industry}</span>}
</p>
<input type='text' className='w-[100%] mt-1 text-[#7A7A7A] border' placeholder='ex. Information Technology' name='industry' value={props.formdata.industry} onChange={props.handleChange}/>

<div className='flex justify-between'>
  <div>
<p className='mt-6 font-bold'>Location</p>
<input type='text' className=' mt-1  w-[200px] text-[#7A7A7A] border' placeholder='ex. Chennai' name='location' value={props.formdata.location} onChange={props.handleChange}/>
</div>
<div>
<p className='mt-6 font-bold' >Remote type</p>
<input type='text' className=' mt-1  w-[200px] text-[#7A7A7A] border' placeholder='ex. In-office' name='remote' value={props.formdata.remote} onChange={props.handleChange}/>
</div>
</div>
<div className='flex justify-end '>
<button className='mt-24  rounded-[5px]  bg-[#1597E4] w-16 h-8 text-[#FFFFFF]'  onClick={props.next}> Next </button>

</div>
</div>



<div className={` text-[#212121]  border-[1px] rounded-[10px] border-[#E6E6E6]  bg-[#FAFAFA]  w-[513px] h-[500px] p-[32px]   ${props.display2 ?  'hidden' : 'visible'}  `  }>

<div className='flex justify-between '>
<h3 className='font-bold text-lg'> Create a job</h3>
<h3 className='font-bold text-lg'> Step 2</h3>
</div>


<p className='mt-6 font-bold'>Experience</p>
<div className='flex justify-between'>
<input type='text' className='mt-1  w-[200px] text-[#7A7A7A] border' placeholder='Minimum' name='minExp' value={props.formdata.minExp} onChange={props.handleChange}/>

<input type='text' className='mt-1  w-[200px] text-[#7A7A7A] border' placeholder='Maximum' name='maxExp' value={props.formdata.maxExp} onChange={props.handleChange}/>
</div>

<p className='mt-6 font-bold'>Salary</p>
<div className='flex justify-between'>
<input type='text' className='mt-1  w-[200px] text-[#7A7A7A] border' placeholder='Minimum' name='minSal' value={props.formdata.minSal} onChange={props.handleChange}/>

<input type='text' className='mt-1  w-[200px] text-[#7A7A7A] border ' placeholder='Maximum' name='maxSal' value={props.formdata.maxSal} onChange={props.handleChange}/>
</div>

<p className='mt-6 font-bold'>Total employee</p>
<input type='text' className='w-[100%] mt-1 text-[#7A7A7A] border' placeholder='ex. 100' name='totEmp' value={props.formdata.totEmp} onChange={props.handleChange}/>

<p className='mt-6 font-bold'>Apply type <span className='text-[#D86161]'>*</span> {props.errors.apply && <span className='text-[#D86161]'> {props.errors.apply}</span>}</p>
 

<div className='mt-1'>

<input type='radio' className=' mt-1' name='apply' value='Apply Now' checked={props.formdata.apply ==='Apply Now'} onChange={props.handleChange} />
<label className='ml-1 font-bold'> 
Quick Apply
</label>

 
<input type='radio' className=' mt-1 ml-4' name='apply' value='External Apply' checked={props.formdata.apply ==='External Apply'} onChange={props.handleChange} />
<label className='ml-1 font-bold'> 
External Apply
</label>

</div>
<div className='flex justify-end '>
<button type='submit' className='mt-24  rounded-[5px]  bg-[#1597E4] w-16  text-[#FFFFFF]' > Save </button>
</div>
</div>

</div>
</form>
    
    </>
  )
}

export default Form















