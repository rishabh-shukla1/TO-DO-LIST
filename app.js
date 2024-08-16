

$('input').keypress(function(e)
{
    // console.log(e)

    if(e.which===13)
    {
        let text=$(this).val();

        $('#list').append(`<li> <span>X </span>${text}</li>`);

        $(this).val('');
    }
})

//

$('ul').on('click','li',function()
{
    $(this).toggleClass('completed')
})

// delete 
$('ul').on('click', 'span' ,function(e){
    e.stopPropagation(); // to stop event bubbling
    $(this).parent().fadeOut(500,function()
{
    $(this).remove();
})
})


$('.plus').click(function()
{
    $('input').fadeToggle()
})