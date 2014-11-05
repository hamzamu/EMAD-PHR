Router.configure({
    layoutTemplate: 'ApplicationLayout'
});


Router.route('/FormProfile',{
    name : 'FormProfile',
    template : '',
});
    
Router.route('/Home',{

    name: 'Home' ,
    template: 'Home',
});    
Router.route('/',{

    name: 'main' ,
    template: 'Home',
});

Router.route('/AddRecord',{
    name : 'FormRecods',
    tameplate : 'FormRecods',

});

Router.route('/AddHistoryR',{
    name : 'AddHistoryRecord',
    tameplate : 'FormHistory',

});

