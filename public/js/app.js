


const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');
messageOne.textContent = 'from javascript'
weatherForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location = search.value;
    messageOne.textContent = "Loading....";
    messageTwo.textContent = '';
    // console.log(location)
        fetch('/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error)
            {
                messageOne.textContent = data.error;
            }
            else
            {
                // console.log(data.location,data.temp);
                // messageOne.textContent = 'Location: '+data.location;
                // messageTwo.textContent = 'Temp: '+data.temp;
                var str = 'o';
                str = str.sup();
                messageOne.innerHTML = `The temperature of ${data.location} is ${Math.round(data.temp)}${str}C and the humidity is around ${data.humidity}%`
//          messageOne.innerHTML = `The temperature of ${data.location} is ${Math.round(data.temp)}${str}C and the humidity is around ${data.humidity}%`  
            }
        })
    })
})
