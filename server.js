module.exports = {
    RandomHax: function (num) {
        var strings = 'abcdefghijklmnopqrstuvwxyz0123456789';
        var str = '';
        var i = 0;
        while(i < num){
            str += strings.charAt(Math.floor(Math.random() * strings.length));
            i++;
        }
        return str;
    }
}
