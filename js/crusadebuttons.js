
        $(document).ready(function(){
            $("#crusade1introbutton").click(function(){
                $("#crusade1intro").fadeIn("slow");
                $("#crusade1antioch").hide(20);
                $("#crusade1antioch2").hide(20);
                $("#crusade1jerusalem").hide(20);

            });
            $("#crusade1antiochbutton").click(function(){
                $("#crusade1antioch").fadeIn("slow");
                $("#crusade1intro").hide(20);
                $("#crusade1antioch2").hide(20);
                $("#crusade1jerusalem").hide(20);
                
            });
            $("#crusade1antioch2button").click(function(){
                $("#crusade1antioch2").fadeIn("slow");
                $("#crusade1antioch").hide(20);
                $("#crusade1intro").hide(20);
                $("#crusade1jerusalem").hide(20);
                
            });
            $("#crusade1jerusalembutton").click(function(){
                $("#crusade1jerusalem").fadeIn("slow");
                $("#crusade1antioch2").hide(20);
                $("#crusade1antioch").hide(20);
                $("#crusade1intro").hide(20);
            });
        });
