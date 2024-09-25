function navigateToBlog() {

   const blog = document.getElementById('blog');
    blog.classList.add('hidden');
    const home = document.getElementById("home");
    home.classList.remove("hidden");
  window.location.href = "blog.html"; 
}
function navigateToHome() {
  const blog = document.getElementById("blog");
  blog.classList.remove("hidden");
  const home = document.getElementById("home");
  home.classList.add("hidden");
  window.location.href = "index.html"; 
}
