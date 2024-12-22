function copyText(txt) {
    navigator.clipboard.writeText(txt).then(
        () => {
          /* clipboard successfully set */
          document.getElementById("alert").style.display = "inline"
          setTimeout(() => {
            document.getElementById("alert").style.display = "none"
          }, 2000);

        },
        () => {
          /* clipboard write failed */
          alert("Clipboard copying failed")
        },
      );
  }


const deletePassword=(Website) => {
 let data = localStorage.getItem("passwords");
 let arr = JSON.parse(data);
 arrUpdate = arr.filter((e) =>{
    return e.Website!= Website
 })

 localStorage.setItem("passwords", JSON.stringify(arrUpdate));
 alert(`Sucesfull Delete ${Website} Password`)
 showPaswords()
 

}


const showPaswords=()=> {

let tb = document.querySelector("table")
let data = localStorage.getItem("passwords")


if(data == null){
    tb.innerHTML = "No Data Found";
}
else{
    tb.innerHTML= `
       <tr>
                <th>Website</th>
                <th>UserName</th>
                <th>Password</th>
                <th>Delete</th>
            </tr>`

    let arr = JSON.parse(data);
    let str =""
    for(let i=0; i<arr.length; i++){
      const element = arr[i]
   
     str +=`<tr>
      <td>${element.Website}  <img onclick="copyText('${element.website}')" src="./copy.svg" alt="Copy Button" width="10" width="10" height="10"></td>
      <td>${element.username}<img onclick="copyText('${element.website}')" src="./copy.svg" alt="Copy Button" width="10" width="10" height="10"></td>
      <td>${element.password}<img onclick="copyText('${element.website}')" src="./copy.svg" alt="Copy Button" width="10" width="10" height="10"></td>
      <td><buttton class="btnsm" onclick="deletePassword('${element.Website}')">Delete</button></td>
</tr>`
}
tb.innerHTML = tb.innerHTML + str;
}
}

showPaswords()

document.querySelector(".btn").addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("Clicked");
    console.log(username.value, Password.value);

    let passwords = localStorage.getItem("passwords");
    console.log(passwords);

    if(passwords == null){
        let json =[];
        json.push(
          {
            Website:Website.value,
            username:username.value, 
            password: Password.value
          }
        );
        
        alert("Password  Save");
        localStorage.setItem("passwords", JSON.stringify(json));


    }

    else
    {
        let json =JSON.parse(localStorage.getItem("passwords"));
        json.push({
          Website:Website.value,
          username:username.value, 
          password: Password.value
        });
        alert("Password  Save");
        localStorage.setItem("passwords", JSON.stringify(json));
        showPaswords()

    }

    Website.value=""
    username.value=""
    Password.value=""

})