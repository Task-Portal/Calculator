
$(document).ready(function() {

    $( ".btn" ).click(function() {
        const first = parseFloat( $('#first').val())
        const second = parseFloat( $('#second').val())
        const operation = $('#operation').val()
        let result=0;

        switch (operation){
            case "1":result = first+second; break;
            case "2":result = first-second; break;
            case "3":result = first*second; break;
            case "4":result = first/second; break;
            default: result = "the operation is not chosen. "
        }

first>0 && second > 0 && operation>0?
    $('#result').text(Math.round( result)+'') :
    $('#result').text('Enter values, please');
    });
});