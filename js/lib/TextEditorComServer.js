/**
 * Created with JetBrains WebStorm.
 * User: kastalski
 * Date: 19/02/13
 * Time: 17:57
 * To change this template use File | Settings | File Templates.
 */
define(function() {
    return function(comClient) {
        var comServer = this
        var lastText = $('textEditor').val()
        var sendParamsCall = null
        var isEdit = false

        this.runAutoUpdateToServer = function() {
            $("#textEditor").keyup(function() {
                var $this = $(this)
                comClient.setTextToPanel($this.val())
                clearTimeout(sendParamsCall)
                isEdit = true
                sendParamsCall = setTimeout(function() {
                    if ($this.val() != lastText) {
                        lastText = $this.val()
                        sendData(lastText)
                        isEdit = false
                        comServer.runAutoUpdateFromServer()
                    }
                }, 3000)
            })
        }

        this.runAutoUpdateFromServer = function() {
            if (isEdit) return
            jQuery.ajax({
                type: 'get',
                url: 'http://blah.com',
                dataType: 'json',
                complete: function() {
                    if (isEdit) return

                    serverData.size = Math.getRandomBeetwen(10, 18)
                    comClient.updateTextEditor(serverData)
                    sendParamsCall = setTimeout(comServer.runAutoUpdateFromServer , 5000)
                }
            })
        }

        function sendData(text) {
            // send data to server
            console.log("text:" + text)
            console.log("font:" + $('#currentFont').html())
            console.log("size:" + $('#sizeValue').html())
        }
    }
})