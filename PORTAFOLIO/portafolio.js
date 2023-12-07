document.addEventListener('DOMContentLoaded', function () {
    $('.projects-carousel').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.project').show();
});
// Open the modal
function openModal() {
    document.getElementById('modal').style.display = 'block';
  }
  
  // Close the modal
  function closeModal() {
    document.getElementById('modal').style.display = 'none';
  }