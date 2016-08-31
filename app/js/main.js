$('#problem').keyup(function(){
    var words = $.trim($(this).val()).split(' ');
    console.log(words.length);
});