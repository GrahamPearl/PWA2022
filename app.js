'use strict';

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
        console.log('ServiceWorker registration failed: ', err);
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
    var html = []
    $.each(row, function(key, value) {
        html.push('<p><b>' + key + ':</b> ' + value + '</p>')
    })
    return html.join('')
}

function toggleElement(elementID) {
    let item = document.getElementById(elementID);
    if (item != null)
        if (item.style.display != "none") {
            item.style.display = "none";
        } else {
            item.style.display = "block";
        }
}

if (document.getElementById("navList") != null) {
    let nav = document.getElementById("navList");
    const nav_items = {
        'Book': 'citation_book',
        'Journal': 'citation_journal',
        'Movie': '#',
        'Website': '#',
    };

    for (const [key, value] of Object.entries(nav_items)) {
        console.log(key, ' = ', value);
        let li = document.createElement("li");
        let link = document.createElement("a");
        link.className = "dropdown-item";
        link.innerText = key;
        link.href = "#" + value;
        link.onclick = toggleElement(key);
        li.appendChild(link);
        nav.appendChild(li);
    }
}