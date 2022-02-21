document.getElementById('add-border').addEventListener('click', function(){
    const container = document.getElementById('friend-container');
    container.style.border='5px solid aqua';
    //container.style.backgroundColor='pink';

    

});

function addBackgroundColor(){
    const friends = document.getElementsByClassName('friend');

    
    for(const friend of friends){
        friend.style.backgroundColor = 'lightblue';

    }
}


document.getElementById('add-friend').addEventListener('click', function(){
    const container = document.getElementById('friend-container');
    const friendDiv = document.createElement('div');
    friendDiv.classList.add('friend');
    friendDiv.innerHTML = ` <h3 class="friend-name">new frined</h3>
                        <p>Atque natus illum accusantium at.</p>`

    container.appendChild(friendDiv);

})
