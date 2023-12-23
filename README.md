# Frontend Mentor - Notifications Page Solution

![Design preview for the Notifications page coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out my solution for this challenge!

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Live Site URL: [https://juliawalton.github.io/notifications-page-main/](https://juliawalton.github.io/notifications-page-main/)

## My process

### Built with

- Semantic HTML5 markup
- Data Attributes
- CSS Grid
- Vanilla JS

### What I learned

A key learning feature of this project was being able to practice dynamically setting the notification count in response to the "read" or "unread" state of the notifications.

```js
if (attr === "unread") {
  count += 1;
  notificationsCounter.innerHTML = count;

  item.addEventListener("click", () => {
    item.setAttribute("data-read", "read");
    redDot.style.display = "none";
    count -= 1;
    notificationsCounter.innerHTML = count;
    checkCount();
  });
}
```

## Author

- Website - [Julia's Portfolio](https://juliawalton.github.io/portfolio/)
- LinkedIn - [Julia Walton](https://www.linkedin.com/in/juliawalton/)
