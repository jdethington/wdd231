// ------------- Web Certificate Courses -------------------------
import { courses } from "../data/courses.mjs";

createCourseCard(courses);

//  --------------------  Course Button Selected ------------------------
const courseButton = document.querySelector('.course-button');
courseButton.addEventListener('click', (e) => {
    const button = e.target.closest('button');
    if (!button) return;
    courseButton.querySelectorAll('button').forEach(btn => {
        btn.classList.remove('course-selected');
    });
    button.classList.add('course-selected');
});

//  --------------------  Course filters ------------------------
const allCourses = document.querySelector("#all");
allCourses.addEventListener('click', () => {
    createCourseCard(courses);
});

const cseCourses = document.querySelector('#cse');
cseCourses.addEventListener('click', () => {
    createCourseCard(courses.filter(course => course.subject == 'CSE'));
});

const wddCourses = document.querySelector('#wdd');
wddCourses.addEventListener('click', () => {
    createCourseCard(courses.filter(course => course.subject == 'WDD'));
});
/* ------------- CREATE THE BUTTON FOR EACH DISPLAYED COURSE ----------------- */
function createCourseCard(filteredCourses) {
    document.querySelector('#course-grid').innerHTML = "";

    filteredCourses.forEach(course => {
        const card = document.createElement('button');

        //  ---------- add check if completed course --------------
        if (course.completed) {
            card.innerHTML = `&#10004; ${course.subject} ${course.number}`;
        }
        else {
            card.innerHTML = `${course.subject} ${course.number}`;
        }
        card.addEventListener('click', () => { displayCourseDetails(course); });
        //  --------------------  add button ------------------------
        document.querySelector('#course-grid').appendChild(card);
    });
    //  --------------------  total credits for listed courses ------------------------
    const totalCredits = filteredCourses.reduce((total, num) => total + num.credits, 0);
    const credits = document.querySelector('#credits');
    credits.innerHTML = ` ${totalCredits}`;
}

// /* ---------- MODAL ---------- */
const courseDetails = document.querySelector('#course-details');
const closeModalButton = document.querySelector('#closeModal');

function displayCourseDetails(course) {
    courseDetails.innerHTML = '';
    courseDetails.innerHTML = `
    <button id="closeModal">❌</button>
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits</strong>: ${course.credits}</p>
    <p><strong>Certificate</strong>: ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies</strong>: ${course.technology.join(', ')}</p>
  `;
    courseDetails.showModal();

    closeModal.addEventListener("click", () => {
        courseDetails.close();
    });
}

// courseDiv.addEventListener('click', () => {
//     displayCourseDetails(course);
// });