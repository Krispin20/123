$(document).ready(function () {
    table();
    console.log('tables ready');
    $('#add').click();
    $('#red').click();
    $('#del').click();

   
    function table() {
        $('.table').empty();
        $('table').append('<tr><th>id</th><th>Send_time</th><th>Date</th><th>User_type</th></tr>');
    };

    $('#showInput').click(function () {
        $('#inputs').show(600);
    });

    $('#clear').click(function () {
        update();
        console.log("clear");
    });

       $('#add').click(function () {
        var id = $('#id').val();
        var Send_time = $('#Send_time').val();
        var Date = $('#Date').val();
        var User_type = $('#User_type').val();


        $('#id').val('');
        $('#Send_time').val('');
        $('#Date').val('');
        $('#User_type').val('');

           $('table').append('<tr><td>'+$('id').val()+'</td><td>'+$('Send_time').val()+'</td><td>'+$('Date').val()+'</td><td>'+$('User_type').val()+'</td></tr>');
       });
        
        
        $('#red').click(function () {
        var id = $('#id').val();
        var Send_time = $('#Send_time').val();
        var Date = $('#Date').val();
        var User_type = $('#User_type').val();
      

        $('#id').val('');
        $('#Send_time').val('');
        $('#Date').val('');
        $('#User_type').val('');
       
        });

    
        $('#del').click(function () {
        var id = $('#id').val();
        var Send_time = $('#Send_time').val();
        var Date = $('#Date').val();
        var User_type = $('#User_type').val();


        $('#id').val('');
        $('#Send_time').val('');
        $('#Date').val('');
        $('#User_type').val('');

        });
});

    