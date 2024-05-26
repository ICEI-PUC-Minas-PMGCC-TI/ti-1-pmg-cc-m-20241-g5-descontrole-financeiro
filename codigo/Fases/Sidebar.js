document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.getElementById('sidebar');
    const openBtn = document.getElementById('openSidebar');
    const closeBtn = document.getElementById('closeSidebar');
    openBtn.addEventListener('click', function() {
        sidebar.style.width = '200px';
        openBtn.style.display = 'none';
        closeBtn.style.display = 'block';
    });
    closeBtn.addEventListener('click', function() {
        sidebar.style.width = '0';
        openBtn.style.display = 'block';
        closeBtn.style.display = 'none';
    });
})