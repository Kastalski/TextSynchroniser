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
        app: '../app'
    }
})

requirejs(['app/loadPageComponents'],
    function (loadPageComponents) {
        Math.getRandomBeetwen = function(min, max) {
            return this.round(this.random() * (max - min) + min)
        }
    })