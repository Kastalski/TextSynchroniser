/**
 * Created with JetBrains WebStorm.
 * User: kastalski
 * Date: 19/02/13
 * Time: 18:12
 * To change this template use File | Settings | File Templates.
 */
requirejs.config({
    baseUrl: 'js/lib',
    paths: {
        app: '../app',
        'jquery': 'http://code.jquery.com/jquery-1.9.1',
        'jqueryui': 'http://code.jquery.com/ui/1.10.1/jquery-ui'
    }
})

requirejs(['app/loadPageComponents', 'jquery', 'jqueryui'],
    function (loadPageComponents, jQuery) {
        Math.getRandomBeetwen = function(min, max) {
            return this.round(this.random() * (max - min) + min)
        }
    })