var content = {
    'chanakya': null, 
    'malayalam_proverbs': null, 
    'thirukkural': null
};

var randInt = function(min, max){
    return min + Math.floor((max-min)*Math.random());
}

var load = function(label){
    var filename = 'database/'+label+'.dic';
    var request = $.ajax({
        url: filename,
        async: false,
        dataType: 'text'
    });

    request.success(function(data){
        content[label] = data;
        /*
           quotes = data.split('%');
           index = randInt(0, quotes.length);
           output_quote = quotes[index];
           */
    });
};

var cookie = function(label){
    if(content[label] == null){
        load(label);
    }
    var quote = content[label].split('%');
    var i = randInt(0, quote.length);
    return quote[i];
}


var div = document.querySelector("#cookie");
var button = document.querySelector("#submit");
var choice = document.querySelector("#dict");
submit.addEventListener('click', function(){
    var dict = choice.value
    var quote = cookie(dict);
    div.innerHTML = quote;
});
