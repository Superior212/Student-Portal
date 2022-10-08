let allStudents;
let allStudent;
let showBox = false;
let editObj;
let editIndex;

function getDetails() {
    allStudents = localStorage.getItem('localallStudent');
    allStudent = JSON.parse(allStudents);
    console.log(allStudent);
    showStudent()
}
function showStudent() {
    if (allStudent.length==0) {
        disp.innerHTML +=`<div class="text-center text-2xl font-bold  py-20">There is no student available</div>`
    }else{
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
}

function editStudent(index) {
    showBox = true;
    if (showBox==true) {
        modal.style.display = 'block';
    }
    editObj = allStudent[index];
    editIndex = index;
    firstName.value = editObj.firstname;
    lastName.value = editObj.lastname;
    userEmail.value = editObj.useremail
    userPassword.value = editObj.password1;
}

function deleteStudent(index) {
    allStudent.splice(index,1);
    allStudent = allStudent;
    localStorage.setItem("localallStudent", JSON.stringify(allStudent));
    disp.innerHTML ="";
    showStudent();
}
function saveChanges() {
    allStudent[editIndex] = {firstname : firstName.value,
                lastname :lastName.value,
                useremail:userEmail.value,
                password1:userPassword.value,
              matricNo: editObj.matricNo,
                time: editObj.time
            };
            console.log(allStudent);
            localStorage.setItem("localallStudent", JSON.stringify(allStudent))
            showBox = false;
            modal.style.display = 'none';
            showStudent()
}
function close1 () {
    showBox =false;
    modal.style.display = 'none';
}

