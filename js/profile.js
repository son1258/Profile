function handleSearch(){
    var searchInput = document.getElementById('seachInput').ariaValueMax;
    console.log('Search: ' + searchInput);
}
function handleLogout(){
    console.log('Logout botton clicked');
}
// Function to handle the edit icon click
function openEditModal() {
    document.getElementById('editModal').style.display = 'block';
}

// Function to handle the share icon click
function handleShareClick() {
    console.log('Share icon clicked');
}

// Function to submit the edit form
function submitEditForm() {
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var work = document.getElementById('work').value;

    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Work: ', work)

    closeEditModal();
}

// Function to close the edit modal
function closeEditModal() {
    document.getElementById('editModal').style.display = 'none';
}