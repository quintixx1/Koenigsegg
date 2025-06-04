function showPage(pageId) {
    document.getElementById("main").classList.add("hidden");
    document.getElementById("cc850").classList.add("hidden");
    document.getElementById("regera").classList.add("hidden");
    document.getElementById("jesko").classList.add("hidden");
    document.getElementById(pageId).classList.remove("hidden");
  }
