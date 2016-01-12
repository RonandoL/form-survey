$(document).ready(function() {
  $(".blanks form").submit(function(event) {
    var musicInput = $("input[name=music]:checked").val();

    $(".musicresult").text(musicInput);

    // Need to  use the .toString() function to convert the array to a string.
  // var Input = [];
  // var count = 0;
  //   $.each($("input[name='food']"), function() {
  //     if ($(this).is(':checked')) {
  //       foodInput[count] = $(this).val();
  //       count++;
  //     }
  //   });

    $(".surveyresults").show();
    event.preventDefault();
  });
});
