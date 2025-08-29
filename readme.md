Answer All the question:

1. Difference between getElementById, getElementsByClassName, querySelector, and querySelectorAll
   
getElementById(id) 
Selects one element by its ID.

getElementsByClassName(class)
Selects all elements with that class. Provide an HTMLCollection.

querySelector(selector)
Selects the first matching element using CSS selectors.

querySelectorAll(selector) 
Selects all matching elements using CSS selectors. Provide an  NodeList.

2. How to create and insert a new element into the DOM
const div = document.createElement('div');
div.innerText = "Hello World";
document.body.appendChild(div);

3. What is Event Bubbling and how it works
ইভেন্ট বাবলিং এমন একটি প্রক্রিয়া যেখানে ইভেন্ট প্রথমে টার্গেট এলিমেন্ট থেকে শুরু করে ধাপে ধাপে উপরের প্যারেন্ট এলিমেন্টগুলোর দিকে যায়।

4. What is Event Delegation and why it is useful
ইভেন্ট ডেলিগেশন হলো একটি টেকনিক যেখানে একাধিক চাইল্ডের জন্য আলাদা লিসেনার না দিয়ে, প্যারেন্ট এলিমেন্টে একটি লিসেনার দেওয়া হয় এবং event.target দিয়ে বোঝা হয় কোন চাইল্ডে ইভেন্ট ঘটেছে।
সুবিধা : কম লিসেনার লাগে

5. Difference between preventDefault() and stopPropagation()
preventDefault() → ব্রাউজারের ডিফল্ট কাজ বন্ধ করে (যেমন ফর্ম সাবমিট হওয়া বন্ধ করা)
stopPropagation() → ইভেন্টকে উপরের প্যারেন্ট এলিমেন্টে যাওয়া বন্ধ করে।

