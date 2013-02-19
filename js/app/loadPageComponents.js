/**
 * Created with JetBrains WebStorm.
 * User: kastalski
 * Date: 19/02/13
 * Time: 18:15
 * To change this template use File | Settings | File Templates.
 */
var serverData = {
    'font': "Courier New",
    'size': "12",
    'text': "Snowboarding is a winter sport that involves descending a slope that is ..."
}

requirejs(['TextEditorComClient', 'TextEditorComServer'],
    function (TextEditorComClient, TextEditorComServer) {
        $(document).ready(function() {
            var comClient = new TextEditorComClient()
            var comServer = new TextEditorComServer(comClient)
            comServer.runAutoUpdateFromServer()
            comServer.runAutoUpdateToServer()
        })
    })