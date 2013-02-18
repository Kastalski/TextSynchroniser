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
    var options = {
        range: true,
        min: min,
        max: max
    }
    var $textSizeSlider = $('#textSizeSlider').slider(options)
    $textSizeSlider.on( "slidechange", function( event, ui ) {
        console.log("sd=" + ui.value)
    })

}