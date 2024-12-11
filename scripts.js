// Smooth scrolling and active link highlighting
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // Prevent default link behavior
  
      const targetId = this.getAttribute('href'); 
      const targetElement = document.querySelector(targetId);
      const headerHeight = document.querySelector('header').offsetHeight;
  
      // Scroll to the target element
      window.scrollTo({
        top: targetElement.offsetTop - headerHeight, // Scroll to the section minus header height
        behavior: 'smooth' // Enable smooth scrolling
      });
  
      // Highlight the active link in navigation
      document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
      });
      this.classList.add('active');
    });
  });
  
  // Scroll to top button
  const scrollToTopButton = document.createElement('button');
  scrollToTopButton.innerHTML = '↑';
  scrollToTopButton.id = 'scroll-to-top';
  scrollToTopButton.style.display = 'none'; // Initially hidden
  document.body.appendChild(scrollToTopButton);
  
  // Show button when scrolled down 100px
  window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
      scrollToTopButton.style.display = 'block';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });
  
  // Scroll to the top when button is clicked
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Intersection Observer to add animation to sections when they appear in the viewport
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the section is visible
  
  sections.forEach(section => {
    observer.observe(section);
  });
  // Theme toggle functionality
  const themeToggleButton = document.getElementById('theme-toggle');
  themeToggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    themeToggleButton.classList.toggle('dark-mode');
  });
  