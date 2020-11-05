
window.onload = function() {

  console.log('hello body');

  //navigation
  addNavsClickHandler();

}

const addNavsClickHandler = () => {
  document.querySelector('.navigation').addEventListener('click', (e) => {
    if (e.target.classList.contains('navigation__link')) {
      let clickedNav = e.target;
      removeSelectedNavs();
      selectClickedNav(clickedNav);
    }
  })
}

const removeSelectedNavs = () => {
  let navs = document.querySelectorAll('.navigation .navigation__link');
  navs.forEach(tag => {
    tag.classList.remove('active');
    tag.classList.add('unactive');
  })
}

const selectClickedNav = (clickedNav) => {
  clickedNav.classList.add('active');
  clickedNav.classList.remove('unactive');
}