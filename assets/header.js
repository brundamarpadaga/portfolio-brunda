// Shared site header, injected into <header id="site-header"></header>.
// Edit this file to change the header (name, nav links, photo) on every page at once.
(function () {
  var HEADER_HTML = [
    '<div class="header-content">',
    '  <h1>Brunda Marpadaga</h1>',
    '  <nav>',
    '    <a href="index.html">Home</a>',
    '    <a href="about.html">About</a>',
    '    <a href="experience.html">Experience</a>',
    '    <a href="projects.html">Projects</a>',
    '    <a href="resume.html">Resume</a>',
    '    <a href="personality.html">Beyond Engineering</a>',
    '    <a href="contact.html">Contact</a>',
    '  </nav>',
    '</div>',
    '<img src="https://lh3.googleusercontent.com/d/1CZkUchGCGcqMlCeX-e3vWjZid6kzWFPu" alt="Brunda Marpadaga" class="profile-pic">'
  ].join('\n');

  var target = document.getElementById('site-header');
  if (target) {
    target.innerHTML = HEADER_HTML;
  }
})();
