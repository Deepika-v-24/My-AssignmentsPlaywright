function launchBrowser(Browsername)
{
 if(Browsername==="Chrome")
 {
    console.log("the chrome browser opened")
 }
 else
 {
    console.log("the launched browser" +Browsername)
 }
}
function runTests(testType)
{
    switch(testType)
    {
    case  "smoke":
       console.log("smoke test")
       break
    case "sanity":
        console.log("sanity test")
        break
    case "regression":
        console.log("regression test")
        break
    default:
        console.log("smoke test")
    }
}
launchBrowser("Chrome")
runTests("sanity")