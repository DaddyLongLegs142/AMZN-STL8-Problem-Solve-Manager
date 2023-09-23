function displayWash() {
    //Get Selected Date
    const date = Document.getElementById(/*date selector*/).value;

    //Get Selected Shift
    const shift = Document.getElementById(/*shift selector*/).value;

    //set proper shift identifier in title -- e.g. FHN, BHD...

    //fetch relevant data from database

    //fill data into final view

}

function navToSubmitForm() {
    Document.getElementById("main-content").innerHTML = "<app-ps-count-form></app-ps-count-form>";
    Document.getElementById("nav-submit").classList.add("active");
    Document.getElementById("nav-wash").classList.remove("active");
}

function navToWash() {
    Document.getElementById(main-content).innerHTML = "<app-ps-wash></app-ps-wash>";
    Document.getElementById("nav-wash").classList.add("active");
    Document.getElementById("nav-submit").classList.remove("active");
}