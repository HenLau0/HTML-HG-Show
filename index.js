// Add JavaScript below
//document.body.style.backgroundColor = ;
const btn = document.querySelector("button");

// This is not very elegent, but it does the trick
// Pass this function the ID of the list, a URL, and title
function appendListing(listID, url, title) {
    list = document.getElementById(listID);
    li = document.createElement("li");
    a = document.createElement("a");
    linkText = document.createTextNode(title);
    a.title = title;
    a.href = url;
    a.appendChild(linkText);
    li.appendChild(a);
    list.appendChild(li);
}

function housesearch() {
    var month = document.getElementById('MonPay').value
    var down = document.getElementById('DowPay').value
    if (down == 10000) {
        if (month >= 800 && month <= 1200){
            appendListing("link-list", url, title)
        }
        if (month > 1200 && month <= 1600){
            appendListing("link-list", url, "test")
        }
        if (month > 1600 && month <= 2000){
            appendListing("link-list", url, title)
        }
        if (month >= 2000 && month <= 2400){
            appendListing("link-list", url, title)
        }
        if (month >= 2400 && month <= 2800){
            appendListing("link-list", url, title)
        }
        if (month >= 2800 && month <= 3200){
            appendListing("link-list", url, title)
        }
        if (month >= 800 && month <= 1200){
            appendListing("link-list", url, title)
        }
    }
    if (down == 20000) {
        if (month >= 800 && month <= 1200){
            appendListing("link-list", url, title)
        }
        if (month > 1200 && month <= 1600){
            appendListing("link-list", url, title)
        }
        if (month > 1600 && month <= 2000){
            appendListing("link-list", url, title)
        }
        if (month >= 2000 && month <= 2400){
            appendListing("link-list", url, title)
        }
        if (month >= 2400 && month <= 2800){
            appendListing("link-list", url, title)
        }
        if (month >= 2800 && month <= 3200){
            appendListing("link-list", url, title)
        }
        if (month >= 800 && month <= 1200){
            appendListing("link-list", url, title)
        }
    }
    if (down == 30000) {
        if (month >= 800 && month <= 1200){
            appendListing("link-list", url, title)
        }
        if (month > 1200 && month <= 1600){
            appendListing("link-list", url, title)
        }
        if (month > 1600 && month <= 2000){
            appendListing("link-list", url, title)
        }
        if (month >= 2000 && month <= 2400){
            appendListing("link-list", url, title)
        }
        if (month >= 2400 && month <= 2800){
            appendListing("link-list", url, title)
        }
        if (month >= 2800 && month <= 3200){
            appendListing("link-list", url, title)
        }
        if (month >= 800 && month <= 1200){
            appendListing("link-list", url, title)
        }
    }
    if (down == 40000) {
        if (month >= 800 && month <= 1200){
            appendListing("link-list", url, title)
        }
        if (month > 1200 && month <= 1600){
            appendListing("link-list", url, title)
        }
        if (month > 1600 && month <= 2000){
            appendListing("link-list", url, title)
        }
        if (month >= 2000 && month <= 2400){
            appendListing("link-list", url, title)
        }
        if (month >= 2400 && month <= 2800){
            appendListing("link-list", url, title)
        }
        if (month >= 2800 && month <= 3200){
            appendListing("link-list", url, title)
        }
        if (month >= 800 && month <= 1200){
            appendListing("link-list", url, title)
        }
    }
    if (down == 50000) {
        if (month >= 800 && month <= 1200){
            appendListing("link-list", url, title)
        }
        if (month > 1200 && month <= 1600){
            appendListing("link-list", url, title)
        }
        if (month > 1600 && month <= 2000){
            appendListing("link-list", url, title)
        }
        if (month >= 2000 && month <= 2400){
            appendListing("link-list", url, title)
        }
        if (month >= 2400 && month <= 2800){
            appendListing("link-list", url, title)
        }
        if (month >= 2800 && month <= 3200){
            appendListing("link-list", url, title)
        }
        if (month >= 800 && month <= 1200){
            appendListing("link-list", url, title)
        }
    }
    if (down == 60000) {
        if (month >= 800 && month <= 1200){
            appendListing("link-list", url, title)
        }
        if (month > 1200 && month <= 1600){
            appendListing("link-list", url, title)
        }
        if (month > 1600 && month <= 2000){
            appendListing("link-list", url, title)
        }
        if (month >= 2000 && month <= 2400){
            appendListing("link-list", url, title)
        }
        if (month >= 2400 && month <= 2800){
            appendListing("link-list", url, title)
        }
        if (month >= 2800 && month <= 3200){
            appendListing("link-list", url, title)
        }
        if (month >= 800 && month <= 1200){
            appendListing("link-list", url, title)
        }
    }
  }

btn.addEventListener("click", housesearch);
//     if (searchTerm === 'banana') {
//        document.getElementById('output').innerHTML = 'Search term matched: banana';
//    } else {
//        document.getElementById('output').innerHTML = 'No matching result for the search term: ' + searchTerm;
//   }
//}



//appendListing("link-list", "https://sirto.com", "Jeff Siarto");
