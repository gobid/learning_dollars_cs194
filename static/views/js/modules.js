var modules = new Bloodhound({
    datumTokenizer: function(d) { return Bloodhound.tokenizers.whitespace(d.name); },
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    prefetch: '/modulesinfo'
});
 
modules.initialize();
 
$('.searchbox .typeahead').typeahead(null, {
    name: 'modules',
    displayKey: 'name',
    source: modules.ttAdapter(),
});

$('#searchBtn').click(function (e) {
    e.preventDefault()
    $.scrollTo($('#moduleName').val())
});