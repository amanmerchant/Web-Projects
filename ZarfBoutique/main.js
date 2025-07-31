$(document).ready(function () {
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').addClass('active');
        } else {
            $('.back-to-top').removeClass('active');
        }
    });
    // Wait for DOM to load
    document.addEventListener("DOMContentLoaded", function () {
        const offcanvasElement = document.getElementById("offcanvasNavbar");
        const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);

        // Select all nav links inside offcanvas
        const navLinks = offcanvasElement.querySelectorAll(".nav-link");

        navLinks.forEach((link) => {
            link.addEventListener("click", () => {
                offcanvas.hide(); // Hide offcanvas on link click
            });
        });
    });


    // Product filtering
    $('.filter-btn').click(function () {
        $('.filter-btn').removeClass('active');
        $(this).addClass('active');

        const filterValue = $(this).attr('data-filter');
        if (filterValue === 'all') {
            $('.product-card').show();
        } else {
            $('.product-card').hide();
            $(`.product-card[data-category="${filterValue}"]`).show();
        }
    });

   $('#contactForm').submit(function (e) {
        e.preventDefault();

        const form = $(this)[0];
        const formData = new FormData(form);
        const name = $('#name').val();

        $.ajax({
            url: 'https://api.web3forms.com/submit',
            method: 'POST',
            data: formData,
            processData: false,
            contentType: false,
            success: function (response) {
                // Show success alert
                const alertHTML = `
                    <div class="alert alert-success alert-dismissible fade show mt-3" role="alert">
                        <strong>Thank you, ${name}!</strong> Your message has been sent successfully.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                `;
                $('#contactForm').before(alertHTML);
                form.reset();

                setTimeout(() => {
                    $('.alert').alert('close');
                }, 5000);
            },
            error: function () {
                // Show error alert
                const alertHTML = `
                    <div class="alert alert-danger alert-dismissible fade show mt-3" role="alert">
                        <strong>Oops!</strong> Something went wrong. Please try again later.
                        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                    </div>
                `;
                $('#contactForm').before(alertHTML);

                setTimeout(() => {
                    $('.alert').alert('close');
                }, 5000);
            }
        });
    });

    // Close offcanvas when clicking a link
    $('.offcanvas-body .nav-link').click(function () {
        $('.btn-close').click();
    });
});

    const adminPhone = "9822726888"; // Replace with your admin's number (no +)

    $(document).on("click", ".know-details", function () {
        const card = $(this).closest(".product-card");
        const productName = card.find("h3").text();
        const productImg = card.find("img").attr("src");

        const message = `Hello, I would like to know more details about:\n\n*${productName}*\nImage: ${window.location.origin}/${productImg}`;
        const whatsappURL = `https://wa.me/${adminPhone}?text=${encodeURIComponent(message)}`;

        window.open(whatsappURL, "_blank");
    });

    