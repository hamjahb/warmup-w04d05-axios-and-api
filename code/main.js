// If you get stuck go to axiox documentations
// https://github.com/axios/axios


const devList = document.querySelector("#devList");

const listElement = document.createElement("li")


const baseUrl = `https://sei-relativity-ruh.herokuapp.com/developers`



const getDevs = () => {
    axios({
        method:'get',
        url: baseUrl
    })

    .then(response => {
        response.data.forEach(entry => {
            let name = entry.name;
            let listElement = document.createElement("li")            
            listElement.innerText = name;
            devList.appendChild(listElement)
            
        });
        
        
    })

    .catch(error => {
        console.log(error);
        
    })
}

getDevs()


// post



const postDevs = (inputName) => {
    axios({
        method:'post',
        url: baseUrl,
        data:{
            name: inputName
        }
    })

    .then(response => {
        console.log(response);       
    })

    .catch(error => {
        console.log(error);
        
    })
}


const form = document.querySelector('#form-n')


form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputName = document.querySelector('#name').value;
    postDevs(inputName);
})