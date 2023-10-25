window.addEventListener('load', waitForElement, 'test');
//document.addEventListener('DOMContentLoaded', bot_connect, false);

function waitForElement()
{
        bot_connect();
}
function bot_connect() 
{
    
    connection = new Strophe.Connection('http://localhost:5280/http-bind/');
    connection.connect('localhost',null, onConnect);
}
function onConnect(status)
{

    if (status == Strophe.Status.CONNECTING) 
    {
        console.log('Strophe is connecting.');
    }else if (status == Strophe.Status.CONNFAIL) 
    {
        console.log('Strophe failed to connect.');
    }else if (status == Strophe.Status.DISCONNECTING) 
    {
        console.log('Strophe is disconnecting.');
    }else if (status == Strophe.Status.DISCONNECTED) 
    {
        console.log('Strophe is disconnected.');
    }else if (status == Strophe.Status.CONNECTED) 
    {
        console.log('Strophe is connected.');
    }
}


