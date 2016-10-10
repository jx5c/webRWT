/*
 * This file is provided for custom JavaScript logic that your HTML files might need.
 * Maqetta includes this JavaScript file by default within HTML pages authored in Maqetta.
 */


function SetPage(pg){
	alert(pg);
}


function showAltitudeDetails() {
    var div = document.get('div');

    div.className = 'row';

    div.innerHTML = '<input type="text" name="name" value="" />\
        <input type="text" name="value" value="" />\
        <label> <input type="checkbox" name="check" value="1" /> Checked? </label>\
        <input type="button" value="-" onclick="removeRow(this)">';

' <ul><ul><li style="position: relative; left: 10px;"><b style="font-family: Arial,Helvetica,sans-serif; font-size: 10pt;">\
               Real-world semantics</b><ul><li style="position: relative; left: 15px;"><i>Reference ground</i></li>\
          <li style="position: relative; left: 15px;"><i>Units of measurement</i></li><li style="position: relative; left: 15px;">\
            <i>Measurement technology</i></li><li style="position: relative; left: 15px;"><i>Reasonable range</i></li></ul>\
      </li><li style="position: relative; left: 10px;"><b style="font-family: Arial,Helvetica,sans-serif; font-size: 10pt;">\
               Approximation properties</b><ul><li style="position: relative; left: 15px;"><i>\
               Expected accuracy</i> difference between real value and machine value is less than 5 feet. </li>\
          <li style="position: relative; left: 15px;"><i>Expected delay</i> is about 0.1 second. </li></ul></li>\
      <li style="position: relative; left: 10px;"><b style="font-family: Arial,Helvetica,sans-serif; font-size: 10pt;">\
               Machine semantics</b><ul><li style="position: relative; left: 15px;"><i>Nullable</i> Not nullable</li>\
          <li style="position: relative; left: 15px;"><i>Mutable</i> Mutable</li></ul></li></ul></ul>';


     document.getElementById('content').appendChild(div);
}

function removeAltitudeDetails(input) {
    document.getElementById('content').removeChild( input.parentNode );
}

function showProgramText(){
	document.getElementById("programText").value = "This is line 1\nThis is line 2";
}