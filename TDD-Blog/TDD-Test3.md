# TDD test3

 - ทดการ sudo apt install tree เพื่อใช้ในการดูข้อมูลในไฟล์ในรูปแบบ tree diagram
<img width="794" alt="image" src="https://user-images.githubusercontent.com/101574457/214225112-b085faff-8ec6-46b0-8350-68a45888a3b1.png">

 - เมื่อพิม tree -L {เลเวลความลึกของ directory} จะสามารถดูข้อมูลต่างๆในไฟล์เป็น tree diagram ได้
<img width="794" alt="image" src="https://user-images.githubusercontent.com/101574457/214225725-37531bf5-3d11-4b75-b409-f87540e64467.png">

 - เริ่มสร้าง app to-do list
 - พิมคำสั่ง python manage.py startapp lists จะทำการสร้าง folder ที่ชื่อว่า lists ที่เชื่อมกับ manage.py และ superlists (**next to manage.py and the existing superlists folder) และใน folder จะสร้าง view.py model.py test.py สำหรับใช้งานได้ทันที
<img width="756" alt="image" src="https://user-images.githubusercontent.com/101574457/214226670-bdff795c-56ae-4dab-a301-b2ad8b4c7bc9.png">

## Unit testing in Django
 - เปิดไปที่ folder lists/test.py โดยใช้ nvim . {สามารถกด esc และพิม :set number เพื่อเปิดให้โชว์ตัวเลขได้}
 <img width="642" alt="image" src="https://user-images.githubusercontent.com/101574457/214230553-15585a79-a99a-4d34-8c64-ea6d60161ce3.png">

### การใช้ TestCase ของ Django.test 
 - Test Case คือ ตัวที่จำหนด Input ให้กับให้กับ unit test เราในเเต่ละการทดสอบ เพื่อที่จะตรวจสอบการ Response ต่อ Set of paticular Input นั้นๆ ใน Unittest นั้นก็จะมี base class(คลาสที่เขียนให้เเละพร้อมที่จะถูก Inherit มาใช้) นั้นคือ TestCase นั้นเอง

 - ทดลอง TestCase โดยสร้าง Class SmokeTest ที่เก็บ method test_bad_maths ขึ้นมา
 - จากนั้นลองใช้ AssertEqual เพื่อเป็นการเช็ค การเท่ากับของตัวเลขว่า 1+1 นี่เป็น 3 หรือไม่
<img width="374" alt="image" src="https://user-images.githubusercontent.com/101574457/214322270-28de3953-27fe-47ab-86f1-17a92d8181cd.png">

 - เมื่อลอง python3 manage.py test เพื่อเปิดไฟล์ test.py
 - จะขึ้น Fail : test_bad_maths ว้า AssertionError : 2 != 3 แสดงให้เห็นว่า 2 ไม่เท่ากับ 3
<img width="750" alt="image" src="https://user-images.githubusercontent.com/101574457/214329035-e3e9f80c-ceed-41a8-8456-17d65e8fb593.png">

## Django’s MVC, URLs, and View Functions
we want to test two things:

 - Can we resolve the URL for the root of the site (“/”) to a particular view function we’ve made?

 - Can we make this view function return some HTML which will get the functional test to pass?

<img width="638" alt="image" src="https://user-images.githubusercontent.com/101574457/214553199-7ecf5c63-0e63-4d3d-b9ea-920125a1bb97.png">


 - ทำการรันคำสั่ง จะสังเกตุว่า Error cannot import name 'home_page' from 'lists.view'
<img width="1122" alt="image" src="https://user-images.githubusercontent.com/101574457/214553381-998d191a-b91a-4835-8c94-5eda474b17eb.png">

 - เมื่อไปดูที่ lists.view ก็ไม่เจอ home_page 
<img width="406" alt="image" src="https://user-images.githubusercontent.com/101574457/214553417-633c5a64-5665-442a-96ee-e65ec0c4ab7e.png">

 - ทดการเขียน home_page = none ดูเพื่อใช้ในการ Assertion
<img width="406" alt="image" src="https://user-images.githubusercontent.com/101574457/214554095-31c00cbe-0a16-461c-9c3a-c94500940f5a.png">

 - เมื่อลอง python3 manage.py test เพื่อรัน test.py ก็จะเกิด Error ตามภาพ
<img width="869" alt="image" src="https://user-images.githubusercontent.com/101574457/214553108-7b405b2e-1325-4d03-8000-5d8d0e13848b.png">

 - The first example entry has the regular expression ^$, which means an empty string could this be the same as the root of our site, which we’ve been testing with “/”? Let’s find out what happens if we include it??
 - ไปที่ superlists/urls.py ที่เป็นตัว URL mapping ของ Django ที่ใช้ map URL กับ View function
<img width="648" alt="image" src="https://user-images.githubusercontent.com/101574457/214567565-d6a6b57f-71eb-42e9-94a5-fc39a1562dab.png">

 - ทำการ ลบ admin URL เพราะเรายังไม่ได้ใช้ Django admin site ในตอนนี้ และลองเปลี่ยนไปใช้ตามตัวอย่างที่อยู่ใน รูปก่อนหน้านี้ url(r'^$', views.home_page, name='home'),
 <img width="440" alt="image" src="https://user-images.githubusercontent.com/101574457/214568819-e6b933f5-5de9-473c-b892-58b6e27d0884.png">



