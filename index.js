
import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({headless:"new"})
  // const browser = await puppeteer.launch({headless:false})
  const page = await browser.newPage();
  await page.goto('https://fast.com');
  for(let i=4000;i<=6000;i+=1000){
  setTimeout(async() => {
   await page.waitForSelector('#speed-value');
    const result =  await page.evaluate(() => {
        const soln = document.querySelector('#speed-value').innerHTML;
        // const speedUnit=document.querySelector("#speed-units").innerHTML;
        return soln; 
      })
      const speedUnit=await page.evaluate(()=>{
        const unit=document.querySelector("#speed-units").innerHTML;
        return unit;
      })
      console.log(`Speed at ${i}th ms is`,result,speedUnit);
// console.log("value of i is ",i);
if (i === 6000) {
  await browser.close(); 
}
}, i);
}
  // await browser.close()
})();
