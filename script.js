
function register(event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let roll = document.getElementById("roll").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    let students = JSON.parse(
        localStorage.getItem("students") || "[]"
    );

    let exists = students.some(
        student => student.email === email ||
                   student.roll === roll
    );

    if (exists) {
        document.getElementById("message").innerText =
            "Email or roll number already registered!";
        return;
    }

    students.push({
        name: name,
        roll: roll,
        email: email,
        password: password
    });

    localStorage.setItem("students", JSON.stringify(students));

    alert("Registration successful!");
    window.location.href = "login.html";
}

function login(event) {
    event.preventDefault();

    let email = document.getElementById("loginEmail").value;
    let password = document.getElementById("loginPassword").value;

    let students = JSON.parse(
        localStorage.getItem("students") || "[]"
    );

    let student = students.find(
        s => s.email === email && s.password === password
    );

    if (student) {
        document.getElementById("message").innerText =
            "Login successful! Welcome " + student.name;
    } else {
        document.getElementById("message").innerText =
            "Invalid email or password!";
        document.getElementById("message").style.color = "red";
    }
}
