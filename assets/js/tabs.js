// Script for the tabs component used in the docs.

function tabsComponent(tabGroup) {
  const tabButtons = tabGroup.querySelectorAll(".tab-button");
  const tabContents = tabGroup.querySelectorAll(".tab-content");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // Hide all tab content within this group
      tabContents.forEach((content) => {
        content.style.display = "none";
      });

      // Remove the active class from all tab buttons within this group
      tabButtons.forEach((btn) => {
        btn.classList.remove("active");
      });

      // Show the current tab's content and add the active class to the button
      const tabName = button.getAttribute("data-tab");
      tabGroup.querySelector(`#${tabName}`).style.display = "block";
      button.classList.add("active");
    });
  });

  // Set the first tab to be visible
  if (tabButtons.length > 0) {
    tabButtons[0].click();
  }
}

// Wait for the DOM to fully load
document.addEventListener("DOMContentLoaded", () => {
  const tabGroups = document.querySelectorAll(".tab-group");
  tabGroups.forEach((group) => {
    // Initialize the tabs functionality
    tabsComponent(group);
  });
});
