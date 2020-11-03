$('#example').pagination();
$('#example').pagination({

  // the number of entries
  total: 1,

  // current page
  current: 1,

  // the number of entires per page
  length: 10,

  // pagination size
  size: 2,

  // Prev/Next text
  prev: "&lt;",
  next: "&gt;",

  // fired on each click
  click: function (e) { }

});
$('#example').pagination({

  ajax: function(options, refresh, $target){
    $.ajax({
      url: 'data.json',
      data:{
        current: options.current,
        length: options.length
      },
      dataType: 'json'
    }).done(function(res){
      console.log(res.data);
      refresh({
        total: res.total, // optional
        length: res.length // optional
      });
    }).fail(function(error){

    });
  }

});