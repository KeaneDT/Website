$(document).ready(function()
{
    $("#gmailIcon").hover(
        function()
        {
            $(this).attr("src", "images/gmail.gif");
        },
        function()
        {
            $(this).attr("src", "images/gmail.png");
        }                         
    );    
    
    $("#linkedinIcon").hover(
        function()
        {
            $(this).attr("src", "images/linkedin.gif");
        },
        function()
        {
            $(this).attr("src", "images/linkedin.png");
        }                         
    );    
    
    $("#instagramIcon").hover(
        function()
        {
            $(this).attr("src", "images/instagram.gif");
        },
        function()
        {
            $(this).attr("src", "images/instagram.png");
        }                         
    );
});