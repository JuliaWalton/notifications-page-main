const activityItem = document.querySelectorAll('.activity-item');
const activity = document.getElementById('activity');
const notifications = document.querySelector('.header-notifications')
const clearAllNotifications = document.querySelector('.header-notifications-clear');

function changeNotifState(number) {
    number--;
    notifications.innerHTML = number;
    
    if (number === 0) {
        notifications.style.display = "none";
    } else {
        notifications.style.display = "flex";
    }
}

clearAllNotifications.addEventListener('click', (e) => {
    notifications.style.display = "none";
    if (array.length !== 0) {
        activityItem.forEach((item) => {
            console.log(item);
            const attr = item.getAttribute('data-read');
                if (attr === 'unread') {
                    item.setAttribute('data-read','read');
                    const redDot = item.querySelector('.unread-dot');
                    redDot.style.display = "none";
        }
    }) 
    }
})


const array = [];

activityItem.forEach((item) => { 
    const attr = item.getAttribute('data-read');
    if (attr === 'unread') {
        array.push(item);
        let number = array.length;
        console.log(number);
        notifications.innerHTML = number;
        item.addEventListener('click', (e) => {
        activityItem.forEach((message) => {
            if (message === item) {
                changeNotifState(number);
                const redDot = message.querySelector('.unread-dot');
                message.setAttribute('data-read','read');
                redDot.style.display = "none";
            }
    })  
    })
    }
})



