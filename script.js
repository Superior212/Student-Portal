let allStudent=[];
let editObj;
let editIndex;

function addStudent () {
    //     allStudent = JSON.parse(localStorage.localallStudent);
    // }else {
    //     allStudent = [];
    // }
    localStorage.localallStudent ? allStudent = JSON.parse(localStorage.localallStudent) : allStudent = [];
            if (firstName.value =="" || lastName.value =="" || userEmail.value =="" || userPassword.value =="") {
            alert("Kindly fill all fileds")
        }else{
            var mydate = new Date();
            var Student ={
                firstname : firstName.value,
                lastname :lastName.value,
                useremail:userEmail.value,
                password1:userPassword.value,
                matricNo : `SQI${Math.round(Math.random()*1000000)}`,
                time : mydate 
            };
            allStudent.push(Student);
            localStorage.setItem("localallStudent", JSON.stringify(allStudent))
                 
            firstName.value="";
            lastName.value ="";
            userEmail.value ="";
            userPassword.value ="";
        

            window.location.href= "signin.html";
        }
        }
       
        function signin() {
            if (userEmail.value =="" || userPassword.value =="") {
                alert("Kindly fill your Email and Password")
            }else{
            window.location.href ="dashboard.html"
            }
        }