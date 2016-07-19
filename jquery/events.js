/**
 *
 * Created by ustcck on 2016/7/19.
 */
$(document).ready(function () {
    $('#btn1').on('click', function () {
        alert('click');
    });
    $('#btn2').on('dblclick', function () {
        alert('dblclick');
    });

    $('#ip1').on('focus', function () {
        $('#result1').html('focused');
    });
    $('#ip1').on('blur', function () {
        $('#result1').html('blured');
    });

    $('#btn3').on('mousedown', function () {
        $('#result2').append('<br/>mousedown');
    });
    $('#btn3').on('mouseup', function () {
        $('#result2').append('<br/>mouseup');
    });
    $('#btn3').on('click', function () {
        $('#result2').append('<br/>click');
    });


    $('#btn3').on('mouseover', function () {
        $('#result2').append('<br/>mouseover');
    });
    $('#btn3').on('mouseout', function () {
        $('#result2').append('<br/>mouseout');
    });
    
    $('#ip2').on('keydown', function () {
        $('#result3').html('keydown');
    });
    $('#ip2').on('keyup', function () {
        $('#result3').html('keyup');
    });
    $('#ip2').on('keypress', function () {
        $('#result3').html('keypress');
    });

    $('#ip3').on('change', function () {
        $('#result4').html('changed');
    });
    
    $('#form1').on('submit', function () {
        alert('submit!')
    });

    



});
