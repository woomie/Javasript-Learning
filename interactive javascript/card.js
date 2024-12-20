class User{
    constructor(level, imgURL, points,name, description, color){
        this.level = level;
        this.imgURL = imgURL;
        this.points = points;
        this.name = name;
        this.description= description;
        this.color = color;
    }
}

let wunmi = new User(10,"https://aras.kntu.ac.ir/wp-content/uploads/2019/05/hoodie-.png", 5493, "Wunmi", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat mauris, at molestie lacus. Nam vestibulum sodales odio utpulvinar.", "red" )
let mary = new User(11,"https://icon-library.com/images/icon-avatar/icon-avatar-6.jpg", 2343, "Mary", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat mauris, at molestie lacus. Nam vestibulum sodales odio utpulvinar.", "green" )
let jane = new User(12,"https://www.pngarts.com/files/5/User-Avatar-PNG-Free-Download.png", 6575, "Jane", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat mauris, at molestie lacus. Nam vestibulum sodales odio utpulvinar.", "yellow" )
let tobi = new User(13,"https://www.shareicon.net/data/512x512/2016/05/24/770137_man_512x512.png", 7897, "Tobi", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce volutpat mauris, at molestie lacus. Nam vestibulum sodales odio utpulvinar.", "blue" )

let users=[]
users.push(wunmi);
users.push(mary);
users.push(jane);
users.push(tobi);

function addUserToDOM(user){
    const cardContainer = document.getElementById("card-container")
    cardContainer.innerHTML +=`<div class="card">
    <div class="left-info" style="--background-color: ${user.color}"> 
        <div>
            <p id="user-level">level ${user.level}</p>
        </div>
        <div>
            <img src=${user.imgURL} alt="male avatar with beard">
        </div>
        <div>
            <p id="user-points-${user.name}">${user.points} Points</p>
        </div>
        <div class = "flex-wrap full-width">
            <div>
                <button class ="plus-minus-btn" onclick="decrementPoints('${user.name}')">-</button>
            </div>
            <div>
                <button class ="plus-minus-btn" onclick="incrementPoints('${user.name}')">+</button>
            </div>
            
        </div>   
    </div>

   
    <div class="right-info">
        <header>
            <h1>${user.name}</h1>
        </header>
        <div>
            <p id="user-description">${user.description}</p>
        </div>
        <div class="linkedin-link">
            <a href="#"><i class="fa fa-linkedin-square"></i>
            </a> 
        </div>
                    
    </div>
    </div> 
    `
}

function renderUsersToDOM(users){
    document.getElementById("card-container").innerHTML="";
    for (user of users){
        addUserToDOM(user)
    }
}

renderUsersToDOM(users)

function incrementPoints(userName){
    // find user in array
    const user = users.find((user)=>user.name === userName);
    //increase user points
    user.points+=1;

    //update the DOM w new points
    const pointsLabel = document.getElementById(`user-points-${user.name}`);
    pointsLabel.textContent = `${user.points} points`

}

function decrementPoints(userName){
    const user = users.find((user)=>user.name === userName);
    user.points -=1;

    //update the DOM w new points
    const pointsLabel = document.getElementById(`user-points-${user.name}`);
    pointsLabel.textContent = `${user.points} points`
}

//function to sort users
function sortUsers(){
    let property =document.getElementById("sortBy").value;
    users.sort((a,b)=> (a[property] > b[property])? -1: 1);
    renderUsersToDOM(users);
}