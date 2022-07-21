// TODO: add code here
window.addEventListener('load', function() {
    fetch('https://handlers.education.launchcode.org/static/astronauts.json').then(function(response) {
        response.json().then(function(json) {
            const container = document.getElementById('container');
            let astronautCount = 0;
           

            //sorts astronauts by hours in space
            //json.sort((a, b) => a.hoursInSpace - b.hoursInSpace);

            for(i = 0; i < json.length; i++) {
                
                container.innerHTML += `
                    <div class = 'astronaut'>
                        <div class = 'bio'>
                            <h3>${json[i].firstName} ${json[i].lastName}</h3>
                            <ul>
                                <li>Hours in space: ${json[i].hoursInSpace}</li>
                                <li id = 'active'>Active: ${json[i].active}</li>
                                <li>Skills: ${json[i].skills.join(', ')}</li>
                            </ul>
                        </div>
                        <img class = 'avatar' src = ${json[i].picture}
                    </div>
                    `;
                    if(json[i].active === true) {
                        document.getElementById('active').style.color = 'green';
                    }

                    astronautCount += 1;
            }
            
            console.log(astronautCount);
        });   
    });
});