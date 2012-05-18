head.js('lib/jquery.js','lib/rloader.js', function() {
    $.rloader([{src:'css/bootstrap.css'},{src:'css/docs.css'},{src:'css/styles.css'}]);
});

head.ready(function() {
    head.js('lib/underscore.js',
            'lib/backbone.js',
            'lib/bootstrap.js',
            'js/utils.js',
            'js/main.js');
});