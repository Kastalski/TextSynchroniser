/**
 * Created with JetBrains WebStorm.
 * User: kastalski
 * Date: 18/02/13
 * Time: 17:04
 * To change this template use File | Settings | File Templates.
 */
function loadTextEditor() {
    var min = 8
    var max = 20
    var step = 1
    var sliderValues = generateSizeValues(min, max, step)
    var options = {
        max: max,
        min: min,
        values: sliderValues
    }
    var $textSizeSlider = $('#textSizeSlider').slider()
    $textSizeSlider.on( "slidechange", function( event, ui ) {
        console.log("sd=" + ui.value)
    })

}

function generateSizeValues(min, max, step) {
    if (!isNumber(min) || !isNumber(max) || !isNumber(step)) return []
    if (min > max) return []
    var result = []
    for (var i = min; i <= max; i++) {
        result.push(i)
    }
    return result;
}

function isNumber(string) {
    return !isNaN(parseFloat(string)) && isFinite(string)
}