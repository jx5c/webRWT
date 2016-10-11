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
	var output = "public class Demo{ \n \x20public float calculateDistance(float lat1, float lon1, float lat2, float lon2){ \n \x20} \n}"
	document.getElementById("programText").value =output;
	var lineCount = 4;
	var lineNumbers = "";
	for(var i=0;i<lineCount;i++){
         lineNumbers = lineNumbers + "" + (i+1);
    }	
	document.getElementById("programLineNumber").value = lineNumbers;	
}

function ShowSelection()
{
  var textComponent = document.getElementById('programText');
  var selectedText;
  // IE version
  if (document.selection != undefined)
  {
    textComponent.focus();
    var sel = document.selection.createRange();
    selectedText = sel.text;
  }
  // Mozilla version
  else if (textComponent.selectionStart != undefined)
  {
    var startPos = textComponent.selectionStart;
    var endPos = textComponent.selectionEnd;
    selectedText = textComponent.value.substring(startPos, endPos)
  }
  alert("You selected: " + selectedText);
}

function showTooltip() {
var node = dom.byId('programText');
  Tooltip.show("I am a tooltip", node);
  on.once(node, mouse.leave, function(){
      Tooltip.hide(node);
  })
}
//
//function hideTooltip() {
//    var domNode = dijit.byId('programText').domNode;
//    dijit.hideTooltip(domNode);
//}


