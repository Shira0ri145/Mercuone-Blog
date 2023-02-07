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
 <img width="387" alt="image" src="https://user-images.githubusercontent.com/101574457/216882059-5880da1e-f23e-41f6-bfe0-372e413ea70b.png">

 - จากนั้นเปลี่ยน vire.py เปลี่ยนจากการดึง Httpresponse เป็น Templateresponse โดยการใช้ render เพื่อให้ django ไปหาไฟล์ template เช่นพวก home.html มา
 <img width="401" alt="image" src="https://user-images.githubusercontent.com/101574457/216882272-3dd6e560-fccc-4a57-8484-647ac60a2a2a.png">
 - ลองทดสอบรันอีกที จะเห็นว่าไม่เจอ Template home.html
 <img width="702" alt="image" src="https://user-images.githubusercontent.com/101574457/216883092-4169a43f-39d0-476e-8b7d-91f176ca0642.png">
 
 - ไปที่ superlists/setting.py เพราะเราไม่ได้เพิ่ม lists ใน django server และหาตัว INSTALLED_APPS
 <img width="295" alt="image" src="https://user-images.githubusercontent.com/101574457/216883315-71d2c732-daaa-4521-b34d-9e0a8948f6cc.png">

 - เมื่อรัน ก็จะขึ้น Error assertture แสดงว่ามันเข้าไปถึงไฟล์ home.html แล้ว
 <img width="750" alt="image" src="https://user-images.githubusercontent.com/101574457/216883358-d925cd98-78cf-4771-9ca5-8b3a53a2c553.png">
 
 - ใช้ ตัดอักขระหน้า/หลัง String ด้วยเมธอด strip() เพราะว่า template มันขึ้นบรรทัดใหม่ให้ (\n) เราเลยต้อง .strip() เพื่อให้มันลด (\n) ออก
 <img width="537" alt="image" src="https://user-images.githubusercontent.com/101574457/216883542-6e3677a8-50f0-4933-a83e-95439c285ec1.png">
 - ผลที่ได้จากการรัน 
 <img width="435" alt="image" src="https://user-images.githubusercontent.com/101574457/216884170-22434044-ab55-4ab3-a09a-3b43a656b464.png">

## Django Test Client
 - คราวนี้เรามาลอง Test client กันดีกว่า ซึ่งวิธีนึงที่เราสามารถทดสอบมันได้คือการใช้ ฟังก์ชั่น 'render_to_string' ของทาง Django เพื่อลอง assertEqual เพื่อเพื่อเทียบกันว่าการที่ decode ออกมาเป็น string นั้นได้ผลลัพน์เท่ากันกับ render_to_string หรือไม่
 <img width="499" alt="image" src="https://user-images.githubusercontent.com/101574457/217161163-11b892a7-bb02-4857-ae4e-6e9aa949f353.png">

 - ซึ่งผลที่ได้คือเท่ากัน
<img width="430" alt="image" src="https://user-images.githubusercontent.com/101574457/217166425-2f4211d1-0da8-4dca-9cf4-1801bf8cb925.png">

 - แต่นั้นเป็นวิธีที่ดูเทอะทะไปหน่อยในการ testing template จึงใช้เครื่องมือของ django ที่เรียกว่า django test client ที่มีวิธีการตรวจสอบ template ที่ใช้ในตัวดังนี้
 
 <img width="491" alt="image" src="https://user-images.githubusercontent.com/101574457/217167456-4ed800d8-40cd-4065-ae5b-bc4a37a9389e.png">

    - 1. จะแทนที่การสร้าง Httprequest แบบ Manual และไปเรียกใช้ View ได้โดยตรงโดยใช้ self.client.get
    เพื่อรับ URL ที่เราต้องการจะทดสอบ
    - 2. ทดสอบว่า tempalte home.html นั้นมีการเรียกใช้ render response หรือไม่ [ it will only work for responses that were retrieved by the test client ]
    - 3. เราจะยังเก็บ test อันเก่าที่เราทดสอบไว้ก่อน เพื่อที่จะให้แน่ใจว่า .assertTemplateUsed ที่สามารถทดสอบ คลาส Django TestCase ได้
   
 - qasd


 


