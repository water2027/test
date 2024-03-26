window.addEventListener('resize', function() {
    document.querySelector('a-scene').style.width = window.innerWidth + 'px';
    document.querySelector('a-scene').style.height = window.innerHeight + 'px';
});
