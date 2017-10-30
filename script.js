// no API key required for this API
const API_URL = 'https://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?'

const buttons = document.querySelector('.button')
const text = document.querySelector('.quote-text');
const author = document.querySelector('.quote-author');

function getQuote(authorsName) {
    $.ajax({
        type:"GET",
        url: API_URL,
        dataType: 'json',
        success: function(data){
            console.log(data)
            text.textContent = data.quoteText
            author.textContent = data.quoteAuthor

        },
        error: function(error){
        console.log(error);
       }
   })
   }




 buttons.addEventListener('click', function(e){
    
    getQuote();
    console.log("Its working")
 })
 
