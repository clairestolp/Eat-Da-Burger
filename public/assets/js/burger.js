$(function(){
    $(document).ready(function () {
        $.ajax('/api/burgers', {
            type: 'GET'
        }).then(function (results) {
            console.log(results);
        });
    });
});