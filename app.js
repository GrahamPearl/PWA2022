"use strict";

if ("serviceWorker" in navigator) {
    navigator.serviceWorker
        .register("/sw.js")
        .then(function(registration) {
            console.log(
                "ServiceWorker registration successful with scope: ",
                registration.scope
            );
        })
        .catch(function(err) {
            console.log("ServiceWorker registration failed: ", err);
        });
}

if (document.getElementById("submitBtn") != null) {
    let submitBtn = document.getElementById("submitBtn");
    submitBtn.addEventListener("click", function(evt) {
        evt.preventDefault();
        window.location.replace("");
        return false;
    });
}

function rowFormatter(index, row) {
    var html = [];
    $.each(row, function(key, value) {
        html.push("<p><b>" + key + ":</b> " + value + "</p>");
    });
    return html.join("");
}

function toggleElement(elementID, mode = null) {
    //alert('Clicked: ' + elementID)
    let item = document.getElementById(elementID);
    if (item != null)
        if (mode != null) item.style.display = mode;
        else if (item.style.display != "none") {
        item.style.display = "none";
    } else {
        item.style.display = "block";
    }
}

function toggleModalElement(eventId, modalId) {
    var btn = document.getElementById(eventId);

    btn.addEventListener("click", function() {
        var myModal = new bootstrap.Modal(document.getElementById(modalId));
        myModal.show();
    });
}

if (document.getElementById("navList") != null) {
    let nav = document.getElementById("navList");
    const nav_items = {
        Book: "citation_book",
        Journal: "citation_journal",
        Movie: "citation_movie",
        Website: "citation_website",
    };

    for (const [key, value] of Object.entries(nav_items)) {
        console.log(key, " = ", value);
        let li = document.createElement("li");
        let link = document.createElement("a");
        link.className = "dropdown-item btn-lg btn-primary";
        link.innerText = key;
        link.href = "#" + value;
        link.setAttribute("data-bs-toggle", "modal");
        link.setAttribute("data-bs-target", link.href);
        li.addEventListener(
            "click",
            function() {
                toggleElement(value);
            },
            false
        );
        li.appendChild(link);
        nav.appendChild(li);
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const toggle_items = {
        Book: "citation_book",
        Journal: "citation_journal",
        Movie: "citation_movie",
        Website: "citation_website",
        listCitation: "citation_list",
        listAPAFormat: "apa6formats",
        listBlogPosts: "blogposts",
    };

    toggleModalElement("Model-Event_Search", "Modal-GoogleBook");
    for (const [key, value] of Object.entries(toggle_items)) {
        toggleElement(value, "none");
    }
});