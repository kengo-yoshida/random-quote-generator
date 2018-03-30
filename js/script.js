var quote = [
    {
        "quote": "nimit is good",
        "spoke": "kengo"
    },
    {
        "quote": "kengo is bad",
        "spoke": "taiki"

    },
    {
        "quote": "taiki is very good",
        "spoke": "nimit"

    }
]

$(document).ready(function(){
    $("#generate-btn").on("click", function(){
        var randomIndex = Math.floor(Math.random() * quote.length)
        console.log(quote[randomIndex]["quote"])
    });
});