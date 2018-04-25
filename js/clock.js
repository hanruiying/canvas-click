    /**
     * Created by lenovo on 2018/4/25.
     */
    var dom=document.getElementById("clock");
    var ctx=dom.getContext("2d");
    var width=ctx.canvas.width;
    var height=ctx.canvas.height;
    var r=width/2;
    var rem=width/200;

    function drawclick(){
    ctx.save();
    ctx.translate(r,r);
    ctx.beginPath();
    ctx.lineWidth = 10 *rem;
    ctx.arc(0,0,r-ctx.lineWidth/2,0,2*Math.PI,false);
    ctx.stroke();

    var hoursNumbers = [3,4,5,6,7,8,9,10,11,12,1,2];
    ctx.font = 18 *rem+"px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    hoursNumbers.forEach(function(number,i){
        var rad = 2 * Math.PI / 12 * i;
        var x=Math.cos(rad) *(r-30*rem);
        var y=Math.sin(rad) *(r-30*rem);
        ctx.fillText(number,x,y);
    });

    for(var i=0;i<60;i++){
        var rad = 2 * Math.PI / 60 * i;
        var x=Math.cos(rad) *(r-20*rem);
        var y=Math.sin(rad) *(r-20*rem);
        ctx.beginPath();
        if(i % 5 === 0){
            ctx.fillStyle="#000";
            ctx.arc(x,y,2*rem,0,2*Math.PI,false);
        }else{
            ctx.fillStyle="#ccc";
            ctx.arc(x,y,2*rem,0,2*Math.PI,false);
        }
        ctx.fill();
    }
}
     function drawHour(hour,minute){
         ctx.save();
         ctx.beginPath();
         var rad=2 * Math.PI / 12 * hour;
         var mrad =2 * Math.PI / 12/60 *minute ;
         ctx.rotate(rad + mrad);
         ctx.lineWidth=6*rem;
         ctx.lineCap="round";
         ctx.moveTo(0,10*rem);
         ctx.lineTo(0,-r/2);
         ctx.stroke();
         ctx.restore();
     }
    function drawMinute(minute){
        ctx.save();
        ctx.beginPath();
        var rad=2 * Math.PI / 60 * minute;
        ctx.rotate(rad);
        ctx.lineWidth=3*rem;
        ctx.lineCap="round";
        ctx.moveTo(0,10*rem);
        ctx.lineTo(0,-r+30*rem);
        ctx.stroke();
        ctx.restore();
    }
    function drawSecond(second){
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle ="#c14543";;
        var rad=2 * Math.PI / 60 * second;
        ctx.rotate(rad);
        ctx.lineWidth=3*rem;
        ctx.lineCap="round";
        ctx.moveTo(-2*rem,20*rem);
        ctx.lineTo(2*rem,20*rem);
        ctx.lineTo(1,-r+18*rem);
        ctx.lineTo(-1,-r+18*rem);
        ctx.fill();
        ctx.restore();
    }
    function drawDot(){
        ctx.beginPath();
        ctx.fillStyle="#fff";
        ctx.arc(0,0,3*rem,0,2 * Math.PI,false);
        ctx.fill();
    }

   function draw(){
    ctx.clearRect(0,0,width,height);
    var date =new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    drawclick();
    drawHour(hour,minute);
    drawMinute(minute);
    drawSecond(second);
    drawDot();
    ctx.restore();
    }
    draw();
    setInterval(draw,1000);