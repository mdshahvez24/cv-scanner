console.log("This is my index.js");
// Data is an array of objects which contains information about the candidates
const data = [
    {
        name: 'Rohan Das',
        age: 18,
        city: 'Kolkata',
        language: 'Python',
        framework: 'Django',
        image: 'https://randomuser.me/api/portraits/men/75.jpg'
    },
    {
    name: 'ali',
    age: 20,
    city: 'delhi',
    language: 'java',
    framework: 'angular',
        image: 'https://randomuser.me/api/portraits/men/76.jpg'
    },
    {
        name: 'shazia',
        age: 22,
        city: 'faridabad',
        language: 'php',
        framework: 'false',
        image: 'https://randomuser.me/api/portraits/women/70.jpg'
        
    },
    {
        name: 'rohit ',
        age: 17,
        city: 'pune',
        language: 'Go',
        framework: 'flask',
        image: 'https://randomuser.me/api/portraits/men/79.jpg'
    
    }
]

//CV iterator 
function cvIterator(profiles) {

    let nextIndex = 0;
    return {
        next: function (){
            return nextIndex<profiles.length ?
            {  value:profiles[nextIndex++], done: false}:
            {done: true}         
        }
    };
}
const candidates = cvIterator(data);

nextCV();

//Button listner for next button
const next = document.getElementById('next');
next.addEventListener('click', nextCV);

function nextCV (){
    const currentCandidate = candidates.next().value;
    let image = document.getElementById('image');
    let profile = document.getElementById('profile');
    if(currentCandidate != undefined){
image.innerHTML = `<img src='${currentCandidate.image}'>`;
profile.innerHTML = `<ul class="list-group">
<li class="list-group-item">Name: ${currentCandidate.name}</li>
<li class="list-group-item">${currentCandidate.age} years old</li>
<li class="list-group-item">Lives in ${currentCandidate.city}</li>
<li class="list-group-item">Primarily works on ${currentCandidate.language}</li>
<li class="list-group-item">Uses ${currentCandidate.framework} framework</li>
</ul>`
}
else {
    alert('End of candidate applications');
    window.location.reload();
}
}



