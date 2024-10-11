window.addEventListener("DOMContentLoaded", () => {
    const postBTN = document.querySelector("#btn-post");

    postBTN.addEventListener("click", function () {
        const newComment = document.getElementById("new-comment").value;
        const warning = document.querySelector("#emailwarning");
        

        if (newComment.trim() !== "") {
            const commentContainer = document.querySelector(".comment-container");

            // wrapper
            const commentWrapper = document.createElement("div");
            commentWrapper.classList.add("comment-item-wrapper");

            // comment element
            const commentElement = document.createElement("div");
            commentElement.classList.add("individualComment");
            commentElement.innerHTML = newComment;

            // modButton
            const commentButton = document.createElement("button");
            commentButton.classList.add("modButton");
            commentButton.innerHTML = '<span class="material-symbols-outlined">more_vert</span>';

            // completeButton
            const completeButton = document.createElement("button");
            completeButton.classList.add("completeButton");
            completeButton.innerHTML = '<i class="material-symbols-outlined">check_circle</i>';

            // settingsPopup
            const settingsPopup = document.createElement("div");
            settingsPopup.classList.add("settingsPopup", "hidden");
            settingsPopup.innerHTML = `
                <button class="popupBtn">Delete</button>
                <button class="popupBtn">Modify</button>
            `;

            // Add everything to comment wrapper
            commentWrapper.appendChild(commentElement);
            commentWrapper.appendChild(commentButton);
            commentWrapper.appendChild(completeButton);
            commentWrapper.appendChild(settingsPopup); 

            commentContainer.appendChild(commentWrapper);

            document.getElementById("new-comment").value = "";
            warning.classList.add("hidden");

            // Mark comment as complete
            completeButton.addEventListener("click", function () {
                commentWrapper.classList.toggle("taskCompleted");
            });

            // Showing/hiding popup
            commentButton.addEventListener("click", function () {
                settingsPopup.classList.toggle("hidden"); 
            });

        } else {
            warning.classList.remove("hidden");
        }
    });

    let sendBTN = document.querySelector("#sendBTN");
    let inviteBTN = document.querySelector(".confirmUsers");
    let inviteOverlay = document.querySelector(".invite-overlay-wrapper");
    let userOverlay = document.querySelector(".collab-overlay-wrapper");
    

    sendBTN.addEventListener("click", function () {
        const firstArea = document.getElementById("firstArea").value;
        const secondArea = document.getElementById("secondArea").value;
        const thirdArea = document.getElementById("thirdArea").value;
        const userWarning = document.querySelector("#userwarning");
        const userWrapper = document.querySelector(".collabWrapper");
    
        if (firstArea.trim() !== "" && secondArea.trim() !== "" && thirdArea.trim() !== "") {
            userWarning.classList.add("hidden");
            userOverlay.classList.remove("hidden");
            inviteOverlay.classList.add("hidden");
    
            // Create new collaboratorItem
            const newUser = document.createElement("div");
            newUser.classList.add("collaboratorItem");
    
            // Create inner iconText container (left side)
            const newUserElement = document.createElement("div");
            newUserElement.classList.add("iconText");
    
            // Create collaborator icon
            const collaboratorIcon = document.createElement("div");
            collaboratorIcon.classList.add("collaborator-icon");
    
            // Create name element and assign the value of firstArea
            const newUserName = document.createElement("p");
            newUserName.classList.add("collaborator-name");
            newUserName.textContent = firstArea;
    
            // Add collaborator icon and name to the iconText container
            newUserElement.appendChild(collaboratorIcon); // Add icon
            newUserElement.appendChild(newUserName);      // Add name
    
            // Create more_vert icon (right side)
            const moreIcon = document.createElement("span");
            moreIcon.classList.add("material-symbols-outlined", "closeIcon");
            moreIcon.textContent = "more_vert";
    
            // Add iconText div to the newUser div (left side)
            newUser.appendChild(newUserElement);
    
            // Add more_vert icon to the newUser div (right side)
            newUser.appendChild(moreIcon);
    
            // Append the newUser to the userWrapper
            userWrapper.appendChild(newUser);
    
        } else {
            userWarning.classList.remove("hidden");
            console.log("error");
        }
    });
    
    


    let confirmBTN = document.querySelector(".closeBTN");
    confirmBTN.addEventListener("click", function () {
        let userOverlay = document.querySelector(".collab-overlay-wrapper");
        userOverlay.classList.add("hidden");
    });


    let addBTN = document.querySelector(".addUsers");
    addBTN.addEventListener("click", function () {
        let userOverlay = document.querySelector(".collab-overlay-wrapper");
        userOverlay.classList.remove("hidden");
    });

    
    inviteBTN.addEventListener("click", function () {

        userOverlay.classList.add("hidden");
        inviteOverlay.classList.remove("hidden");
        
    });

    let backBTN = document.querySelector(".backBTN");
    backBTN.addEventListener("click", function () {
        let inviteOverlay = document.querySelector(".invite-overlay-wrapper");
        let userOverlay = document.querySelector(".collab-overlay-wrapper");
        inviteOverlay.classList.add("hidden");
        userOverlay.classList.remove("hidden");
        
        
    });

    



});
