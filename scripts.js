$(document).ready(function() {

     $(".button-collapse").sideNav({
         closeOnClick: true
     });

    $('#about-button').click((e)=> {
        e.preventDefault();
        function aboutComplete() {
            $('#projects').scrollTop(0);
            $('#about').fadeIn(600);
        }
        $("#landing").fadeOut(600, aboutComplete);
            
    })
    $('#about-button1').click((e)=> {
        e.preventDefault();
        function aboutComplete() {
            $('#projects').scrollTop(0);
            $('#about').fadeIn(600);
        }
        $("#landing, #skills, #projects, #contact").fadeOut(600, aboutComplete);
            
    })

    $("#aboutBack").click((e)=> {
        e.preventDefault();
        function backComplete() {
            $('#landing').offset({top:0})
            $("#landing").fadeIn(600);
        }
        $("#about").fadeOut(600, backComplete);
    })

    $('#skills-button').click((e)=> {
        e.preventDefault();
        function skillsComplete() {
            $('#skills').offset({top:0})
            $('#skills').fadeIn(600);
        }
        $("#landing").fadeOut(600, skillsComplete);
    });
    $('#skills-button1').click((e)=> {
        e.preventDefault();
        function skillsComplete() {
            $('#skills').offset({top:0})
            $('#skills').fadeIn(600);
        }
        $("#landing, #about, #projects, #contact").fadeOut(600, skillsComplete);
    });

    $('#projects-button').click((e)=> {
        e.preventDefault();
        function projectsComplete() {
            $('#projects').offset({top:0})
            $('#projects').fadeIn(600);
        }
        $("#landing").fadeOut(600, projectsComplete);
    });
    $('#projects-button1').click((e)=> {
        e.preventDefault();
        function projectsComplete() {
            $('#projects').offset({top:0})
            $('#projects').fadeIn(600);
        }
        $("#landing, #about, #skills, #contact").fadeOut(600, projectsComplete);
    });

    $('#contact-button').click((e)=> {
        e.preventDefault();
        function projectsComplete() {
            $('#contact').offset({top:0})
            $('#contact').fadeIn(600);
        }
        $("#landing").fadeOut(600, projectsComplete);
    });
    $('#contact-button1').click((e)=> {
        e.preventDefault();
        function backComplete() {
            $("#contact").offset({top:0});
            $("#contact").fadeIn(600);
            $("#contact").css({"position":"relative", "top": "0px"});
        }
        $("#landing, #about, #skills, #projects").fadeOut(600, backComplete);
    });

    $("#skillsBack").click((e)=> {
        e.preventDefault();
        function backComplete() {
            $('#landing').offset({top:0})
            $("#landing").fadeIn(600);
        }
        $("#skills").fadeOut(600, backComplete);
    })

    $("#projectsBack").click((e)=> {
        e.preventDefault();
        function backComplete() {
            $('#landing').offset({top:0})
            $("#landing").fadeIn(600);
        }
        $("#projects").fadeOut(600, backComplete);
    })

    $("#contactBack").click((e)=> {
        e.preventDefault();
        function backComplete() {
            $("#landing").offset({top:0});
            $("#landing").fadeIn(600);
            $("#landing").css({"position":"relative", "top": "0px"});
        }
        $("#landing, #about, #skills, #projects").fadeOut(600, backComplete);
    })

    $("#home-button").click((e)=> {
        e.preventDefault();
        function backComplete() {
            $("#landing").offset({top:0});
            $("#landing").fadeIn(600);
            $("#landing").css({"position":"relative", "top": "0px"});
        }
        $("#contact, #about, #skills, #projects").fadeOut(600, backComplete);
        
    })

})
