document.addEventListener('scroll', onscroll);

//menu

function onscroll(e) {
 const curPos = window.scrollY;
 const divs =  document.querySelectorAll('#main-information>div');
 const links = document.querySelectorAll('.navigation a');

 divs.forEach((el) => {
    if (el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
      links.forEach((a) => {
        a.classList.remove('active');
        if (el.getAttribute('class') === a.getAttribute('href').substring(1)) {
          a.classList.add('active');
        }
      })
    }
  }); 
}

//tags
window.onload = function() {

  addTagsClickHandler();

}
const addTagsClickHandler = () => {
  document.querySelector('.portfolio-tag').addEventListener('click', (e) => {
    if (e.target.classList.contains('tag-bordered')) {
      let clickedTeg = e.target;
      removeSelectedTags();
      selectClickedTag(clickedTeg);
      if (clickedTeg.innerText === 'All') {
        showPictureFirstOrder();
      } else {
        changePictureOrder(clickedTeg.innerText);
      }
    }
  })
}

const  removeSelectedTags = () => {
  let tags = document.querySelectorAll('.portfolio-tag span');
  tags.forEach(span => {
    span.classList.remove('colored');
  })
}

const selectClickedTag = (clickedTeg) => {
  clickedTeg.classList.add('colored');
}

const showPictureFirstOrder = () => {
  let pictures = document.querySelectorAll('.picture-net img');
  pictures.forEach(img => {
    img.classList.remove('picture__hidden');
  })  
}

const changePictureOrder = (selectedTag) => {
  let pictures = document.querySelectorAll('.picture-net img');
  pictures.forEach(img => {
    img.classList.add('picture__hidden');

  })
}