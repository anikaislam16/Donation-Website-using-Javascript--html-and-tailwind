function showSectionById(Id, selectedButton) {
    console.log('hi');
    
  // Get the divs
  const section1 = document.getElementById("donation");
  const section2 = document.getElementById("history");
  section1.classList.add("hidden");
  section2.classList.add("hidden");
  document.getElementById(Id).classList.remove("hidden");

  const button1 = document.getElementById("button1");
  const button2 = document.getElementById("button2");

  button1.classList.remove("bg-[#B4F461]");
  button1.classList.add("bg-white", "border-2");

  button2.classList.remove("bg-[#B4F461]");
  button2.classList.add("bg-white", "border-2");

  
  selectedButton.classList.remove("bg-white", "border-2");
  selectedButton.classList.add("bg-[#B4F461]"); 
}
