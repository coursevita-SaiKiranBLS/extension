// popup.js
document.addEventListener("DOMContentLoaded", function () {
  chrome.runtime.onMessage.addListener(function (
    request,
    sender,
    sendResponse
  ) {
    console.log("Received message:", request);
    if (request.jobCounts) {
      let jobCountsElement = document.getElementById("jobCounts");
      jobCountsElement.innerHTML = "";
      request.jobCounts.forEach((job) => {
        let li = document.createElement("li");
        li.textContent = `${job.department}: ${job.count}`;
        jobCountsElement.appendChild(li);
      });
    }
  });
});

// popup.js
// document.addEventListener("DOMContentLoaded", function () {
//   const jobCountsList = document.getElementById("jobCounts");

//   db.collection("jobCounts")
//     .get()
//     .then((querySnapshot) => {
//       querySnapshot.forEach((doc) => {
//         const job = doc.data();
//         const li = document.createElement("li");
//         li.textContent = `${job.department}: ${job.count}`;
//         jobCountsList.appendChild(li);
//       });
//     });
// });
