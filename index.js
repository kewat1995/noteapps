const noteContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

function updateStorage() {
  localStorage.setItem("notes", noteContainer.innerHTML);
}
createBtn.addEventListener("click", () => {
  let notes = document.createElement("p");
  let img = document.createElement("img");
  notes.className = "input-box";
  notes.setAttribute("contenteditable", "true");
  img.src = "images/delete.png";
  noteContainer.appendChild(notes).appendChild(img);
});

noteContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
   
    
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach( (nt) => {
      nt.onkeyup = function() {
        updateStorage();
        
      };
    });
  }
});

function saveData() {
  noteContainer.innerHTML = localStorage.getItem("notes");
}
saveData(); 
