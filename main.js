const btn = document.querySelector('.btn').addEventListener('click',fetchJoke)
const placeholder = document.querySelector('.wrapper')

// with Fetch of AJAX dependes of your choice
/*
function getJoke(){    
    const xhr = new XMLHttpRequest()
    xhr.open('GET','http://api.icndb.com/jokes/random',true)
    xhr.onload = function(){
        if(this.status === 200){
            const response = JSON.parse(this.response)
            document.querySelector('.wrapper').innerHTML =
            `<h5 class='text-dark'>${response.value.joke}</h5>`
        }
    }
    xhr.send()
}
*/
function fetchJoke(){
    fetch('http://api.icndb.com/jokes/random').
    then(res => res.json())    
    .then(data =>{placeholder.innerHTML = `<h5 class='text-dark'>${data.value.joke}</h5>`})    
    .catch(() =>{
        placeholder.innerHTML =`
        <h5 class='text-danger'> Sorry! We are embarrassed, but something went wrong</h5>
        `})
}