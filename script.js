// heart button click
let count = 0;
const callHistory = [];

// count the heart
function getHeartConter(){
   const displayCount = document.getElementById("heart-count");
    count++;
       displayCount.innerText = count;
}
function clearHistory(){
    
}
// heart buttons click using event deligation heart count
document.getElementById("btn-container").addEventListener("click",function(event){
     
    if(event.target.classList.contains('heart-btn')){
      getHeartConter();
    }
   
})
const copyButtons = document.querySelectorAll('.copy-btn');
let copyCounter = 0;
let coin = 100;
const buttons = document.querySelectorAll('.call-btn');
for(const button of buttons){
    button.addEventListener("click", function(){
      
       const inner =  button.closest('.card');
       const heading = inner.querySelector('.heading').innerText;
       const number = inner.querySelector('.number').innerText;
       const history = document.querySelector('#call-list')
       const data = {
        heading:heading,
        number : number,
        time: new Date().toLocaleTimeString()
       }
       callHistory.push(data);
    //   coin counter
     const displayCoin = document.getElementById("coin-count");
      if(coin >=20 ){
        let prevColor = button.className;
        button.classList.remove("bg-[#00A63E]");
        button.classList.add("bg-gray-300");
        // Add delay
        setTimeout(() => {
               alert(`📞 Calling ${heading} ${number}...`)
               button.className = prevColor;
        },100);
        
        coin = coin - 20;
          displayCoin.innerText = coin; 
          const div = document.createElement("div");
          div.innerHTML = `
                <div class="flex justify-between items-center my-5 mx-1 p-5 rounded-[12px] bg-[#fafafa]">
                   <div>
                     <h2 class="text-[20px] font-semibold"> ${data.heading}</h2>
                    <h2 class="text-[18px] text-[#5C5C5C]">${data.number}</h2>
                   </div>
                    <div>
                        <p class="text-[18px]">${data.time}</p>
                    </div>
              </div>
            `
            history.appendChild(div);
      }
      else{
            alert("❌ আপনার পর্যাপ্ত কয়েন নেই কল করতে কমপক্ষে ২০ কয়েন লাগবে।")
      }
       
    })
   
}
// clear history
const clearBtn = document.getElementById("clear-btn");
clearBtn.addEventListener("click", function(){
    let prevClass = "bg-[#00A63E]"
     clearBtn.classList.add("bg-gray-300")
      clearBtn.classList.remove("bg-[#00A63E]")

      setTimeout(()=>{
        clearBtn.classList.add(prevClass);
       clearBtn.classList.remove("bg-gray-300")
      }, 300)
       document.getElementById("call-list").classList.add("hidden");
})


async function copyTextToClipboard(text) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      return false;
    }
  } else {
    const ta = document.createElement('textarea');
    ta.value = text;
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      return true;
    } catch {
      return false;
    } finally {
      ta.remove();
    }
  }
}

// copied number
document.addEventListener('click', async (e) => {
  const btn = e.target.closest('.copy-btn');
// copy count
  const displayCopy = document.getElementById("copy-count");
         const inner =  btn.closest('.card');
        const num = inner.querySelector('.number').innerText;
        alert(`নম্বর কপি হয়েছে: ${num}...`);
        copyCounter++;
       displayCopy.innerText = copyCounter;


  if (!btn) return;

  const card = btn.closest('.card');  
  const source = card.querySelector('.copy-sourec');  
  const textToCopy = source.querySelector('span')?.textContent.trim() || source.textContent.trim();

  const msgEl = card.querySelector('.copy-msg');
  const original = btn.textContent;

  const ok = await copyTextToClipboard(textToCopy);

  if (ok) {
    btn.textContent = "Copied!";
    setTimeout(() => {
      btn.textContent = original;
      msgEl.textContent = "";
    }, 1200);
  } 
});

// humberger menu
 const menuBtn = document.getElementById('menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });
 
    
