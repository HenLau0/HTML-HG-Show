
const listings = document.getElementById('link-list');

function appendListing(url, title) {
    li = document.createElement("li");
    a = document.createElement("a");
    linkText = document.createTextNode(title);
    a.title = title;
    a.href = url;
    a.appendChild(linkText);
    li.appendChild(a);
    listings.appendChild(li);
}

function clearListings() {
    listings.innerHTML = "";
}

function houseSearch() {

    const monthly = document.getElementById('MonPay').value;
    const down = document.getElementById('DowPay').value;

    // Defaults
    let url = "http://siarto.com";
    let title = "test";

    switch(down) {
        case "10000":
            if (monthly >= 800 && monthly <= 1200) {
                appendListing("https://siarto.com", "10k homes, Level 1 monthly");
            } else if (monthly > 1200 && monthly <= 1600) {
                appendListing("https://siarto.com", "10k homes, Level 2 monthly");
            } else if (monthly > 1600 && monthly <= 2000) {
                appendListing("https://siarto.com", "10k homes, Level 3 monthly");
            } else if (monthly > 2000 && monthly <= 2400) {
                appendListing("https://siarto.com", "10k homes, Level 4 monthly");
            } else if (monthly > 2400 && monthly <= 2800) {
                appendListing("https://siarto.com", "10k homes, Level 5 monthly");
            } else if (monthly > 2800) {
                appendListing("https://siarto.com", "10k homes, Level 6 monthly");
            }
            break;
        case "20000":
            appendListing("https://siarto.com", "20k homes");
            break;
        case "30000":
            appendListing("https://siarto.com", "30k homes");
            break;
        case "40000":
            appendListing("https://siarto.com", "40k homes");
            break;
        case "50000":
            appendListing("https://siarto.com", "50k homes");
            break;
        case "60000":
            appendListing("https://siarto.com", "60k homes");
            break;
    }
}

// This uses a submit action listener to check for a submitted form.
// It them "prevents the default form from submitting" and allows you to apply JS to the request
document.getElementById('listing-details').addEventListener("submit", function(e) {
    // This prevents the default form submission function from happening (HTML default)
    e.preventDefault();

    // Remove the last set of listings that were provided
    clearListings();

    // Search and return a new set of listings
    houseSearch();
  }
);