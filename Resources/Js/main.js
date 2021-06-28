var noon = 12;
var showCurrentTime = function () {
    var currentTime = new Date();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";

    if (hours >= noon) {
        meridian = "PM";
    }

    if (hours > noon) {
        hours = hours - 12;
    }

    if (hours < 10) {
        hours = "0" + hours;
    }

    if (minutes < 10) {
        minutes = "0" + minutes;
    }

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    var clockTime = hours + ':' + minutes + ':' + seconds + meridian;

    document.getElementById("clock").innerText = clockTime;
    setTimeout(showCurrentTime, 1000)
}

showCurrentTime();



// Date
var curday = function (sp) {
    today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //As January is 0.
    var yyyy = today.getFullYear();

    if (dd < 10) dd = '0' + dd;
    if (mm < 10) mm = '0' + mm;
    return (dd + sp + mm + sp + yyyy);
};
document.getElementById("date").innerText = curday('/');


// day
var myDate = new Date();
var myDay = myDate.getDay();
var weekday = ['Sunday', 'Monday', 'Tuesday',
    'Wednesday', 'Thursday', 'Friday', 'Saturday'
];

document.getElementById("day").innerText = weekday[myDay];

// Back to top

const scrollToTopButton = document.getElementById('js-top');


const scrollFunc = () => {

    let y = window.scrollY;


    if (y > 0) {
        scrollToTopButton.className = "top-link show";
    } else {
        scrollToTopButton.className = "top-link hide";
    }
};

window.addEventListener("scroll", scrollFunc);

const scrollToTop = () => {

    const c = document.documentElement.scrollTop || document.body.scrollTop;

    if (c > 0) {
        window.requestAnimationFrame(scrollToTop);

        window.scrollTo(0, c - c / 10);
    }
};

scrollToTopButton.onclick = function (e) {
    e.preventDefault();
    scrollToTop();
}

// 

