document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('openSidebar');
    const closeBtn = document.getElementById('closeSidebar');

    openBtn.addEventListener('click', function() {
        if (window.innerWidth <= 400) {
            sidebar.style.width = '50%';
        } else if (window.innerWidth <= 600) {
            sidebar.style.width = '40%';
        } else {
            sidebar.style.width = '230px';
        }
        openBtn.style.display = 'none';
        closeBtn.style.display = 'block';
    });
    closeBtn.addEventListener('click', function() {
        sidebar.style.width = '0';
        openBtn.style.display = 'block';
        closeBtn.style.display = 'none';
    });
    window.addEventListener('resize', function() {
        if (sidebar.style.width !== '0') {
            if (window.innerWidth <= 400) {
                sidebar.style.width = '30%';
            } else if (window.innerWidth <= 600) {
                sidebar.style.width = '20%';
            } else {
                sidebar.style.width = '200px';
            }
        }
    });
});