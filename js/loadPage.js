/**
 * Created with JetBrains WebStorm.
 * User: kastalski
 * Date: 18/02/13
 * Time: 18:27
 * To change this template use File | Settings | File Templates.
 */
var serverData = {
    'font': "Courier New",
    'size': "12",
    'text': "Snowboarding is a winter sport that involves descending a slope that is ..."
}

var lastText = $('textEditor').val()
var sendParamsCall = null
var isEdit = false
$(document).ready(function() {
    loadTextEditor()
    runUpdateFromServer()


    $("#textEditor").keyup(function() {
        var $this = $(this)
        $('.resultTextPanel').html($this.val())
        clearTimeout(sendParamsCall)
        isEdit = true
        sendParamsCall = setTimeout(function() {
            if ($this.val() != lastText) {
                lastText = $this.val()
                sendData(lastText)
                isEdit = false
                runUpdateFromServer()
            }
        }, 3000)
    })
})

function sendData(text) {
    // send data to server
    console.log("text:" + text)
    console.log("font:" + $('#currentFont').html())
    console.log("size:" + $('#sizeValue').html())
}

function runUpdateFromServer() {
    if (isEdit) return
    jQuery.ajax({
        type: 'get',
        url: 'http://blah.com',
        dataType: 'json',
        complete: function() {
            if (isEdit) return

            serverData.size = getRandomBeetwen(10, 18)
            updateTextEditor(serverData)
            getParamsCall = setTimeout(runUpdateFromServer, 5000)
        }
    })
}

function getRandomBeetwen(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}
