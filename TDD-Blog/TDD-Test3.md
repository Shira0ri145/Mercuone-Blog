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
<img width="440" alt="image" src="https://user-images.githubusercontent.com/101574457/214591513-5095eed6-595c-48cd-93ca-f3567796df12.png">

 - แต่เมื่อลอง compile แล้วเกิดปัญหาคือ cannot import name 'url' from 'django.conf.urls'
 <img width="860" alt="image" src="https://user-images.githubusercontent.com/101574457/214776225-49ea00ee-ca0d-44e1-80d8-baf34168cc38.png">
 
 - จึงทำการ foolow คลิปยูทูปนี้เพื่อแก้ไข cannot import name 'url'
 https://youtu.be/cRrShdhqyuM <img width="320" alt="image" src="https://user-images.githubusercontent.com/101574457/214776331-ff65e2d2-7fa3-422c-bc3e-03695f2c68ff.png">
 
 - นั่นก็คือเปลี่ยนจากการ import url เป็น re_path as url และเมื่อ compile อีกครั้งก็ เกิดเป็น TypeError ตาม turorial
  <img width="869" alt="image" src="https://user-images.githubusercontent.com/101574457/214777082-d9bf8535-dd4a-431d-9a33-f1d905845474.png">
 
 - จากที่เทสไปก่อนหน้านี้เราให้ home_page ค่าเป็น none จึงเปลี่ยนมันใหม่เป็น method home_page() เพื่อเมื่อมีการเรียนใช้ method นี้จะแสดงข้อมูลที่อยู่ใน method ออกมา
 <img width="332" alt="image" src="https://user-images.githubusercontent.com/101574457/214777429-2afd555c-8ce6-4f04-ac6e-2692d84a850e.png">

 - เมื่อลองทดสอบ ก็จะเห็นว่า รันผ่าน
 <img width="918" alt="image" src="https://user-images.githubusercontent.com/101574457/214777491-9fd41992-8840-4c21-b0cf-75603f70dbf2.png">


## Unit Testing a View

 - เพิ่ม method test_home_page_returns_correct_html(self) เพื่อใช้ในการ test ว่าใน home_page มีการ return html ต่างๆไหม โดยข้อมูลที่เทสมี
   - เทสว่า home_page มีการรับ Httprequest หรือไม่
   - เทสว่ามีการ decode เป็น utf8 ไหม
   - เช็คข้อมูลข้างใน home_page ว่ามีการเริ่มต้นการเขียน html ด้วย <html> หรือไม่
   - เช็คข้อมูลข้างใน home_page ว่ามี title ชื่อว่า To-Do lists หรือไม่
   - เช็คข้อมูลข้างใน home_page ว่ามี </html> ปิดท้ายหรือไม่
 <img width="456" alt="image" src="https://user-images.githubusercontent.com/101574457/214778267-1aae7626-0e8b-4425-aa3a-467fffbe843f.png">

 - ทำการ run test เพื่อ test ตัว unittest จะเห็นว่าเกิด Error : TypeError เพราะว่า home_page() ไม่ได้มีการสืบทอดตัว Httprequest มา
 <img width="970" alt="image" src="https://user-images.githubusercontent.com/101574457/214779178-6dd0d7ae-b0fb-4a65-8b4e-d9acb0e0a97b.png">
 
 - ทดลองใส่ Httprequest ไปใน method home_page() และ ลองรันอีกรอบ Error ก็จะเปลี่ยนเป็น AttributeError เพราะ unittest ที่เราสร้างขึ้นไว้ทดสอบมีของการ ทดสอบว่ามีการรับ Httprequest นั้นผ่านแล้วจึงไปทดสอบว่ามีการ HttpResponse กลับมา เป็น utf8 หรือไม่
 <img width="358" alt="image" src="https://user-images.githubusercontent.com/101574457/214779624-37bcd72c-8356-45e4-bede-b6fdac38e1c4.png">
 
 - เกิดการ AttributeError ขึ้น
 <img width="730" alt="image" src="https://user-images.githubusercontent.com/101574457/214780079-56515ed6-b992-49af-a7fc-de3f7e3ecf2a.png">


 - ทดสอบให้ method home_page() มีการ return HttpResponcse() และผลลัพน์ที่ได้คือผ่าน และไปเจอ Error ถัดไปคือ Assertion Error : start with '< html >' not found
 <img width="353" alt="image" src="https://user-images.githubusercontent.com/101574457/214808192-b8c3c388-8aa6-43ba-8af2-043e7b903456.png">

 
 - AssetionError : ไม่มีการเริ่มต้นการเขียน html ด้วย  <html> ใน home_page() เลยเป็น FALSE
 <img width="430" alt="image" src="https://user-images.githubusercontent.com/101574457/214808330-112bd957-6df9-4623-98a3-93b070724753.png">


 - ทดสอบให้ method home_page() มีการ return HttpResponcse('< html >') และผลลัพน์ที่ได้คือผ่าน และไปเจอ Error ถัดไปคือ Assertion Error : '<title>To-Do lists</title>' not found
 <img width="366" alt="image" src="https://user-images.githubusercontent.com/101574457/214780545-122d57c2-9e18-440d-b3dc-aa5ade9d459a.png">
 
  - AssetionError : ไม่มี title ที่ชื่อ To-Do lists ใน home_page()
 <img width="592" alt="image" src="https://user-images.githubusercontent.com/101574457/214780563-b0605240-60ad-4a5a-a48e-57ac53b018a1.png">
 
 - ทดสอบให้ method home_page() มีการ return HttpResponcse('< html ><title>To-Do lists</title>') และผลลัพน์ที่ได้คือผ่าน และไปเจอ Error ถัดไปคือ Assertion Error : end with </html> not found
 <img width="538" alt="image" src="https://user-images.githubusercontent.com/101574457/214806690-d2987d7b-5700-449e-b229-ebb7cad7bfed.png">

 - AssetionError : ไม่มีการสิ้นสุดการเขียน html ด้วย  '</ html >' ใน home_page()
 <img width="538" alt="image" src="https://user-images.githubusercontent.com/101574457/214806714-fdb173c7-356e-45eb-9e45-c7863370a04f.png">

 - และทำการทดสอบอีกครั้งให้ method home_page() มีการ return HttpResponcse('< html ><title>To-Do lists</title></ html >') และผลลัพน์ที่ได้คือผ่าน!
 <img width="606" alt="image" src="https://user-images.githubusercontent.com/101574457/214806726-b6b66865-3713-4c5a-81a1-368909732658.png">
 
 - ผ่านการเทส
 <img width="445" alt="image" src="https://user-images.githubusercontent.com/101574457/214806930-e375eb5e-5ea6-41a2-b202-de78f01b2bc1.png">



 - จากนั้น เราก็ลองกลับไป functional_tests.py บ้างที่เราใช้ selenium scrap web localhost:8000 มา และทำการลองรันดู ก็เกิด AssertionError ขึ้นเพราะไม่มี Title ที่ชื่อว่า The ใน localhost:8000 แล้ว เพราะว่าเราทำการเปลี่ยนให้ไปรัน method home_page() ที่ทำการสร้าง html ที่มี title ชื่อว่า To-Do lists ขึ้นมาแล้ว

 - ทำการแก้โค๊ดใน functional_tests.py อีกครั้งเพื่อทำการเช็คว่าตอนนี้ Title มีคำว่า To-Do lists ในนั้นไหม


