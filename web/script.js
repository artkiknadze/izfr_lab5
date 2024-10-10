$(document).ready(function() {
    $('#resultBtn').click(function() {
        const num1 = parseFloat($('#num1').val());
        const num2 = parseFloat($('#num2').val());
        const sum = num1 + num2;

        if (!isNaN(sum)) {
            $('#resultText').text(num1 + ' + ' + num2 + ' = ' + sum);
        } else {
            $('#resultText').text('Дані введено невірно.');
        }
    });
});