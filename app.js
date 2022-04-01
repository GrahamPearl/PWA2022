const nav_items = [
    "1",
    "2",
    "3"
];

var nav = document.getElementById("navList");
var navItems = document.createElement("ul");

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
        console.log('ServiceWorker registration failed: ', err);
    });
}

nav_items.forEach(item => {
    let li = document.createElement("li");
    let link = document.createElement("a");
    link.className = "dropdown-item";
    link.innerText = item
    link.href = "#"
    li.appendChild(link)
    navItems.appendChild(li)
});

if (nav != null) {
    nav.appendChild(navItems);
}