// Tabs
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.tab_button');
  const contents = document.querySelectorAll('.tab_content');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(btn => btn.classList.remove('active'));
      contents.forEach(content => content.classList.remove('active'));

      button.classList.add('active');
      document.getElementById(button.dataset.tab).classList.add('active');
    });
  });
});