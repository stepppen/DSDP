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


    let addBTN = document.querySelector(".addUsers");
    addBTN.addEventListener("click", function () {
        let userOverlay = document.querySelector(".overlay-wrapper");
        userOverlay.classList.remove("hidden");
    });

    let confirmBTN = document.querySelector(".confirmUsers");
    confirmBTN.addEventListener("click", function () {
        let userOverlay = document.querySelector(".overlay-wrapper");
        userOverlay.classList.add("hidden");
    });
});
