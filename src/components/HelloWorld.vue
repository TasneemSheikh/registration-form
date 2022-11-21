<template>
    <div class="container">
         <div class="title">Registration Form </div>
         <hr/>
         
         <form action="#">
             <div class="user_details">
 
               
 
                 <div class="input_box">
                     <lable for="details">Name of Student</lable> 
                     
                     <input type="text" placeholder="Name of Student">
                 </div>
 
                 <div class="input_box">
                     <lable for="details">Father Name</lable> 
                     <input type="text" placeholder="Father Name">
                   
                 </div>
 
                 <div class="input_box">
                     <lable for="details">Mother Name</lable> 
                     <input type="text" placeholder="Mother Name">
                   
                 </div>
 
 
                 <div class="input_box">
                     <lable for="details">Mobile Number </lable>
                   
                     <input type="phone" placeholder="Mobile Number">
                 </div>
 
  
 
                 <div class="input_box">
 
                     <lable for="details">Date of Birth</lable>
                  
                     <input type="date" placeholder="../../..">
 
                 </div>
 
 
                 <div class="input_box">
                     <lable for="details">Address</lable>
                   
                     <input type="phone" placeholder="Address">
                 </div>
 
                
 
                 <div class="input_box">
 
                     <label for="Gender">Gender</label>
                     <select>
                         <option value="">Choose Your Option</option>
                         <option value="Female">Male</option>
                         <option value="other">Female</option>
                         <option value="other">Other</option>
                     </select>
                         <!-- <input type="text" placeholder="Gender"> -->
 
                 </div>
               
                 <div class="input_box">
                     <lable for="details">Email Id</lable>
                    
                     <input type="text" placeholder="Email Id">
                 </div>
 
                 <div class="input_box">
                     <lable for="details">Password</lable>
                    
                     <input type="text" placeholder="Password">
                 </div>
 
                 <div class="input_box">
                     <lable for="details">Confirm Password</lable>
                    
                     <input type="text" placeholder="Confirm Password">
                 </div>
 
                 <div class="input_box">
                     <lable for="details">Captcha Code</lable>
                    
                     <input type="text" placeholder="Captcha Code">
                 </div>
                
 
                 <div class="input_box">
                   <br>
                     <lable for="details">A 5 D 9 O</lable>
                    
                   
                 </div>
 
 
                </div>
 
                
 
             
 
             <div class="but">
                 <button class="btn">REGISTER</button>
             </div>
         </form>
     </div>
 
 </template>
 
 <script>
 // import HelloWorld from '/components/HelloWorld'
 export default {
 name: "HelloWorld",
 data() {
 
 return {
 
 StudentName: "",
    EmailId: "",
    FatherName:" ",
    MotherName:"",
    MobileNumber:"",
    DateofBirth:"",
    Address:"",
    Gender:"",
    Password:"",
    ConfirmPassword:"",
    CaptchaCode:"",
    
 
 
 
 }},
 methods: {
     submitdata(){
         console.log("name",this.studentName)
         console.log("father",this.FatherName)
         console.log("mother",this.MotherName)
         console.log("emailid",this.EmailId)
         console.log("birth",this.DateofBirth)
         console.log("mobile",this.MobileNumber)
         console.log("gender",this.Gender)
         console.log("password",this.Password)
         console.log("confirmps",this.confirmpassword)
 
     }
 },
 };
 </script>
 
 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped>
 
 
  
 
 * {
     margin: 0;
     padding: 0;
     box-sizing: border-box;
 }
 /*================================body section==================================*/
 body {
     display: flex;
     height: 100%;
     justify-content: center;
     align-items: center;
     padding: 10px;
     background: whitesmoke;
 }
 
 .container {
     /*max-width:700px;*/
     width: 60%;
     height: 100%;
     padding: 25px;
     background: white;
     margin: 10px;
     border:1px solid red;
     background-color: azure;
     border-radius: 5px;
   margin-left: 20%;
   box-shadow: 5px 5px 5px 5px ;
 }
 
 .container .title {
     font-size: 50Px;
     font-weight: 500;
     position: relative;
     text-align: center;
     color: red;
 }
 
 .container form .user_details {
     display: flex;
     flex-wrap: wrap;
     padding: 30px;
     justify-content: space-between;
 
 }
 
 form .user_details .input_box {
     width: calc(100%/2 - 20px);
     margin: 25px 0px 7px 0px;
 
 
 }
 
 form .user_details .input_box details {
     font-weight: 500;
     margin-bottom: 5px;
     display: block;
     padding: 10px;
 
 }
 
 .user_details .input_box input {
     height: 40px;
     width: 100%;
     padding: 5px 15px;
     outline: none;
     border: 1px solid aqua;
     border-radius: 5px;
     font-size: 16px;
 
 
 }
 
 
 .btn {
 
     margin: 0px 10px;
     background-color: red;
     color: white;
     padding: 4px 14px;
     border: 2px solid rgb(62, 206, 206);
     border-radius: 7px;
     font-size: 20px;
     cursor: pointer;
 }
 
 .btn:hover {
     background-color: rgb(62, 206, 206);
 
 }
 
 .but {
     text-align: center;
 }
 
 
 select {
     height: 40px;
     width: 100%;
     padding: 5px 15px;
     outline: 0;
     border: 1px solid aqua;
     border-radius: 5px;
 }
 
 
 #btn {
     margin: 5px 27px;
     padding: 37px 12px;
     color: red;
     font-weight: bold;
     font-size: 25px;
 }
 
 .captc {
     margin-top: 100px;
     padding-right: 140px;
 }
 
 @media (max-width:941px){
     .container{
         max-width:100%;
     }
     form .user_details .input_box {
        
         margin-bottom: 15px;
         width:100%;
     }  
     .container form .user_details {
         max-width:  500px;
 
     }
     .user_details .input_box input {
         height: 40px;
         width: 100%;
         padding: 5px 15px;
        
     
     }
    
         
     
 }
 </style>