$('.material-menu nav > ul').materialmenu({mobileWidth: 992});
$('.inner-addon').on("click",function(){
    alert("hello");
});
$("#user-info-click").popover({
    html: true,
    content: function() {
        return $('#popover-user-info').html();
    }
});

