function showSectionById(Id, selectedButton) {
    console.log('hi');
    
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


function handleDonation(
  donationInputId,
  donationSpanId,
  totalSpanId
) {
  const donationInput = document.getElementById(donationInputId);
  const donationSpan = document.getElementById(donationSpanId);
  const totalSpan = document.getElementById(totalSpanId);
  const donationAmount = parseFloat(donationInput.value);
  const currentDonation = parseFloat(
    donationSpan.innerText.replace(" BDT", "")
  );
  let totalMoney = parseFloat(totalSpan.innerText.replace(" BDT", ""));
  const totalBalance = parseFloat(totalSpan.innerText.replace(" BDT", ""));

  if (donationInput.value===""|| isNaN(donationInput.value) || donationAmount <= 0) {
    alert("Please enter a valid donation amount.");
    return;
  }
  if (donationAmount > totalBalance) {
    alert("Insufficient balance to make this donation.");
    return;
  }
  donationSpan.innerText = `${currentDonation + donationAmount} BDT`;
  totalMoney -= donationAmount;
  totalSpan.innerText = `${totalMoney} BDT`;
  /// show modal using daisy ui
  
  const modal = document.getElementById("my_modal_4");
  modal.showModal();


  // // Add a notification to the history section
  // const historyMessage = `You donated ${donationAmount} BDT. Current total is ${totalMoney} BDT.`;
  // const historyEntry = document.createElement("p");
  // historyEntry.innerText = historyMessage;
  // historySection.appendChild(historyEntry);

  // Clear the donation input
  donationInput.value = "";
}
