# Tdd chap4
https://www.obeythetestinggoat.com/book/images/twp2_0401.png![image](https://user-images.githubusercontent.com/101574457/216879073-56e3739d-3c4e-497e-89b9-a36ca55c29db.png)

 - ต่อจาก Test3 ที่เมื่อเรา functional_tests.py แล้วมี error AssertionError : Finish the test
 <img width="598" alt="image" src="https://user-images.githubusercontent.com/101574457/216879109-60b41dea-8d36-49d7-99eb-dca2cf3d17c2.png">
 
 - เราก็กลับไปดูโค๊ดก็พบว่าอ่อที่ Error  เพราะเราให้ Assertfail เป็น Finish the test!
  <img width="613" alt="image" src="https://user-images.githubusercontent.com/101574457/216879186-434dec7a-2a4f-4f70-96c0-8c17d75af405.png">
  
 - จากนั้น  เพิ่มโค๊ดตามรูปข้างล่างนี้โดยสิ่งที่เพิ่มไปหลักๆมี 4 ส่วนคือ
    - ส่วนที่ 1 ใช้ find_element_by_tag_name , find_elements_by_tag_name และ find_element_by_id เพื่อหาข้อมุลใน HTML
    - ส่วนที่ 3 ใช้ send.keys ให้ selenium ส่ง Buy Peacock feathers ไปใน inputbox
    - ส่วนที่ 4 ใช้ Keys.ENTER เป็นการกำหนด ให้ selenium Enter inputbox
    - ส่วรที่ 5 ให้ delay 1 วิ sleep
  <img width="482" alt="image" src="https://user-images.githubusercontent.com/101574457/216880754-5295ce8d-bff1-4301-a043-4c2722c55954.png">
  
 - จากนั้นทำการลองรันคำสั่ง pytohn3 fuctional_test.py จะเห็นว่า Unable to locate h1
  <img width="573" alt="image" src="https://user-images.githubusercontent.com/101574457/216881146-8eaa32fa-8f5d-4bf3-9f02-f8972ae63423.png">

 - Don’t Test Constants เพราะ  Unittest โดยส่วนใหญ่จะใช้กับ testing logic, flow control, and configuration. และก็ Making assertions about exactly what sequence of characters we have in our HTML 
 
<img width="440" alt="image" src="https://user-images.githubusercontent.com/101574457/216881285-66e70655-485f-4ef9-a9d6-5702cc6a4b05.png">

 - Refactoring to use a template
 What we want to do now is make our view function return exactly the same HTML, but just using a different process. That’s a refactor when we try to improve the code without changing its functionality.
 
 - โอเคเรามาเริ่ม Refactoring unittest HTML
 - สร้าง directory Template ที่เก็บ home.html ขึ้นมา
 - สร้าง title To-Do lists ใน home.html
 ![Uploading image.png…]()

 


