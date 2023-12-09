const activity = document.getElementById('activity');
const activityItems = document.querySelectorAll('.activity-item');
const notificationsCounter = document.querySelector('.header-notifications-counter')
const clearAllNotifications = document.querySelector('.header-notifications-clear');

let count = 0;

function updateNotifications() {
    for (let i = 0; i < activityItems.length; i++) {
    const item = activityItems[i];
    const attr = item.getAttribute('data-read');
    const redDot = item.querySelector('.unread-dot');

        if (attr === 'unread') {
            count += 1;
            notificationsCounter.innerHTML = count;

                item.addEventListener('click', () => {
                    item.setAttribute('data-read','read');
                    redDot.style.display = "none";
                    count -= 1;
                    notificationsCounter.innerHTML = count;
                    checkCount();
                })
        }
    }
}

function checkCount() {
    if (count === 0) {
        notificationsCounter.remove();
    }
}

// Event Listeners
window.addEventListener('DOMContentLoaded', updateNotifications);

clearAllNotifications.addEventListener('click', (e) => {
    if (count !== 0) {
        activityItems.forEach((item) => {
            const attr = item.getAttribute('data-read');
                if (attr === 'unread') {
                    item.setAttribute('data-read','read');
                    const redDot = item.querySelector('.unread-dot');
                    redDot.style.display = "none";
                    count -= 1;
                    notificationsCounter.innerHTML = count;
                }
            }) 
            checkCount();
        }
})




// function changeNotifState(number) {
//     console.log(number);
//     number--;
//     notifications.innerHTML = number;
    
//     if (number === 0) {
//         notifications.style.display = "none";
//     } else {
//         notifications.style.display = "flex";
//     }
// }

// console.log(activityItem)

// const array = [];


// activityItem.forEach((item) => { 
//     const attr = item.getAttribute('data-read');
//     if (attr === 'unread') {
//         array.push(item);
//         console.log(array)
//         let number = array.length;
//         // console.log(number);
//         console.log(number);
//         notifications.innerHTML = number;
//         item.addEventListener('click', (e) => {
//         activityItem.forEach((message) => {
//             if (message === item) {
//                 changeNotifState(number);
//                 const redDot = message.querySelector('.unread-dot');
//                 message.setAttribute('data-read','read');
//                 redDot.style.display = "none";
//             }
//     })  
//     })
//     }
// })



