const btnLogout = document.getElementById("btnLogout");
const btnSearch = document.getElementById("btnSearch");
const searchContent = document.getElementById("searchContent");
const logoDescriptions = document.getElementsByClassName("logo-description");
const myLogo = document.getElementById("myLogo");
const smsModal = document.getElementById("smsModal");
const closeMsg = document.getElementById("msg-close");
const btnMessage = document.getElementById("btnMessage");
const burgerClose = document.getElementById("burgerClose");
const burgerModal = document.getElementById("burgerModal");
const burger = document.getElementById("burger");
const notificationModal = document.getElementById("notificationModal");
const closeNotif = document.getElementById("close-notif");
const openNotif = document.getElementById("open-notif");
const statusModal = document.getElementById("statusModal");
const notificationContent = document.getElementById("notificationContent");
const btnClose = document.getElementById("btnClose");
const sideModal = document.getElementById("sideModal");
// SIDE MODAL
function closeSearchSide() {
  myLogo.style.display = "flex";
  searchContent.style.display = "none";
  sideModal.style.display = "none";
  for (let i = 0; i < logoDescriptions.length; i++) {
    logoDescriptions[i].style.display = "flex";
  }
  closeNotifSide;
}

function openSearchSide() {
  sideModal.style.display = "flex";
  searchContent.style.display = "flex";
  myLogo.style.display = "none";
  for (let i = 0; i < logoDescriptions.length; i++) {
    logoDescriptions[i].style.display = "none";
  }
  closeNotifSide;
}
// SMS MODAL
function smsClose() {
  smsModal.style.display = "none";
}
closeMsg.onclick = smsClose;

function smsOpen() {
  smsModal.style.display = "flex";
}

btnMessage.onclick = smsOpen;

burgerClose.onclick = () => {
  burgerModal.style.display = "none";
};

// NOTIFICATION SIDE POP UP
function openNotifSide() {
  notificationContent.style.display = "flex";
  searchContent.style.display = "none";
  sideModal.style.display = "flex";
  myLogo.style.display = "none";
  for (let i = 0; i < logoDescriptions.length; i++) {
    logoDescriptions[i].style.display = "none";
  }
}
function closeNotifSide() {
  notificationContent.style.display = "none";
  myLogo.style.display = "flex";
  sideModal.style.display = "none";
  for (let i = 0; i < logoDescriptions.length; i++) {
    logoDescriptions[i].style.display = "flex";
  }
}

// CREATE STATUS MODAL
function openStatusModal() {
  statusModal.style.display = "flex";
}
function closeStatusModal() {
  statusModal.style.display = "none";
}

// NOTIFICATION MODAL
function openNotificationModal() {
  notificationModal.style.display = "flex";
}
function closeNotificationModal() {
  notificationModal.style.display = "none";
}
closeNotif.onclick = closeNotificationModal;
openNotif.onclick = openNotificationModal;

// BURGER MODAL
burger.onclick = () => {
  burgerModal.style.display = "flex";
};

btnLogout.onclick = () => {
  window.location.href = "./index.html";
};
