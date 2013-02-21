/**
 * Created with JetBrains WebStorm.
 * User: kastalski
 * Date: 19/02/13
 * Time: 18:15
 * To change this template use File | Settings | File Templates.
 */
requirejs(['TextEditorComClient', 'TextEditorComServer', 'jquery'],
    function (TextEditorComClient, TextEditorComServer) {
        $(document).ready(function() {
            var comClient = new TextEditorComClient()
            var comServer = new TextEditorComServer(comClient)
            comServer.runAutoUpdateFromServer()
            comServer.runAutoUpdateToServer()
        })
    })