const puppeteer = require("puppeteer");

// this will help us to do the thing automatically which we were doing manually
const mail =  "bhavesh.automation11";
const pass ='@utomation_11';


(async function(){
    let browser = await puppeteer.launch({ headless: false, defaultViewport: null,args: ['--start-fullscreen'] });
  let page = await browser.newPage();
 
  await  page.goto("https://accounts.google.com/signin/v2/challenge/pwd?service=mail&passive=1209600&osid=1&continue=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&followup=https%3A%2F%2Fmail.google.com%2Fmail%2Fu%2F0%2F&emr=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin&cid=1&navigationDirection=forward&TL=AM3QAYZe1CoNwO7tuKiNXtwPR5Lz6Gm8NS8Bnnu7qegEna3v-XOky0fy2AGprlaD");
  await waitAndClick('input[type = "email"]',page);
  await page.type('input[type = "email"]',mail,{delay:100});
  
  
  
  await waitAndClick('button[data-idom-class ="nCP5yc AjY5Oe DuMIQc qfvgSe qIypjc TrZEUc lw1w4b"]',page);
  await page.waitForSelector('button[data-idom-class ="nCP5yc AjY5Oe DuMIQc qfvgSe qIypjc TrZEUc lw1w4b"]');
  await page.waitForTimeout(3000);
  await page.type('input[type = "password"]',pass,{delay:100});
    await waitAndClick('button[data-idom-class="nCP5yc AjY5Oe DuMIQc qfvgSe qIypjc TrZEUc lw1w4b"]',page);
   //   nCP5yc AjY5Oe DuMIQc qfvgSe qIypjc TrZEUc lw1w4b
   await page.waitForSelector(".T-I.T-I-KE.L3");
    await waitAndClick(".T-I.T-I-KE.L3",page);
  



    //to whom we need to send the mail

let Recipients = "bhaveshpurohit2310@gmail.com";
let subject = "This is a test mail"
let body = "Following up on my previous email about the collaboration with your website. I’m still interested in writing a guest post about the best UX practices for dating apps. With 10 years of experience in the mobile industry, I have a lot of insights to share with your audience";



    await waitAndClick(".wO.nr.l1 .vO",page);
    await page.type(".wO.nr.l1 .vO",Recipients,{delay:10});

    await waitAndClick(".aoD.az6 .aoT",page);
    await page.type(".aoD.az6 .aoT",subject,{delay:50});

    await waitAndClick(".Am.Al.editable.LW-avf.tS-tW",page);
    await page.type(".Am.Al.editable.LW-avf.tS-tW",body,{delay:30});

    await page.click(".T-I.J-J5-Ji.aoO.v7.T-I-atl.L3",page);

  })();



async function waitAndClick(selector,page){
    await page.waitForSelector(selector);
    await page.click(selector);
}
