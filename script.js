function registerStudent() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        alert("Please fill all fields");
        return;
    }

    let li = document.createElement("li");
    li.textContent = `Name: ${name} | Email: ${email}`;

    document.getElementById("studentList").appendChild(li);

    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
}