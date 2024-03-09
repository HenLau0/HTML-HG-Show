// Add JavaScript below
//document.body.style.backgroundColor = ;
const btn = document.querySelector("button");

function housesearch() {
    var month = document.getElementById('MonPay').value
    var down = document.getElementById('DowPay').value
    if (down > 0 && down < 20000) {
        alert("output1")
    }
  }

btn.addEventListener("click", housesearch);
//     if (searchTerm === 'banana') {
//        document.getElementById('output').innerHTML = 'Search term matched: banana';
//    } else {
//        document.getElementById('output').innerHTML = 'No matching result for the search term: ' + searchTerm;
//   }
//}

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

appendListing("link-list", "https://sirto.com", "Jeff Siarto");