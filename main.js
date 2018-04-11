function ready(){

        var radius = 22, // set the radius of the circle
            circumference = 2 * radius * Math.PI;

        var els = document.querySelectorAll('circle');
        Array.prototype.forEach.call(els, function (el) {
            el.setAttribute('stroke-dasharray', circumference + 'rem');
            el.setAttribute('r', radius + 'rem');
        });


        document.querySelector('.radial-progress-center').setAttribute('r', (radius - 0.01 + 'rem'));

        var currentCount = 1,
            maxCount = 20,
            part = 5;//parts of lines


  

        var intervalId = setInterval(function () {
            var offset = -(circumference / maxCount) * currentCount + 'rem',
                offsetPlus = Math.abs(parseFloat(offset)),
                stopCount = circumference-circumference/part*2;//stop counter when $part = 2

            if (offsetPlus > stopCount){
                clearInterval(intervalId);
                return;
            }

            var partLength = circumference/part,//each part length stroke-dasharray
                partOffset = partLength * (part-1),//$elColor = 4 part length
                elColor = document.querySelector('.stroke-cyan');

            elColor.setAttribute('stroke-dasharray', partOffset + '%' + ',' + partLength*2 + '%');
            elColor.setAttribute('stroke-dashoffset', partLength*2 + '%');
            document.querySelector('.radial-progress-cover').setAttribute('stroke-dashoffset', offset);

            currentCount++;
        }, 1000);


}

document.addEventListener("DOMContentLoaded", ready);