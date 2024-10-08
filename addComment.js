window.addEventListener("DOMContentLoaded", (event) => {
    const postBTN = document.querySelector("#btn-post")
    postBTN.addEventListener("click", function () {
        const newComment = document.getElementById("new-comment").value;
        let warning = document.querySelector("#emailwarning");

        if (newComment !== "") {
            let commentContainer = document.querySelector(".comment-container");
            let commentWrapper = document.createElement("div");
            commentWrapper.classList.add("comment-item-wrapper");

            // Create comment element
            let commentElement = document.createElement("div");
            commentElement.classList.add("individualComment");
            commentElement.innerHTML = newComment;

            // mod button
            let commentButton = document.createElement("button");
            commentButton.classList.add("modButton");
            commentButton.innerHTML = '<span class="material-symbols-outlined">more_vert</span>';

            // complete button
            let completeButton = document.createElement("button");
            completeButton.classList.add("completeButton");
            completeButton.innerHTML = '<i class="material-symbols-outlined">check_circle</i>';

            // Add to wrapper
            commentWrapper.appendChild(commentElement);
            commentWrapper.appendChild(commentButton);
            commentWrapper.appendChild(completeButton);

            // Add wrapper
            commentContainer.appendChild(commentWrapper);

            document.getElementById("new-comment").value = "";
            warning.classList.add("hidden");
        } else {
            warning.classList.remove("hidden");
        }

        let completedState = document.querySelector(".completeButton");
        completedState.addEventListener("click", function () {
            let commentSection = document.querySelector(".comment-item-wrapper");
            commentSection.classList.add("taskCompleted")
        })

        let modState = document.querySelector(".modButton");
        modState.addEventListener("change", function () {
            let commentSection = document.querySelector(".settingsPopup");

            if (modState.checked) {
                commentSection.classList.remove("hidden")
            } else {
                commentSection.classList.add("hidden")
            }
        });
        //opekfosefopek

    });
});
