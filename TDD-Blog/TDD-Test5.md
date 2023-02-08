# TDD Chapter5 Testing the Database


## Testing the Database
 - เอาหล่ะเรามาถึง Chapter 5 กันเป็นที่เรียบร้อยแล้ว เราต้องการรับอินพุต To-do Item จาก User และส่งไปยัง Server เพื่อให้เราสามารถบันทึกข้อมูลที่เราต้องการจะเพิ่มไปด้วยวิธีใดวิธีนึง และแสดงกลับออกมา
 
### Form to Send a POST Request
 - โดยเราจะใช้ HTML จัดการกับ POST ไปก่อน และจะใช้ HTML5 กับ JAVASCRIPT ทีหลัง
 - เพื่อใจให้เว็บรับคำขอ POST จะต้องมีสองสิ่งนี้ 
   1. ให้ input ของชื่อelement = attribute
   2. เอาสิ่งที่ต้องการจะให้ POST Request เข้าไปใน html tag <form method="POST> 
   
 <img width="448" alt="image" src="https://user-images.githubusercontent.com/101574457/217472030-50c61256-9584-4b1c-a953-8d9259a1736c.png">
 - โดยผลลัพน์ที่ได้คือ 
<img width="558" alt="image" src="https://user-images.githubusercontent.com/101574457/217472374-0b4abc20-ace8-44d0-82f3-bfb6ade8e950.png">

 - จากเหตึดังกล่าวเรายังไม่รู้แน่ชัดว่ามันเป็นอะไร ลองเพิ่ม delay ของการปิดเป็น 10 เพื่อดู Error
 <img width="485" alt="image" src="https://user-images.githubusercontent.com/101574457/217472818-aed5cf89-712b-40cf-9989-6c8e735e521c.png">

 - ดูเหมือน จะเกิด Error Django DEBUG และแสดงหน้าข้อผิดพลาด CSRF 
 <img width="767" alt="image" src="https://user-images.githubusercontent.com/101574457/217472934-20ed1f0c-70fb-4402-b770-61c5f4bd6758.png">

 - ลองเพิ่ม csrf_token ที่เป็นคำสั่งของ Django ดูเพื่อให้ตัวเว็บของเราโดย Django จะแทนที่ระหว่างการแสดงผลด้วย <input type="hidden"> ที่มีโทเค็น CSRF
 <img width="435" alt="image" src="https://user-images.githubusercontent.com/101574457/217473544-3fd4f18b-1f9f-4ba6-9885-eb2018a04c69.png">

 - ผลลัพน์ที่ได้กลับมาเป็นเหมือนเดิมแต่เนื่องจากเราตั้ง time.sleep ไว้ที่ 10 นาทีเวลา test เลยนาน แต่เราจะเราจะเห็นว่าข้อความรายการใหม่หายไปหลังจากส่งแบบฟอร์ม เป็นเพราะเรายังไม่ได้เชื่อมต่อเซิร์ฟเวอร์ของเราเพื่อจัดการกับคำขอ POST
 <img width="746" alt="image" src="https://user-images.githubusercontent.com/101574457/217474158-45da795f-ffb8-4e49-9c18-021a8c2c81e8.png">

### Processing a POST Request on the Server

 - เนื่องจากเรายังไม่ได้ specified ว่า action= attribute ในแบบฟอร์มข้อมูลจึงส่งกลับไปที่เดิม คราวนี้มาลองปรับมุมมองเพื่อให้สามารถจัดการกับคำขอ POST
 <img width="638" alt="image" src="https://user-images.githubusercontent.com/101574457/217476053-c1d0a732-45eb-4a46-bc79-c2b2e897fa28.png">

 - test POST request จะใช้ self.client.post และใช้ data argument ซึ่งมีข้อมูลแบบฟอร์มที่เราต้องการ จากนั้นก็ตรวจสอบว่าข้อความรับคำขอ Post Request หรือไม่ 
 - และผลที่ได้คือ ล้มเหลว 
 
 <img width="746" alt="image" src="https://user-images.githubusercontent.com/101574457/217477219-331fbc10-010e-4849-8f51-c1031d9a06fb.png">
