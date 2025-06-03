fetch('data.json')
  .then(response => response.json())
  .then(data => {
    // About section
    document.getElementById('aboutText').innerHTML = `<p>${data.about}</p>`;

    // Collections
    const gallery = document.getElementById('gallery');
    data.collections.forEach(item => {
      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.alt;
      gallery.appendChild(img);
    });

    // Services
    const serviceList = document.getElementById('servicesList');
    data.services.forEach(service => {
      const li = document.createElement('li');
      li.textContent = service;
      serviceList.appendChild(li);
    });

    // Testimonial
    const testimonialBlock = document.getElementById('testimonialBlock');
    testimonialBlock.innerHTML = `"${data.testimonial.text}" — ${data.testimonial.author}`;
  });
