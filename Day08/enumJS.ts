enum Environment {
    Local,
    Development,
    Staging,
    Production
}

function runTests(env :Environment): void{
    console.log("The environment is : " +Environment[env])
}

runTests(Environment.Development)
runTests(Environment.Production)