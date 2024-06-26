
## About
Our website is dedicated to supporting the Saudi Arabian perfume industry. We showcase a curated selection of the top Saudi perfume brands, making it easier for customers to discover and access these high-quality products.
Currently, we feature three premier Saudi perfume brands on our site: Abdulsamad Alqurashi, Laverne, and Faisal Aldayel. These brands represent some of the best and most prestigious perfumes produced in Saudi Arabia. 
We aim to promote and bolster the local fragrance sector by highlighting these leading Saudi perfume makers. Our goal is to facilitate greater appreciation and access to the exceptional perfumes crafted within Saudi Arabia.

## goals:
To be an independent brand and deliver our products to various regions in Saudi Arabia

## Screenshots:

Include screenshots of the different sections of the website to provide an overview of its design and layout.

- Signup page
  <div>
<img src= "https://github.com/norahkb/perfume-website/assets/117577032/3617e494-36e9-4e13-8c60-c85e42e53520"
width="600" height ="300">
</div>

- Login Page
    <div>
<img src= "https://github.com/norahkb/perfume-website/assets/117577032/10e65887-d26a-4743-8546-790ddd7ac440"
width="600" height ="300">
</div>  

- Front Section
     <div>
<img src= "https://github.com/norahkb/perfume-website/assets/117577032/59b429e3-d32d-4da5-8545-e5600df50d0b"
width="600" height ="300">
</div>  

- FEATURED BRANDS Section
  
  <div>
<img src= "https://github.com/norahkb/perfume-website/assets/117577032/05680743-6a07-4ee2-ac01-745164016ae1"
width="600" height ="300">
</div>  
  
- NEW PRODUCTS Section
    <div>
<img src= "https://github.com/norahkb/perfume-website/assets/117577032/52231a0c-d068-48e2-9752-9a74c6339762"
width="600" height ="300">
</div>  
  
- SALES Section
 <div>
<img src= "https://github.com/norahkb/perfume-website/assets/117577032/a5704486-fd15-4de0-a318-55c814c5455f"
width="600" height ="300">
</div>  

- DISCOVER NEW COLLECTIONS Section
  
  <div>
<img src= "https://github.com/norahkb/perfume-website/assets/117577032/d2a98865-5486-487c-8e0f-fea44395201f"
width="600" height ="300">
</div>  

- ABOUT US Section
  
 <div>
<img src= "https://github.com/norahkb/perfume-website/assets/117577032/da036006-cec7-40b8-b532-00295003d7a6"
width="600" height ="300">
</div>  

- Footer Section
  
  <div>
<img src= "https://github.com/norahkb/perfume-website/assets/117577032/e39ce512-2cc5-4feb-a561-a7c66d1a1ef2"
width="600" height ="300">
</div>  
    
  
## setup:

- Route to Serve static files (HTML, CSS, JavaScript)
  
app.use(express.static(path.join(__dirname, 'src', 'public')));

- Route to serve main page
  
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'SaudiScent', 'index.html'));
});

- Route to serve login page
  
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'public', 'login.html'));
});

- Route to serve sign up page
  
app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'public', 'signup.html'));
});


## Technologies used:
- HTML
- CSS
- JavaScript
- Node.js
- Express
- MongoDB
- BootStrap
- Googlefonts
  

## Use Case:

The user journey on the website can be summarized using the following Use Case:

<div>
<img src= "https://github.com/norahkb/perfume-website/assets/117577032/826359d4-11fd-4ed0-b82b-fe0bee8aa869"
width="300" height ="">
</div>


## Flowchart:

The user journey on the website can be summarized using the following flowchart:

<div>
<img src= "https://github.com/norahkb/perfume-website/assets/117577032/1887e586-c912-425a-9873-711501e60704"
width="300" height ="">
</div>

## Demo:
https://drive.google.com/file/d/1HN7Inpz2U6pbk7KHd4V7sczeThWHRJ5n/view?usp=share_link


## Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone https://github.com/norahkb/perfume-website/tree/main`
2. Install dependencies: `npm i express mongoose body-parser`
3. Start MongoDB: `mongodb connect`
4. Start the server: `nodemon index.js`
5. Open the website in your browser: `http://localhost:3000

## Future Work:
We will expand the selection of Saudi Arabian perfume brands offered on our website to cover a wider range. In addition, we will be offering our exclusive perfume brand.


## Resources:
[https://www.canva.com/design/DAGF2qBQ1Ns/4Ua7F_OpSptcekgD0x94vA/edit?utm_content=DAGF2qBQ1Ns&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton]

[https://youtu.be/ajltKxgsEko?si=GVgAbV9W6bm71aeU](https://youtu.be/ajltKxgsEko?si=GVgAbV9W6bm71aeU)

[https://youtu.be/evz1LqEomTE?si=p3giK6kLTeF9sK4p](https://youtu.be/evz1LqEomTE?si=p3giK6kLTeF9sK4p)

[https://laverne.com/]

[https://faisalaldayel.com/]

[https://store.asqgrp.com/ar/]

[https://www.behance.net/gallery/118464619/Laverne-digital-design]

## Students Names:
> Deemah Alrajhi 

> Noura Binzaid 

> Rawan Alnufaie
