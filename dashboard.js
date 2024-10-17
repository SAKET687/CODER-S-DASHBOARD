window.onload = function() {
    // Function to check if a cookie exists
    function getCookie(name) {
        let cookieArr = document.cookie.split(";");

        for (let i = 0; i < cookieArr.length; i++) {
            let cookiePair = cookieArr[i].split("=");

            // Removing whitespace at the beginning of the cookie name and compare it with the given string
            if (name === cookiePair[0].trim()) {
                return decodeURIComponent(cookiePair[1]);
            }
        }

        // Return null if the cookie is not found
        return null;
    }

    // Specify the cookie you are looking for (e.g., "sessionToken")
    let sessionCookie = getCookie("sessionToken");

    // Redirect to index page if cookie doesn't exist
    if (!sessionCookie) {
        window.location.href = "index.html";
    }
};