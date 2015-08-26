Ext.define('CustomApp', {
    extend: 'Rally.app.App',
    componentCls: 'app',
    items: { html:"My name is Slim Shady!"},
    launch: function() {
        //Write app code here
    console.log("My first rally app!");
        //API Docs: https://help.rallydev.com/apps/2.0/doc/
    }
});
