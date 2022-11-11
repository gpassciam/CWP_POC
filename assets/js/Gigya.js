
function load() {
    //Moesif CORS
    
        $("#header").load("Header.html");
        $("#footer").load("Footer.html");

customLangParams = {

        this_field_is_required: 'Please enter %fieldname'
    };
    
        gigya.accounts.showScreenSet({
            screenSet: 'CWP-DEV-RegistrationLogin',
            //screenSet: 'CWP-DEV-Login-ext',
            startScreen: 'gigya-login-screen',
            customLang: customLangParams,
            containerID: 'LoginScreen'
            
        });
}


    