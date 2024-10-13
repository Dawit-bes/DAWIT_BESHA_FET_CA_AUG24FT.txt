$(document).ready(function() {
  $('#liveToastBtn').click(function() {
      $("#liveToast").toast('show'); 
  });
});




function fetchData(url) {
  $.ajax({
      url: url,
      type: 'GET',
      dataType: 'json', 
      success: function(data) {      
          console.log('Success:',        data);
          $('#result').html(JSON.stringify(data, null, 2)); 
      },
      error: function(textStatus, errorThrown) {
          console.error('Error:', textStatus, errorThrown);
          $('#result').html('Error fetching data: ' + textStatus);
      }
  });
}

$(document).ready(function() {
  $('#boardBtn').click(function() {
      fetchData('http://boredapi.restapi.co.za'); 
  });
});