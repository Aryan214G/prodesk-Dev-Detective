let username = "";
const searchField = document.getElementById("search-field");

//card contents
const card = document.querySelector(".card");
const avatar = document.getElementById("avatar");
const profileName = document.getElementById("profile-name");
const profileBio =  document.getElementById("profile-bio");
const joinDate =  document.getElementById("join-date");
const portfolio = document.getElementById("portfolio-link");

const loading = document.getElementById("loading");

const statusLabel = document.getElementById("status");

document.getElementById("search-btn").addEventListener("click", () => {
    
    username = searchField.value;
    
    clearProfile();
    fetchProfile();
})


async function fetchProfile(){

    try {
        const url =`https://api.github.com/users/${username}`;
        
        loading.textContent = "Loading...";
    
        const response = await fetch(url);
    
        //check for error
        if (!response.ok) {

            throw new Error("User not found");
        }

        const data = await response.json();
        console.log(data);
        
        loading.textContent = "";
    
        renderProfile(data);

    } catch (error) {
            statusLabel.textContent = error.message;
        
    }
    finally {
        loading.textContent = "";
    }
    
}


function renderProfile(data){

    avatar.src = data.avatar_url;

    profileName.textContent = data.name;

    profileBio.textContent = data.bio;

    joinDate.textContent = formatDate(data.created_at);

    portfolio.textContent = "Portfolio";

    portfolio.href = data.html_url;

    card.classList.remove("hidden");
}

function formatDate(dateString) {
    
    const date = new Date(dateString);

    return date.toLocaleDateString("en-GB", {

        day: "numeric",
        month: "long",
        year: "numeric"
    });
}

function clearProfile() {

    avatar.src = "";

    profileName.textContent = "";

    profileBio.textContent = "";

    card.classList.add("hidden");
}