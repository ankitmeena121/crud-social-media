let form = document.getElementById("form");
let input = document.getElementById("input");
let msg = document.getElementById("msg");
let post = document.getElementById("posts");

form.addEventListener("submit",(e)=>{
    e.preventDefault();
    // console.log("button clicked");
    formValidation();
});

let formValidation = () =>{
    if(input.value === ""){
        msg.innerHTML = "Post can't be blank";
        // console.log("failure");
    }
    else{
        // console.log("success");
        msg.innerHTML = "";
        acceptData();

    }
};

let data = {};


let acceptData = () =>{
    data["text"] = input.value;
    // console.log(data);
    creatPost();
};

let creatPost = () => {
    post.innerHTML += 
    `<div>
    <p>${data.text}</p>
    <span class="options">
    <i onClick="editPost(this)" class="fa-solid fa-pen-to-square"></i>
    <i onClick="deletPost(this)" class="fa-solid fa-trash-can"></i>
    </span>
   </div>`
   input.value = "";
    
};

let deletPost = (e) => {
     e.parentElement.parentElement.remove();
}

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();

}













