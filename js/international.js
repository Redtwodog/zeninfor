var en_la=["LogIn","Register"];
window.onload=function () {
    if(navigator.language==="zh-CN"){

    }
    else {
        $("#log-in").find("a").text(en_la[0]);
        $("#register").find("a").text(en_la[1]);
    }
}