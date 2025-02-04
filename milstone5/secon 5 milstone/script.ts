 // Get referance to the fom and display area
  const form =document.getElementById("resume-form") as HTMLFormElement;
  const resumeDisplayElement=document.getElementById("resume-dispaly") as HTMLDivElement
   
  // Handal form submission
  form. addEventListener("submit",(event:Event) =>{
    event.preventDefault();// prevent page reload
    // cooect input values
    const name =(document.getElementById("name")as HTMLInputElement) .value  
    const email =(document.getElementById("email")as HTMLInputElement).value
    const phone=(document.getElementById("phon")as HTMLInputElement).value
    const education=(document.getElementById("education")as HTMLInputElement).value
    const  experience=(document.getElementById("experience")as HTMLInputElement).value
    const skills=(document.getElementById("skills")as HTMLInputElement).value
     
   //Generate the resume content dynamically
   const resumeHTML =`
   <h2><b>Resume</b></h2>
   <h3>Personal Information</h3>
   <p><b>Name:</b>${name}</p>
   <p><b> Email:</b>${email} <p/> 
   <p><b> Phone:</b>${phone}</p>

   <h3>Education</h3>
   <p>${education}</p>
   <h3> Experience</h3>
   <P>${experience}</p>
   <h3>Skills</h3>
   <p>${skills}</p>

   `;
   // Diplay the genertated resumr
   if(resumeDisplayElement){
    resumeDisplayElement.innerHTML=resumeHTML;

   }else {
    console.error("the resume display element is missing.");
   }
  });