function myName(){
    console.log('My name is Daven')
};

function receivesAFunction(callback){
    console.log('help me')
    callback(myName)
}

const returnsANamedFunction = () => { return myName} 


function returnsAnAnonymousFunction () {
    return (function(){ console.log('Help me!')});
}
