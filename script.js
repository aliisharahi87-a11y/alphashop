const modal=document.getElementById("modal"), content=document.getElementById("modalContent");
const BOT="https://t.me/AlphaShopUserBot", SUPPORT="https://t.me/AlphaShopSupport";

function prices(p){let old=Math.round(p*1.27/1000)*1000;return `<span class="old">${old.toLocaleString("fa-IR")} تومان</span><span class="sale">۲۷٪ تخفیف</span><span>${p.toLocaleString("fa-IR")} تومان</span>`}

function openModal(type){
 let body="";
 if(type==="multi"){
 body=`<div class="modal-art multi">⚡</div><h2>سرورهای مولتی‌لوکیشن آلفا شاپ</h2>
 <p class="info">حجم موردنظر را انتخاب کنید. برای خرید مستقیم، پلن را انتخاب کنید تا ادامه فرایند در بات انجام شود.</p>
 <div class="plans">
 ${plan("۵ گیگ",20000,"buy_5GB")}${plan("۱۰ گیگ",40000,"buy_10GB")}${plan("۲۰ گیگ",80000,"buy_20GB")}${plan("۴۰ گیگ",160000,"buy_40GB")}
 </div><ul class="feature-list"><li>⚡ سرعت بالا و اتصال پایدار</li><li>🌍 مولتی‌لوکیشن</li><li>🛡 پشتیبانی در صورت نیاز</li></ul>`;
 } else if(type==="gemini"){
 body=`<div class="modal-art gemini">✦</div><h2>اشتراک Gemini Pro یک‌ماهه با گارانتی کامل</h2>
 <div class="price">${prices(350000)}</div>
 <p class="info">اشتراک یک‌ماهه Gemini Pro با گارانتی کامل. فعال‌سازی و بررسی روی اکانت شخصی شما انجام می‌شود.</p>
 <button class="buy" onclick="buySupport('Gemini Pro یک‌ماهه','350,000 تومان')">خرید اشتراک</button>
 <p class="info"><b>توضیحات و نقد و بررسی:</b><br>فعال‌سازی روی اکانت شخصی انجام می‌شود. وضعیت سرویس پیش از تحویل بررسی خواهد شد. در صورت داشتن سؤال درباره محصول یا نحوه فعال‌سازی، در پیام بعدی از ادمین بپرسید.</p>
 <p class="note">پس از کلیک روی خرید، یک پیام آماده برای پشتیبانی باز می‌شود.</p>`;
 } else if(type==="telegram"){
 body=`<div class="modal-art telegram">✈</div><h2>خرید Telegram Premium</h2>
 <div class="plans">${tgPlan("یک‌ماهه",1800000)}${tgPlan("دوماهه",3100000)}</div>
 <p class="info">فعال‌سازی Telegram Premium روی اکانت شخصی انجام می‌شود و هماهنگی سفارش از طریق پشتیبانی انجام خواهد شد.</p>
 <p class="info"><b>توضیحات و نقد و بررسی:</b><br>پلن موردنظر را انتخاب کنید و پیام آماده برای پشتیبانی را ارسال کنید. برای هر سؤال یا هماهنگی بیشتر، در پیام بعدی از ادمین بپرسید.</p>`;
 } else {
 body=`<div class="modal-art chatgpt">◎</div><h2>ChatGPT Plus</h2><p class="info">این سرویس در حال حاضر <b>ناموجود</b> است. پس از موجود شدن، پلن‌ها و قیمت‌ها در همین بخش قرار می‌گیرند.</p><button class="disabled buy" disabled>فعلاً ناموجود</button>`;
 }
 content.innerHTML=body;modal.classList.add("show");modal.setAttribute("aria-hidden","false");
}
function plan(name,p,start){return `<div class="plan"><div><b>${name}</b><div class="price">${prices(p)}</div></div><button class="buy" onclick="event.stopPropagation();location.href='${BOT}?start=${start}'">خرید</button></div>`}
function tgPlan(name,p){return `<div class="plan"><div><b>Telegram Premium ${name}</b><div class="price">${prices(p)}</div></div><button class="buy" onclick="buySupport('Telegram Premium ${name}','${p.toLocaleString("en-US")} تومان')">خرید</button></div>`}
function buySupport(product,price){const text=`سلام، برای خرید از آلفا شاپ پیام می‌دهم.\n\nمحصول: ${product}\nقیمت: ${price}\n\nلطفاً مراحل خرید و فعال‌سازی را ارسال کنید.\nاگر سؤال دیگری داشته باشم، در پیام بعدی می‌پرسم.`;location.href=`${SUPPORT}?text=${encodeURIComponent(text)}`}
function closeModal(){modal.classList.remove("show");modal.setAttribute("aria-hidden","true")}
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});
document.getElementById("themeBtn").addEventListener("click",()=>{document.body.classList.toggle("light");});
