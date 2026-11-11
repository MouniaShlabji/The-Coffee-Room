
const stars = document.querySelectorAll(".stars i");

stars.forEach((star, index1) => {
    star.addEventListener("click", () => {
        stars.forEach((star, index2) => {
            index1 >= index2
                ? star.classList.add("active")
                : star.classList.remove("active");
        });
    });
});
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.classList.add("show");
  } else {
    mybutton.classList.remove("show");
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
$(document).ready(function() {
    $('#jquery-btn').click(function() {
        $('#menu').fadeIn();
    });
        $('#menu').click(function() {
        $(this).fadeOut();
    });
});
    
    function showAndHide($element, text) {
    
        if ($element.data("timer")) {
            clearTimeout($element.data("timer"));
        }

        $element
            .text(text)
            .stop(true, true)
            .css({ "display": "block", "opacity": 1 }); 

        
        var timer = setTimeout(function(){
            $element.fadeOut(500, function(){
                $(this).text("");
            });
        }, 2000);

     
        $element.data("timer", timer);
    }

  
    $(".name").on("blur", function(){
        var val = $(this).val().trim();
        var $error = $(this).next(".error-message");
        var $correct = $error.next(".coract-massage");

        if (val.length < 3) {
            $correct.stop(true, true).hide().text("");
            showAndHide($error, "Name must be at least 3 characters");
        } else {
            $error.stop(true, true).hide().text("");
            showAndHide($correct, "Your name is correct");
        }
    });

    $(".email").on("blur", function(){
        var val = $(this).val().trim();
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        var $error = $(this).next(".error-message");
        var $correct = $error.next(".coract-massage");

        if (val.length === 0 || !emailPattern.test(val)) {
            $correct.stop(true, true).hide().text("");
            showAndHide($error, "Please enter a valid email");
        } else {
            $error.stop(true, true).hide().text("");
            showAndHide($correct, "Email is correct");
        }
    });

   
    $(".number").on("blur", function(){
        var val = $(this).val().trim();
        var phonePattern = /^\d{11}$/;
        var $error = $(this).next(".error-message");
        var $correct = $error.next(".coract-massage");

        if (!phonePattern.test(val)) {
            $correct.stop(true, true).hide().text("");
            showAndHide($error, "Please enter a valid 11-digit phone number");
        } else {
            $error.stop(true, true).hide().text("");
            showAndHide($correct, "Phone number is correct");
        }
    });

  
    $(".address").on("blur", function(){
        var val = $(this).val().trim();
        var $error = $(this).next(".error-message");
        var $correct = $error.next(".coract-massage");

        if (val.length < 5) {
            $correct.stop(true, true).hide().text("");
            showAndHide($error, "Address must be at least 5 characters");
        } else {
            $error.stop(true, true).hide().text("");
            showAndHide($correct, "Address is correct");
        }
    });


    $(".message").on("blur", function(){
        var val = $(this).val().trim();
        var $error = $(this).next(".error-message");
        var $correct = $error.next(".coract-massage");

        if (val.length < 10) {
            $correct.stop(true, true).hide().text("");
            showAndHide($error, "Please enter a message with at least 10 characters");
        } else {
            $error.stop(true, true).hide().text("");
            showAndHide($correct, "Message is correct");
        }
    });
let video = document.querySelector(".cafe video");

video.playbackRate = 0.8;

