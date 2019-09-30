var drawed = false,
    about_me_section = document.querySelector('.about-me'),
    skills_section = document.querySelector('.skills'),
    experiance_section = document.querySelector('.experiance'),
    my_projects_section = document.querySelector('.my-projects'),
    contact_section = document.querySelector('.contact'),
    charts = document.querySelectorAll(".chart"),
    chartvalues = document.querySelectorAll(".percent"),
    exper_one = document.querySelector('.first'),
    exper_two = document.querySelector('.second'),
    exper_three = document.querySelector('.third'),
    exper_four = document.querySelector('.fourth');

window.onscroll = () => {
    var scrollValue = window.scrollY;
    if (scrollValue > 180){
        about_me_section.classList.add('fadeIn');
    } else if (scrollValue < 100){
        about_me_section.classList.remove('fadeIn');
    }
    if (scrollValue > 480){
        skills_section.classList.add('fadeIn');
    } else if (scrollValue < 300){
        skills_section.classList.remove('fadeIn');
    }
    if (scrollValue > 580){
        if (!drawed){
            for (var i = 0; i < charts.length; i++) {
                chartdraw(charts[i], chartvalues[i]);
            }
            drawed = true;
        }
        
    } else if (scrollValue < 450){
        for (var i = 0; i < charts.length; i++) {
            clearcanvas(charts[i], chartvalues[i]);
        }
    }
    if (scrollValue > 880){
        experiance_section.classList.add('fadeIn');
    } else if (scrollValue < 600){
        experiance_section.classList.remove('fadeIn');
    }
    if (scrollValue > 970){
        exper_one.classList.add('expand');
    } else if (scrollValue < 820){
        exper_one.classList.remove('expand');
    }
    if (scrollValue > 1120){
        exper_two.classList.add('expand');
    } else if (scrollValue < 970){
        exper_two.classList.remove('expand');
    }
    if (scrollValue > 1270){
        exper_three.classList.add('expand');
    } else if (scrollValue < 1120){
        exper_three.classList.remove('expand');
    }
    if (scrollValue > 1420){
        exper_four.classList.add('expand');
    } else if (scrollValue < 1270){
        exper_four.classList.remove('expand');
    }
    if (scrollValue > 1800){
        my_projects_section.classList.add('fadeIn');
    } else if (scrollValue < 1650){
        my_projects_section.classList.remove('fadeIn');
    }
    if (scrollValue > 2400){
        contact_section.classList.add('fadeIn');
    } else if (scrollValue < 2250){
        contact_section.classList.remove('fadeIn');
    }
    console.log(scrollValue);
}
function clearcanvas(canvas, percent){
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        percent.textContent = 0;
        drawed = false;
    }
}
function chartdraw(canvas, percent) {
    
    if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
        var currentEndAngle = 1.5;
        var currentStartAngle = 1.5;
        var maxValue = canvas.getAttribute('data-value') * 2 + 1;
        var pie1 = setInterval(draw, 15);
        var counter = 0;

        function draw() {
            drawed = true;
            if (counter >= maxValue) {
                clearInterval(pie1);
                
            } else {
                
                var startAngle = currentStartAngle * Math.PI;
                var endAngle = (currentEndAngle) * Math.PI;

                currentEndAngle = currentEndAngle + 0.01;

                // var counterClockwise = false;

                ctx.clearRect(0, 0, canvas.width, canvas.height);
                // red
                drawCircle(45, "#eee");
                // gray
                drawDonut(startAngle, endAngle);
            }
            counter++;
            if ((counter - 1) % 2 === 0) {
                percent.textContent = (counter - 1) / 2;
            }
        }

        //
        function drawDonut(startAngle, endAngle) {
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, 45, startAngle, endAngle);
            ctx.lineWidth = 7;
            // ctx.strokeStyle = "#34435a";
            ctx.strokeStyle = getComputedStyle(document.documentElement).getPropertyValue('--second-color');            
            ctx.stroke();
        }
        function drawCircle(radius, color) {
            ctx.beginPath();
            ctx.arc(canvas.width / 2, canvas.height / 2, radius, 0, 2 * Math.PI);
            ctx.lineWidth = 7;
            ctx.strokeStyle = color;
            ctx.stroke();
        }
    }
}