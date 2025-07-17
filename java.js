document.addEventListener('DOMContentLoaded', function() {
    // Get all boxes
    const boxes = document.querySelectorAll('.box');
    
    // Add click event to each box
    boxes.forEach(box => {
        box.addEventListener('click', function() {
            // Close all other boxes
            boxes.forEach(otherBox => {
                if (otherBox !== box) {
                    otherBox.classList.remove('active');
                }
            });
            
            // Toggle current box
            this.classList.toggle('active');
        });
    });
    
    // Color change functionality
    const colorOptions = document.querySelectorAll('.color');
    colorOptions.forEach(color => {
        color.addEventListener('click', function(event) {
            event.stopPropagation(); // Prevent box from closing
            const box = this.closest('.box');
            const colorValue = this.getAttribute('data-color');
            box.style.backgroundColor = getColorCode(colorValue);
        });
    });
    
    // Size change functionality
    const sizeSelects = document.querySelectorAll('.size-select');
    sizeSelects.forEach(select => {
        select.addEventListener('change', function(event) {
            event.stopPropagation(); // Prevent box from closing
            const box = this.closest('.box');
            const size = this.value;
            
            if (size === 'small') {
                box.style.width = '60%';
            } else if (size === 'medium') {
                box.style.width = '80%';
            } else if (size === 'large') {
                box.style.width = '95%';
            }
        });
    });
    
    // Helper function for color codes
    function getColorCode(color) {
        switch(color) {
            case 'red': return '#ffdbdb';
            case 'blue': return '#dbebff';
            case 'green': return '#dbffdb';
            default: return 'white';
        }
    }
    
    // Simple console log to show it's working
    console.log('Interactive boxes ready!');
});