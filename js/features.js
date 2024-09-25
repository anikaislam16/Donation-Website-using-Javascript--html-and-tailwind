function showSectionById(Id, selectedButton) {    
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
  totalSpanId,reason
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

  if (
    donationInput.value === "" ||
    isNaN(donationInput.value) ||
    donationAmount <= 0
  ) {
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

  // Add details to the history section
  const historySection = document.getElementById("history");
  const currentDate = new Date().toString();
  let historyMessage ;

  switch (reason) {
    case "flood":
      historyMessage = `${donationAmount} Taka is Donated for Flood  in Noakhali, Bangladesh.`;
      break;
    case "flood-relief":
       historyMessage = `${donationAmount} Taka is Donated for Flood Relief in Feni,Bangladesh` 
     ;
      break;
    case "quota":
       historyMessage = `${donationAmount} Taka is Donated for Aid for Injured in the Quota Movement, Bangladesh
      `;
      break;
    default:
      historyMessage = "Donation made for general purposes.";
  }

  const historyEntry = document.createElement("div");
   historyEntry.style.padding = "15px";
   historyEntry.style.borderRadius = "8px";
   historyEntry.style.border = "1px solid #ccc";
   historyEntry.style.marginBottom = "20px";
  const messageParagraph = document.createElement("p");
  messageParagraph.style.fontWeight = "bold";
  messageParagraph.style.fontSize = '14px';
  messageParagraph.style.marginBottom = '5px';
 
  const dateparagraph = document.createElement("p");
  dateparagraph.style.color = "rgb(107, 114, 128)";
  dateparagraph.style.fontSize = '12px';
  messageParagraph.innerText = historyMessage;
  dateparagraph.innerText = currentDate;
  historyEntry.appendChild(messageParagraph);
  historyEntry.appendChild(dateparagraph);
  historySection.appendChild(historyEntry);
  donationInput.value = "";
}
