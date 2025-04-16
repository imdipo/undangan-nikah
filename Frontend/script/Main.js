// Scroll Progress Indicator Logic
document.addEventListener('DOMContentLoaded', function() {
    const progressIndicator = document.querySelector('.progress-indicator');
    const brideAvatar = document.querySelector('.bride-avatar');
    const groomAvatar = document.querySelector('.groom-avatar');
    const kissingImage = document.querySelector('.kissing');
    const containerWidth = document.querySelector('.scroll-progress-container').offsetWidth;
    const brideSize = brideAvatar.offsetWidth;
    
    // SVG Animation setup
    function createSVGAvatars() {
        //here we would normally create SVG animations
        //for placeholder purposes, we're using placeholder images
    }
    
    createSVGAvatars();
    
    // Update progress bar and avatars on scroll
    window.addEventListener('scroll', function() {
        const scrollTop = window.scrollY;
        const docHeight = document.body.scrollHeight;
        const winHeight = window.innerHeight;
        const scrollPercent = scrollTop / (docHeight - winHeight);
        const progressWidth = scrollPercent * 100;
        
        // Update progress bar width
        progressIndicator.style.width = progressWidth + '%';
        
        // Calculate bride avatar position
        const maxTravelDistance = containerWidth - (brideSize * 2) - 10;
        const bridePosition = 5 + (scrollPercent * maxTravelDistance);
        brideAvatar.style.left = bridePosition + 'px';
        
        // Check if scroll has reached bottom (with a small tolerance)
        if (scrollPercent > 0.98) {
            // Show kissing image and hide individual avatars
            kissingImage.style.display = 'block';
            brideAvatar.style.display = 'none';
            groomAvatar.style.display = 'none';
        } else {
            // Show individual avatars and hide kissing image
            kissingImage.style.display = 'none';
            brideAvatar.style.display = 'block';
            groomAvatar.style.display = 'block';
        }
    });
    
    // Countdown Timer
    const weddingDate = new Date('June 20, 2025 08:00:00').getTime();
    
    function updateCountdown() {
        const now = new Date().getTime();
        const distance = weddingDate - now;
        
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        document.getElementById('days').innerText = days;
        document.getElementById('hours').innerText = hours;
        document.getElementById('minutes').innerText = minutes;
        document.getElementById('seconds').innerText = seconds;
        
        if (distance < 0) {
            clearInterval(countdownTimer);
            document.getElementById('days').innerText = '0';
            document.getElementById('hours').innerText = '0';
            document.getElementById('minutes').innerText = '0';
            document.getElementById('seconds').innerText = '0';
        }
    }
    
    updateCountdown();
    const countdownTimer = setInterval(updateCountdown, 1000);
});
