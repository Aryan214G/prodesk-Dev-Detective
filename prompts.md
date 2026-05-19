1) what element do I use in html to display avatar image?

2) Why do I need to mention await for retrieving json from the response object? 

3) How do I render a UI spinner or "Loading..." indicator while the profile is being fetched?

4) How do I catch a 404 Not Found response from API?

5) statusLabel does not update when I get a 404 response:

let username = "";
const searchField = document.getElementById("search-field");
const avatar = document.getElementById("avatar");

const profileName = document.getElementById("profile-name");

const profileBio =  document.getElementById("profile-bio");

const loading = document.getElementById("loading");

const statusLabel = document.getElementById("status");

document.getElementById("search-btn").addEventListener("click", () => {
    
    username = searchField.value;
    fetchProfile();
})


async function fetchProfile(){

    try {
        const url =`https://api.github.com/users/${username}`;
        
        loading.textContent = "Loading...";
    
        const response = await fetch(url);
    
        const data = await response.json();
    
        loading.textContent = "";
    
        renderProfile(data);

    } catch (error) {
        
        if (!response.ok) {

            statusLabel.textContent = "User not found";
        }
    }
    finally {
        loading.textContent = "";
    }
    
}

6) How do I cleanup this created_at date from the data: 2011-01-25T18:44:36Z

7) How do I hide the card?