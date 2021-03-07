document.getElementById('LogIn-Button').addEventListener('click', function() {
  document.querySelector('.LogIn-PopUp-background').style.display='flex';
});

document.querySelector('.LogIn-close').addEventListener('click', function() {
  document.querySelector('.LogIn-PopUp-background').style.display='none';
})

document.getElementById('SignUp-Button').addEventListener('click', function() {
  document.querySelector('.SignUp-PopUp-background').style.display='flex';
});

document.querySelector('.SignUp-close').addEventListener('click', function() {
  document.querySelector('.SignUp-PopUp-background').style.display='none';
})