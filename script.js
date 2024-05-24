const getUserBtn = document.getElementById('getUser');
const userInfoDiv = document.getElementById('userInfo');

getUserBtn.addEventListener('click', fetchRandomUser);

function fetchRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            displayUserInfo(user);
        })
        .catch(error => {
            console.error('Error fetching random user:', error);
        });
}

function displayUserInfo(user) {
    const userInfoHTML = `
        <img src="${user.picture.large}" alt="User Picture">
        <p>Gender: ${user.gender}</p>
        <p>Email: ${user.email}</p>
        <p>Phone: ${user.phone}</p>
        <p>Name: ${user.name.first} ${user.name.last}</p>
    `;
    userInfoDiv.innerHTML = userInfoHTML;
}