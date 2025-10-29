<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Rapture</title>
  <style>
    body {
      margin: 0;
      background-color: #f5f5f8;
      font-family: Georgia, serif;
      color: #1e1e1e;
    }

    header {
      background: linear-gradient(to right, #6f4e9c, #8b6ac9);
      color: white;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 15px 30px;
      flex-wrap: wrap;
    }

    .logo {
      font-size: 2em;
      font-weight: bold;
      letter-spacing: 1px;
    }

    nav a {
      margin: 0 15px;
      text-decoration: none;
      font-weight: bold;
      color: #d7c8f3;
      transition: color 0.3s;
    }

    nav a:hover {
      color: white;
    }

    .account-bar {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    .account-bar a {
      color: #d7c8f3;
      text-decoration: none;
      font-weight: bold;
    }

    .account-bar a:hover {
      color: white;
    }

    .account-bar input {
      border: none;
      border-radius: 10px;
      padding: 5px 10px;
      background-color: #d5c8ef;
      color: #333;
    }

    main {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      padding: 40px 20px;
    }

    section {
      width: 45%;
      min-width: 300px;
      margin-bottom: 40px;
    }

    h2 {
      color: #5b4ca7;
      border-bottom: 1px dotted #888;
      padding-bottom: 5px;
    }

    ul.subjects {
      list-style: none;
      padding: 0;
      columns: 2;
    }

    ul.subjects li {
      padding: 3px 0;
    }

    .news {
      width: 90%;
    }

    article {
      border-bottom: 1px solid #999;
      margin-top: 20px;
      padding-bottom: 10px;
    }

    article a {
      color: #4b3e9c;
      text-decoration: none;
      font-weight: bold;
    }

    article a:hover {
      text-decoration: underline;
    }

    footer {
      text-align: center;
      background-color: #6f4e9c;
      color: white;
      padding: 15px;
    }

    /* Login popup */
    .login-popup {
      position: absolute;
      top: 80px;
      right: 60px;
      background: #d5c8ef;
      border: 2px solid #8b6ac9;
      border-radius: 10px;
      padding: 20px;
      display: none;
      flex-direction: column;
      gap: 10px;
      width: 220px;
      color: #333;
    }

    .login-popup input {
      padding: 5px;
      border: 1px solid #8b6ac9;
      border-radius: 5px;
    }

    .login-popup button {
      background-color: #6f4e9c;
      color: white;
      border: none;
      padding: 6px;
      border-radius: 5px;
      cursor: pointer;
    }

    .login-popup button:hover {
      background-color: #5a3f84;
    }

    .hidden {
      display: none;
    }
  </style>
</head>
<body>
  <header>
    <div class="logo">Rapture</div>
    <nav>
      <a href="#" onclick="showSection('home')">Home</a>
      <a href="#" onclick="showSection('browse')">Browse</a>
      <a href="#" onclick="showSection('about')">About</a>
    </nav>
    <div class="account-bar">
      <a href="#" onclick="toggleLogin()">*Account*</a>
      <a href="#" onclick="showSection('post')">Post</a>
      <a href="#" id="loginBtn" onclick="toggleLogin()">Log In</a>
      <input type="text" id="search" placeholder="Search" oninput="highlightSearch()">
    </div>

    <div id="loginPopup" class="login-popup">
      <label>Email or username:</label>
      <input type="text" id="email" />
      <label>Password:</label>
      <input type="password" id="password" />
      <button onclick="fakeLogin()">Log In</button>
      <small><a href="#" style="color:#4b3e9c;">Forgot password?</a></small>
    </div>
  </header>

  <main id="content">
    <section id="home">
      <h2>Discover what intrigues you</h2>
      <p>Peruse subjects via media or star up to 10 interests to have them listed below</p>
      <ul class="subjects">
        <li>★ All subjects</li>
        <li>★ Art & Theatre</li>
        <li>★ Music</li>
        <li>★ History</li>
        <li>★ Literature</li>
        <li>★ Sports</li>
        <li>★ Humanities</li>
        <li>★ School-Taught</li>
        <li>★ Culinary</li>
        <li>★ Uncategorizable/Niche</li>
      </ul>

      <h2>Our purpose(s):</h2>
      <h3>The Whole Point:</h3>
      <p>We believe education is one of the most important factors in a person’s life. This site gives learners of all ages a place to learn freely, trading knowledge for knowledge.</p>

      <h3>The most user-interactive part:</h3>
      <p>Users can discuss topics under their profile or in community clusters — learning together, sharing, and debating ideas.</p>

      <h3>Academics:</h3>
      <p>We offer free courses with completion certificates. Want to volunteer or fundraise? We’ve got paths for that too.</p>

      <h2>News</h2>
      <article>
        <h3>The Latest News We Have for Everyone!</h3>
        <p>This is a preview of our updates channel. Users who are signed up get access to more personalized news.</p>
        <a href="#">Read more</a>
      </article>
      <article>
        <h3>More News or Something:</h3>
        <p>Scroll for older updates. The latest ones always appear here.</p>
        <a href="#">Read more</a>
      </article>
    </section>

    <section id="browse" class="hidden">
      <h2>Browse</h2>
      <p>Explore our categories and dive into topics that interest you. Coming soon.</p>
    </section>

    <section id="about" class="hidden">
      <h2>About Rapture</h2>
      <p>Rapture is built to connect learners, creators, and educators through open discussion and free knowledge-sharing.</p>
    </section>

    <section id="post" class="hidden">
      <h2>Create a Post</h2>
      <textarea style="width:100%;height:150px;" placeholder="Write your post here..."></textarea>
      <br>
      <button onclick="alert('Post submitted!')">Submit</button>
    </section>
  </main>

  <footer>
    <p>© 2025 Rapture — Knowledge for everyone.</p>
  </footer>

  <script>
    function toggleLogin() {
      const popup = document.getElementById('loginPopup');
      popup.style.display = popup.style.display === 'flex' ? 'none' : 'flex';
    }

    function fakeLogin() {
      const email = document.getElementById('email').value;
      alert('Welcome, ' + (email || 'guest') + '!');
      toggleLogin();
    }

    function showSection(id) {
      document.querySelectorAll('main section').forEach(sec => {
        sec.classList.add('hidden');
      });
      document.getElementById(id).classList.remove('hidden');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function highlightSearch() {
      const query = document.getElementById('search').value.toLowerCase();
      document.querySelectorAll('main h3, main p').forEach(el => {
        const text = el.textContent;
        if (query && text.toLowerCase().includes(query)) {
          el.style.backgroundColor = '#fff6b2';
        } else {
          el.style.backgroundColor = 'transparent';
        }
      });
    }
  </script>
</body>
</html>
