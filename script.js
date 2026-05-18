let username = "";
const searchField = document.getElementById("search-field");
const avatar = document.getElementById("avatar");

const profileName = document.getElementById("profile-name");

const profileBio =  document.getElementById("profile-bio");


document.getElementById("search-btn").addEventListener("click", () => {
    
    username = searchField.value;
    fetchProfile();
})

async function fetchProfile(){

    const url =`https://api.github.com/users/${username}`;
    
    const response = await fetch(url);

    const data = await response.json();

    console.log(data);

    renderProfile(data);
    
}

function renderProfile(data){

    avatar.src = data.avatar_url;

    profileName.textContent = data.name;

    profileBio.textContent = data.bio;
}