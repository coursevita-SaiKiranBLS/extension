function clickViewMore() {
  console.log("Starting to look for 'View More' links");

  setTimeout(() => {
    let viewMoreLinks = document.querySelectorAll(
      "a.styles_read-more-link__DU4hQ"
    );

    if (viewMoreLinks.length > 0) {
      console.log(`Found ${viewMoreLinks.length} 'View More' links`);

      viewMoreLinks.forEach((link, index) => {
        setTimeout(() => {
          link.click();
          console.log(`Clicked on 'View More' link ${index + 1}`);

          setTimeout(() => {
            let tooltip = document.querySelector("div#tooltip");
            if (tooltip) {
              let counts = tooltip.querySelectorAll(
                "div.styles_chckBoxCont__t_dRs"
              );
              let jobCounts = [];
              counts.forEach((count) => {
                let department = count
                  .querySelector("span.styles_filterLabel__jRP04")
                  .getAttribute("title");
                let countValue = count
                  .querySelector("span.styles_filterCount__Xn_PG")
                  .textContent.trim();
                jobCounts.push({
                  department: department,
                  count: countValue,
                });
              });
              console.log(
                `Extracted job counts after clicking link ${index + 1}:`,
                jobCounts
              );

              // Send message to popup or handle the data as needed
              chrome.runtime.sendMessage({ jobCounts: jobCounts });
            } else {
              console.error(
                `Tooltip with job counts not found after clicking link ${
                  index + 1
                }`
              );
            }
          }, 2000);
        }, index * 3000);
      });
    } else {
      console.error(
        "No 'View More' links found with class styles_read-more-link__DU4hQ"
      );
    }
  }, 2000);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", clickViewMore);
} else {
  clickViewMore();
}

function clickViewMore() {
  console.log("Starting to look for 'View More' links");

  setTimeout(() => {
    let viewMoreLinks = document.querySelectorAll(
      "a.styles_read-more-link__DU4hQ"
    );

    if (viewMoreLinks.length > 0) {
      console.log(`Found ${viewMoreLinks.length} 'View More' links`);

      viewMoreLinks.forEach((link, index) => {
        setTimeout(() => {
          link.click();
          console.log(`Clicked on 'View More' link ${index + 1}`);

          setTimeout(() => {
            let tooltip = document.querySelector("div#tooltip");
            if (tooltip) {
              let counts = tooltip.querySelectorAll(
                "div.styles_chckBoxCont__t_dRs"
              );
              let jobCounts = [];
              counts.forEach((count) => {
                let department = count
                  .querySelector("span.styles_filterLabel__jRP04")
                  .getAttribute("title");
                let countValue = count
                  .querySelector("span.styles_filterCount__Xn_PG")
                  .textContent.trim();
                jobCounts.push({
                  department: department,
                  count: countValue,
                });
              });
              console.log(
                `Extracted job counts after clicking link ${index + 1}:`,
                jobCounts
              );

              // Send job counts to the popup
              chrome.runtime.sendMessage({ jobCounts: jobCounts });

              // Send job counts to the backend server
              fetch("http://localhost:4000/job-counts", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ jobCounts: jobCounts }),
              })
                .then((response) => response.text())
                .then((data) => console.log(data))
                .catch((error) => console.error("Error:", error));
            } else {
              console.error(
                `Tooltip with job counts not found after clicking link ${
                  index + 1
                }`
              );
            }
          }, 2000);
        }, index * 3000);
      });
    } else {
      console.error(
        "No 'View More' links found with class styles_read-more-link__DU4hQ"
      );
    }
  }, 2000);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", clickViewMore);
} else {
  clickViewMore();
}
