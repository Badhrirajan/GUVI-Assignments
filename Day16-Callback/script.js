// CALLBACK FUNCTION
window.onload = function(){
     let text = document.getElementById("text-message");
     let mes = document.getElementById("mes");

text.innerHTML = 10;
    setTimeout(function() {
        text.innerHTML = 9;
        setTimeout(function() {
            text.innerHTML = 8;
            setTimeout(function() {
                text.innerHTML = 7;
                setTimeout(function() {
                    text.innerHTML = 6;
                    setTimeout(function() {
                        text.innerHTML = 5;
                        setTimeout(function() {
                            text.innerHTML = 4;
                            setTimeout(function() {
                                text.innerHTML = 3;
                                setTimeout(function() {
                                    text.innerHTML = 2;
                                    setTimeout(function() {
                                        text.innerHTML = 1;
                                        setTimeout(function() {
                                            mes.style.visibility = 'visible';
                                            text.style.visibility = 'hidden';
                                        }, 3000)
                                    }, 1000)
                                }, 1000)
                            }, 1000)
                        }, 1000)
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}

