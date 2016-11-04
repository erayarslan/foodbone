<header class="header">
  <h1 class="header-logo">
    <a href="#">foodbone</a>
  </h1>

  <div class="header-links">
    <h4 class="header-link">
      <a href="#login">login</a>
    </h4>
    <h4 class="header-link">
      <a href="#register">register</a>
    </h4>
  </div>

  <div class="header-auth">
    <span><%= auth %></span>
    <% if (auth === true) { %>
      <span> (O) </span>
    <% } else { %>
      <span> (X) </span>
    <% } %>
  </div>
</header>
