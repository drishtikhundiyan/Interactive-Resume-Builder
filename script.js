const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const skillsInput = document.getElementById("skills");
const educationInput = document.getElementById("education");
const experienceInput = document.getElementById("experience");

nameInput.addEventListener("input", () => {
    document.getElementById("r-name").textContent = nameInput.value || "Your Name";
});

emailInput.addEventListener("input", () => {
    document.getElementById("r-email").textContent = "Email: " + (emailInput.value || "example@email.com");
});

phoneInput.addEventListener("input", () => {
    document.getElementById("r-phone").textContent = "Phone: " + (phoneInput.value || "0000000000");
});

skillsInput.addEventListener("input", () => {
    document.getElementById("r-skills").textContent = skillsInput.value || "Your skills here";
});

educationInput.addEventListener("input", () => {
    document.getElementById("r-education").textContent = educationInput.value || "Your education here";
});

experienceInput.addEventListener("input", () => {
    document.getElementById("r-experience").textContent = experienceInput.value || "Your experience here";
});
const photoInput = document.getElementById("photo");
const resumePhoto = document.getElementById("r-photo");

photoInput.addEventListener("change", () => {
    const file = photoInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function () {
            resumePhoto.src = reader.result;
            resumePhoto.style.display = "block";
        };

        reader.readAsDataURL(file);
    }
});
function printResume() {
    window.print();
}