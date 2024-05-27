window.onload = function () {
  run();

}

async function run() {
  console.log('start 🙂😁');
  while (true) {
    await delay(2000);
    const skipDivs = document.querySelectorAll('button div');
    for (const div of skipDivs) {
      if (div.textContent.trim() === "Skip") {
        await delay(2000);
        console.log('found and click 😍');
        div.click();
        break; 
      }
    }
    console.log('Skip button not found.😕');
  }
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

