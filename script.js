let allStudent=[];
function addStudent () {
    if (firstName.value =="" || lastName.value =="" || userEmail.value =="" || userPassword.value =="") {
        alert("Kindly fill all fileds")
    }else{
    var mydate = new Date() 
    var Student ={
    firstname : firstName.value,
    lastname :lastName.value,
    useremail:userEmail.value,
    password1:userPassword.value,
    matricNo : `SQI${Math.round(Math.random()*1000000)}`,
    time : mydate 
}
}
    allStudent.push(Student);
    console.log(allStudent);

    firstName.value=""
    lastName.value =""
    userEmail.value =""
    userPassword.value =""
    showStudent()

};
function showStudent() {
    disp.innerHTML =""
    disp.innerHTML+=`
           
<div class="overflow-x-auto relative shadow-md sm:rounded-lg">
<table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="py-3 px-6">
                FistName
            </th>
            <th scope="col" class="py-3 px-6">
                lastName
            </th>
            <th scope="col" class="py-3 px-6">
                Email
            </th>
            <th scope="col" class="py-3 px-6">
                Password
            </th>
            <th scope="col" class="py-3 px-6">
                Matric NO
            </th>
            </th>
            <th scope="col" class="py-3 px-6">
                Registration Date
            </th>
            <th scope="col" class="py-3 px-6">
                Action
            </th>
        </tr>
    </thead>`
    for (let i = 0; i < allStudent.length; i++) {

        disp.innerHTML +=`<tbody>
        <tr class="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
            <th scope="row" class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            ${allStudent[i].firstname}
            </th>
            <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            ${allStudent[i].lastname}
            </td>
            <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            ${allStudent[i].useremail}
            </td>
            <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            ${allStudent[i].password1}
            </td>
            <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            ${allStudent[i].matricNo}
            </td>
            <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            ${allStudent[i].time}
            </td>
            <td class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white">
            <button onclick="editStudent(${i})" class="border-4 bg-green-400 px-4">EDIT</button>
                 <button onclick="deleteStudent(${i})" class="border-4 bg-red-400 px-4">DELETE</button>
            </td>
        </tr>
        </tbody>`
    }
}
function deleteStudent(index) {
    allStudent.splice(index,1)
    showStudent()
}

function editStudent(ind) {
    // var StudentEdit = Student
    // allStudent.splice(ind,1,StudentEdit)
    // var par = allStudent[ind]
    // console.log(par)
//    StudentEdit = prompt("ebter e")
    showStudent();
}