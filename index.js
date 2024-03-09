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