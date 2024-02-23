var istatus = document.querySelector("h5")

var add = document.querySelector("#addFriend")

var check = 0 

// var remove = document.querySelector("#removeFriend")

add.addEventListener("click",function(){
    if(check == 0)
    {
        istatus.innerHTML = "Friends"
        istatus.style.color = "green"
        add.innerHTML = "Remove Friend"
        add.style.backgroundColor = "#dadada"
        add.style.color = "black"
        check = 1
    }
    else{
        istatus.innerHTML = "Strangers"
        istatus.style.color = "red"
        add.innerHTML = "Add Friend" 
        add.style.backgroundColor = "cadetblue"
        add.style.color = "white"
        check = 0
    }
    
})  

// remove.addEventListener("click",function(){
//     istatus.innerHTML = "Strangers"
//     istatus.style.color = "red"
// })
 

