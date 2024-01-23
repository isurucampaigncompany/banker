document.addEventListener("DOMContentLoaded", function () {
  // Function to update message and apply selected styling
  function updateMessageAndStyle(buttonId, messageHtml) {
    document.getElementById("message").innerHTML = messageHtml;

    // Remove selected class from the currently selected button
    const currentlySelectedButton = document.querySelector(
      ".your-button-class.selected"
    );
    if (currentlySelectedButton) {
      currentlySelectedButton.classList.remove("selected");
    }

    // Add selected class to the clicked button
    const clickedButton = document.getElementById(buttonId);
    if (clickedButton) {
      clickedButton.classList.add("selected");
    }
  }

  // Event listeners for buttons
  document.getElementById("message-01").addEventListener("click", function () {
    updateMessageAndStyle(
      "message-01",
      "<p><strong>Leave me to farm</strong></p>"
    );
  });

  document.getElementById("message-02").addEventListener("click", function () {
    updateMessageAndStyle(
      "message-02",
      "<p><strong>Leave me to farm xx</strong></p> "
    );
  });

  document.getElementById("message-03").addEventListener("click", function () {
    updateMessageAndStyle(
      "message-03",
      "<p><strong>Leave me to farm yyy</strong></p> "
    );
  });

  document.getElementById("message-04").addEventListener("click", function () {
    updateMessageAndStyle(
      "message-04",
      "<p><strong>Leave me to farm ccc</strong></p> "
    );
  });

  // Set default message and selected state on page load
  updateMessageAndStyle(
    "message-01",
    "<p><strong>Leave me to farm zzz</strong></p> "
  );
});

// Function to copy content from div to textarea
function copyContentToTextarea(mutations) {
  var divContent = document.getElementById("message").innerHTML;
  document.getElementById("contentTextarea").value = divContent;
}

// Create a new MutationObserver instance
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(copyContentToTextarea);
});

// Start observing the `div` with the ID `contentDiv`
// for changes in the child nodes or subtree
observer.observe(document.getElementById("message"), {
  childList: true,
  subtree: true,
  characterData: true,
});

// Optional: Stop observing changes after some condition is met
// observer.disconnect();

document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".mycheckbox").forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      var checkboxNumber =
        checkbox.id === "checkbox" ? "" : "-" + checkbox.id.split("-")[1];
      var inputField = document.getElementById("input" + checkboxNumber);
      inputField.value = checkbox.checked ? checkbox.dataset.email : "";
    });
  });
});
