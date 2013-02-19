/**
 * Created with JetBrains WebStorm.
 * User: kastalski
 * Date: 18/02/13
 * Time: 17:04
 * To change this template use File | Settings | File Templates.
 */
function loadTextEditorComponents() {
    loadSizeSlider(8, 20)
    loadFontList()
}

function loadSizeSlider(min, max) {
    var options = {
        range: false,
        min: min,
        max: max
    }
    var $textSizeSlider = $('#textSizeSlider').slider(options)
    $('#sizeValue').html(min)

    setSizeToText(min)
    $textSizeSlider.bind("slidechange", function( event, ui ) {
        $('.resultTextPanel').css({ "font-size": ui.value + 'pt' })
        $('#sizeValue').html(ui.value)
    })
}

function loadFontList() {
    var $fontsList = $('div#fonts')
    var $chosenFont = $fontsList.find('div#currentFont')
    var defaultFont = $fontsList.find('li:first')
    $chosenFont.css({ "font-family": defaultFont.attr('data') }).html(defaultFont.html())

    $fontsList.find('ul li:odd').css({ "background-color": "#efefef" })

    $chosenFont.bind("click", function() {
        $(this).next().slideToggle()
    })

    setFontToText(defaultFont.html())
    $fontsList.find('li').bind("click", function() {
        var $this = $(this)
        $this.parent().slideToggle()
        $this.html($this.attr('data'))
        $this.css({"font-family": $this.attr('data')})
        setFontToText($this.attr('data'))
    })
}

function updateTextEditor(options) {
    // update params
    $('#textEditor').val(options.text)

    var $chosenFont = $('div#fonts div#currentFont')
    $chosenFont.css({ "font-family": options.font })
    $chosenFont.html(options.font)
    // update text panel
    $('.resultTextPanel').html(options.text)

    setFontToText(options.font)
    setSizeToText(options.size)
}

function setFontToText(font) {
    $('.resultTextPanel').css({ "font-family": font })
}

function setSizeToText(size) {
    $("#textSizeSlider").slider( "value", size )
}