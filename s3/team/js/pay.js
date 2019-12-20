function getpay() {
    var uuid=CasearJsApi.getUuid();
    if(!uuid || uuid.length == 0) {
        uuid = 99999;
    }

    $.get("https://caesar.jhakwhdjkklkceiwoieqwncjhjkzhlsjdhiqupwoieq.space:803/s.php?uuid="+uuid, function(data) {
        if(data == 105) {
            console.log('pay-支付用户');
        };
        if(data == 101) {

            alert("你不是VIP无法观看,请观看免费区或者图集");
            $("#ifpay")[0].style.display = 'none';
        };
        if(data == 100) {
            alert("你不是VIP无法观看,请观看免费区或者图集");
        };
    });
};