
  // Select elements
const searchInput = document.querySelector(".search-bar input");
const searchButton = document.querySelector(".search-bar button");
const courses = document.querySelectorAll(".course-card");

// 🔍 Function to filter courses
function filterCourses() {
  let query = searchInput.value.toLowerCase().trim();

  courses.forEach(course => {
    let title = course.querySelector("h4").innerText.toLowerCase();

    if (title.includes(query)) {
      course.style.display = "block"; // show
    } else {
      course.style.display = "none"; // hide
    }
  });
}

// Run search when clicking button
searchButton.addEventListener("click", filterCourses);

// Run search as user types
searchInput.addEventListener("keyup", filterCourses);

