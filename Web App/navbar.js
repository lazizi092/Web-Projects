const navbarHTML = `
<style>
    .navbar {
        background-color: #999999;
        color: white;
        padding: 10px 0;
        position: fixed;
        top: 0;
        width: 100%;
        z-index: 100;
        left: 0;
        font-size: 20px;
    }
    .navbar ul {
        list-style: none;
        padding: 0%;
        margin: 0%;
        text-align: center;
    }
    .navbar li {
        display: inline;
        margin: 0 15px;
    }
    .navbar a {
        color: white;
        text-decoration: none;
    }
</style>
<nav class="navbar">
    <ul>
        <li><a href="About Me.html">About Me</a></li>
        <li><a href="skills.html">Skills</a></li>
        <li><a href="projects.html">Projects</a></li>
        <li><a href="Certifications.html">Certifications</a></li>
    </ul>
</nav>
`;

document.addEventListener('DOMContentLoaded', function() {
    const body = document.querySelector('body');
    if (body) {
        body.insertAdjacentHTML('afterbegin', navbarHTML);
    }
});