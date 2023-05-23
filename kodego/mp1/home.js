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

function openNotificationModal() {
  notificationModal.style.display = "flex";
}
function closeNotificationModal() {
  notificationModal.style.display = "none";
}
closeNotif.onclick = closeNotificationModal;
openNotif.onclick = openNotificationModal;

burger.onclick = () => {
  burgerModal.style.display = "flex";
};

btnLogout.onclick = () => {
  window.location.href = "./index.html";
};

const btnClose = document.getElementById("btnClose");
const sideModal = document.getElementById("sideModal");

btnClose.onclick = () => {
  myLogo.style.display = "flex";
  sideModal.style.display = "none";
  for (let i = 0; i < logoDescriptions.length; i++) {
    logoDescriptions[i].style.display = "flex";
  }
};

btnSearch.onclick = () => {
  sideModal.style.display = "flex";
  searchContent.style.display = "flex";
  myLogo.style.display = "none";
  for (let i = 0; i < logoDescriptions.length; i++) {
    logoDescriptions[i].style.display = "none";
  }
};

closeMsg.onclick = () => {
  smsModal.style.display = "none";
};

btnMessage.onclick = () => {
  smsModal.style.display = "flex";
};

burgerClose.onclick = () => {
  burgerModal.style.display = "none";
};
