
        const slider = document.querySelector('.slides');
        const slides = document.querySelectorAll('.slide');
        const prevButton = document.querySelector('.prev');
        const nextButton = document.querySelector('.next');
        let currentIndex = 0;
        const totalSlides = slides.length;
    

        function showSlide(index) {
            if (index >= totalSlides) {
                currentIndex = 0;
            } else if (index < 0) {
                currentIndex = totalSlides - 1;
            } else {
                currentIndex = index;
            }
            slider.style.transform = `translateX(-${currentIndex * 100}%)`;
        }

        function nextSlide() {
            showSlide(currentIndex + 1);
        }

        function prevSlide() {
            showSlide(currentIndex - 1);
        }

       