(function () {
  document.addEventListener("DOMContentLoaded", () => {
    initializeTabGroups();
    observeTabGroups();
  });

  function tabsComponent(tabGroup) {
    const tabButtons = tabGroup.querySelectorAll(".tab-button");
    const tabContents = tabGroup.querySelectorAll(".tab-content");

    tabButtons.forEach(button => {
      button.addEventListener("click", () => {
        // Hide all active button and content within this group
        tabButtons.forEach(btn => {
          btn.classList.remove("active");
        });
        tabContents.forEach(content => {
          content.classList.remove("active");
        });

        // Show the current tab's active button and content
        button.classList.add("active");
        const tabName = button.getAttribute("data-tab");
        const targetTabContent = tabGroup.querySelector(`#${tabName}`);
        if (targetTabContent) {
          targetTabContent.classList.add("active");
        } else {
          console.error(`Tab content with ID ${tabName} not found.`);
        }
      });
    });

    // Set the first tab to be visible
    if (tabButtons.length > 0) {
      tabButtons[0].click();
    } else {
      console.error("No tab buttons found.");
    }
  }

  function initializeTabGroups() {
    const tabGroups = document.querySelectorAll(".tab-group");
    tabGroups.forEach(group => {
      // Initialize the tabs functionality
      tabsComponent(group);
    });
  }

  function observeTabGroups() {
    const tabGroups = document.querySelectorAll(".tab-group");

    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            tabsComponent(entry.target);
            observer.unobserve(entry.target); // Stop observing once initialized
          }
        });
      },
      { threshold: 0.1 }
    );

    tabGroups.forEach(group => {
      observer.observe(group);
    });
  }

  // Listen for HTMX afterSwap event to re-initialize tab groups
  document.body.addEventListener("htmx:afterSwap", () => {
    window.requestAnimationFrame(() => {
      initializeTabGroups();
      observeTabGroups();
    });
  });
})();
