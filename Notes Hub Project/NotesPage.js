window.onload = function () {
    const searchInput = document.querySelector(".search-bar input");
    const subjectFilter = document.querySelector(".search-bar select");
    const noteCards = document.querySelectorAll(".note-card");

    function filterNotes() {
      const searchText = searchInput.value.toLowerCase();
      const subjectValue = subjectFilter.value.toLowerCase();

      noteCards.forEach(card => {
        const title = card.querySelector("h3").textContent.toLowerCase();
        const text = card.querySelector("p").textContent.toLowerCase();
        const subject = card.getAttribute("data-subject")?.toLowerCase() || "";

        const matchesSearch = title.includes(searchText) || text.includes(searchText);
        const matchesSubject = subjectValue === "all" || subject.includes(subjectValue);

        if (matchesSearch && matchesSubject) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }

    searchInput.addEventListener("keyup", filterNotes);
    subjectFilter.addEventListener("change", filterNotes);
  };




