var countDown = (count) => {
    for (var i = count; i >= 0; i-- ){
        (function(){
            var j = i;
            setTimeout(function(){console.log(j)}, (count - 1)*1000);
        })();
    }
}

countDown(6);