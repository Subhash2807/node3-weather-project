
console.log('client side js excuted')

// fetch('http://puzzle.mead.io/puzzle').then((response)=>{
//     response.json().then((data)=>{
//         console.log(data);
//     })
// })

// fetch('http://localhost:3000/weather?=delhi').then((response)=>{
//     response.json().then((data)=>{
//         if(data.error)
//         {
//             console.log(data.error);
//         }
//         else
//         console.log(data);
//     })
// })

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
        fetch('http://localhost:3000/weather?address='+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error)
            {
                messageOne.textContent = data.error;
            }
            else
            {
                // console.log(data.location,data.temp);
                messageOne.textContent = 'Location: '+data.location;
                messageTwo.textContent = 'Temp: '+data.temp;
            }
        })
    })
})