   // Filter functionality
   const filterButtons = document.querySelectorAll('.filter-btn');
   const items = document.querySelectorAll('.item');

   filterButtons.forEach(button => {
       button.addEventListener('click', () => {
           const category = button.getAttribute('data-category');

           items.forEach(item => {
               if (category === 'all' || item.classList.contains(category)) {
                   item.style.display = 'block';
               } else {
                   item.style.display = 'none';
               }
           });
       });
   });

   var book = document.querySelectorAll('#book');

   // Add click event listeners to each button
   book.forEach(function(button) {
       button.addEventListener('click', function() {
           // Generate random order and table numbers
           const orderNumber = Math.floor(Math.random() * 100) + 1;
           const tableNumber = Math.floor(Math.random() * 100) + 1;
   

                const modalMessage = document.getElementById('modalMessage');
                modalMessage.innerHTML = `Your order is booked successfully!<br>Your order number is ${orderNumber},<br>and your table number is ${tableNumber}.`;


                // Show the modal
                const bookingModal = new bootstrap.Modal(document.getElementById('bookingModal'));
                bookingModal.show();
       });
   });

   // Feedback form submission handler
   document.getElementById('feedbackForm').addEventListener('submit', function (e) {
       e.preventDefault();
       alert('Thank you for your feedback!');
       this.reset();
   });


   gsap.from("nav div a,.signin,.navbar-toggler",{
        duration:1.5,
        y:-100,   
   })
   gsap.from(".hero-content h1",{
        scale:0,
        duration:1.5,
        x:-50,
   })
   gsap.from("#gallery .filter-btn",{
    duration:1.5,
    y:-50,
    opacity:0,
    stagger:0.5,
})



