
document.getElementById('search-input').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const imageCards = document.querySelectorAll('.image-card');
    
    imageCards.forEach(card => {
        const imageName = card.querySelector('h4').textContent.toLowerCase();
        const authorName = card.querySelector('.author') ? card.querySelector('.author').textContent.toLowerCase() : '';
        
        if (imageName.includes(searchTerm) || authorName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});
function toggleAuth(button) {
    var loginButton = document.querySelector('.login');
    var signUpButton = document.querySelector('.sign-up');

    if (button === 'Log In') {
        loginButton.classList.add('active');
        signUpButton.classList.remove('active');
    } else if (button === 'Sign Up') {
        loginButton.classList.remove('active');
        signUpButton.classList.add('active');
    }
}


function openModal(imageSrc, imageName, imageLikes, imageViews) {
    document.getElementById('modal-img').src = imageSrc;
    document.getElementById('modal-name').textContent = imageName;
    document.getElementById('modal-likes').textContent = `❤️ ${imageLikes}`;
    document.getElementById('modal-views').textContent = `👁️ ${imageViews}`;
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function toggleDropdown() {
    document.querySelector('.dropdown-menu').classList.toggle('show');
}

function toggleRecommendationDropdown() {
    var recommendationDropdown = document.querySelector('.recommendation-dropdown');
    recommendationDropdown.classList.toggle('active');
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdown a')) {
        var dropdowns = document.getElementsByClassName("dropdown-menu");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
    
    if (!event.target.matches('.sort-button')) {
        var recDropdowns = document.getElementsByClassName("recommendation-menu");
        for (var i = 0; i < recDropdowns.length; i++) {
            var openRecDropdown = recDropdowns[i];
            if (openRecDropdown.classList.contains('show')) {
                openRecDropdown.classList.remove('show');
            }
        }
    }
}
