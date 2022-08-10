const modal = $.modal()

const openBtn = document.querySelector('#open')
openBtn.onclick = modal.open


// for some reason it work weird
// delete selected file functionality
let photoInput = document.querySelector('#photo')
let cancelBtn = document.querySelector('#clear') 
cancelBtn.addEventListener('click', function(){
    photoInput.value = '';
    let newPhoto = photoInput.cloneNode(true);
    photoInput.replaceWith(newPhoto);
})

function sendRequest(url, method, body = null){
    return fetch(url).then(response => {
        return response.json()
    })
}

sendRequest('https://jsonplaceholder.typicode.com/posts')
    .then(data => console.log(data))
    .catch(err => console.error(err))