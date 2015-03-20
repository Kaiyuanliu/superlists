var initialize = function(navigator, user, token, urls) {
    $('#id_login').on('click', function(){
        navigator.id.request();
    });

    navigator.id.watch({
        loggedInUser: user,
        onlogin: function(assertion){
            $.post('login url', {assertion: assertion, csrfmiddlewaretoken: token})
            .done(function(){ window.location.reload(); })
            .fail(function(){ navigator.id.logout(); });
        },
        onlogout: function(){}
    });
}

window.Superlists = {
    Accounts: {
        initialize: initialize
    }
};