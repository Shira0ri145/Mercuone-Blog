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

 - เราสามารถทำให้การทดสอบผ่านได้โดยการเพิ่ม if และระบุ method POST request ใน view
 <img width="446" alt="image" src="https://user-images.githubusercontent.com/101574457/217527148-784e7a7f-dd7c-44e0-957b-6861e1dc15bf.png">
 - เมื่อทำแบบนี้แล้วจะทำให้การทดสอบผ่าน แต่สิ่งที่เราต้องการคือการเพิ่มการส่ง POST ลงใน Home template
 
 ### Passing Python Variables to Be Rendered in the Template
 - เราจะใช้เทมเพลต Django ช่วยให้เรารวมออบเจกต์ Python ไว้ในเทมเพลตของเราโดยใช้ {{ new_item_text }} โดยเราจะใช้ new_item_text เป็นตัวแปรสำหรับป้อนข้อมูลผู้ใช้ที่เราจะแสดงใน template เพื่อแยกความต่างจาก item_text ที่เป็นช่อง inputbox ที่เป็นชื่อใน form ที่ใช้ในการรับ POST Request
 <img width="677" alt="image" src="https://user-images.githubusercontent.com/101574457/217528633-e2db8c89-3f55-4f32-ad2e-bc7f7f66267a.png">

 - โดยสิ่งที่เราต้องทำคือ Unittest ที่ POST Request สิ่งที่ทำให้เราว่าการเปลี่ยนสิ่งหนึ่งไปสู่อีกสิ่งหนึ่งไม่ได้เกิดขึ้นโดยอัตโนมัติ
 - เราจึงปรับ unittest เพื่อตรวจสอบว่าเรายังใช้เทมเพลตอยู่หรือไม่
 <img width="677" alt="image" src="https://user-images.githubusercontent.com/101574457/217530000-fd89e42c-1756-4bfb-b5bd-0d985aec5457.png">
 - และผลที่ได้คือไม่เจอการใช้ Template
<img width="672" alt="image" src="https://user-images.githubusercontent.com/101574457/217531235-00525b13-97f8-4ecf-a0ae-515ac607be20.png">

 - จากนั้นเราก็พอเข้าใจแล้วว่าวิธ๊นี้ไม่สามารถโกง unittest ได้งั้นก็เขียนวธ๊ใหม่เพื่อให้ลองรับ parameter ที่่ส่ง POST Request ไปยัง Template มาลดความซับซ้อนของมันกัน
 <img width="422" alt="image" src="https://user-images.githubusercontent.com/101574457/217532490-cc4b5f55-8b58-4639-a2d8-45fcd49cb060.png">

 - เมื่อทดสอบผลที่ได้คือ .... โหเชี่ย Error บานเลย
 <img width="560" alt="image" src="https://user-images.githubusercontent.com/101574457/217532948-5943ffc5-93c3-4c01-83f0-0679a294ec0f.png">

 - เกิดเหตุที่เราไม่คาดคิดเพราะ เราเขียน CODE โดยที่ไม่มี POST Request งั้นคราวนี้ลองแก้เป็น ..
 <img width="468" alt="image" src="https://user-images.githubusercontent.com/101574457/217533652-28bf2d5f-682b-479c-ab13-4e4459dc516e.png">
 
 - เราใช้ dict.get เพื่อระบุ default value เพื่อในกรณีที่เรา GET Request ดังนั้น POST จึงว่างเปล่า
 งั้นมาลองรัน functional_test ดูว่ามันใช้ได้แล้วหรือยัง
 <img width="745" alt="image" src="https://user-images.githubusercontent.com/101574457/217534271-a1138c42-059b-4c96-99e4-a53e948a892b.png">

 - ถ้าเราสังเกตตอนรันดูดีๆจะเห็นว่ามันทำงานได้ปกติแล้วแต่ที่ Assertion Error เพราะว่าข้อมูลที่เราเพิ่มเข้ามาเป็นเพียง 'Buy peacock feathers' ไม่ใช่ 1: Buy peacock feathers จาก uniitest ที่เราสร้างมาเลย Error ว่า New to-do item did not appear in table
 <img width="303" alt="image" src="https://user-images.githubusercontent.com/101574457/217534641-7232d96d-9b02-4189-bdc5-c34b0bda536b.png">

 - เพื่อให้ unit-test มันมีประสิทธิภาพเพิ่มขึ้นต้องให้มันโชว์ข้อมูลที่เรา input เข้าไปด้วยว่าตรงหรือไม่
 <img width="550" alt="image" src="https://user-images.githubusercontent.com/101574457/217535317-18068a4f-c434-428b-a31c-bced45621578.png">

 - "f-string" syntax เพียงแค่ใช้ f ก็สามารถเพิ่มไวยากรณ์ { }เพื่อแทรกตัวแปรได้
 - และผลลัพน์ที่ได้ก็จะเป็น Error ที่แสดงข้อมูลที่เป็นประโยชน์เอามากๆ!
 <img width="743" alt="image" src="https://user-images.githubusercontent.com/101574457/217536029-55adb840-c152-42ee-9385-d412722180fd.png">

 - คราวนี้ลองเปลี่ยนเป็น Assertin ดูบ้างเพื่อให้ง่ายในการเทสเพราะแค่มีข้อมูลนี้อยู่ข้างในก็ถือว่าผ่าน
 <img width="520" alt="image" src="https://user-images.githubusercontent.com/101574457/217607608-1d950d1e-41e2-4678-9237-39860c6a84bd.png">
 
 - ผลลัพน์ที่ได้
 <img width="741" alt="image" src="https://user-images.githubusercontent.com/101574457/217607449-efa2837d-ed53-4de5-82b4-8d8bc3b51d39.png">

 - แต่ Functional test ต้องการให้เราแจกแจงรายการด้วย "1:" วิธีที่เร็วที่สุดในการทำให้ผ่านคือการโกง
 <img width="520" alt="image" src="https://user-images.githubusercontent.com/101574457/217608000-7c54eb9d-e73f-4a5e-9d8a-e35833d7153f.png">

 - เมื่อโกงแล้วเราก็จะได้ Finish test
 <img width="736" alt="image" src="https://user-images.githubusercontent.com/101574457/217608185-1f92101d-211b-4168-bda8-c1a25974733e.png">

 - แต่ถ้าเราขยาย FunctionalTest เพื่อตรวจสอบการเพิ่มรายการที่สองในตารางก็จะเห็นว่าการโกงไม่ได้ช่วยอะไรเลยต้องไปโกงเรื่อยๆ
 <img width="681" alt="image" src="https://user-images.githubusercontent.com/101574457/217609041-e8a75c1d-d63c-4dc6-95ae-9cd18910bf65.png">

 <img width="736" alt="image" src="https://user-images.githubusercontent.com/101574457/217608954-abe1638e-a7e0-4540-bf97-6ce510481551.png">

### Three Strikes and Refactor
 - กลับไปที่ functional test refactor เราสามารถใช้ inline function แต่นั่นทำให้การทำงานช้าลง และจำไว้ว่า test_ เท่านั้นที่จะถูกเรียกใช้เป็น unit test ดังนั้นสามารถใช้ method อื่นเพื่อสร้าง purposes ที่เราต้องการได้ ดังนั้นแยกเทสเลยสร้าง check_for_row_in_list_table ขึ้นมาให้ test เรียกใช้จะได้ประหยัดเนื้อที่
 <img width="454" alt="image" src="https://user-images.githubusercontent.com/101574457/217611058-835e11b3-29fd-4654-ab5b-8bc3379b4f52.png">

 - จากนั้นก็ refactor โค๊ดใหม่
<img width="547" alt="image" src="https://user-images.githubusercontent.com/101574457/217613606-17b51b0f-d067-4ec8-8e7c-7a420de8e666.png">

 - และผลลัพน์ที่ได้ก็ออกมาเป็นลักษณะเดิม เย้
<img width="742" alt="image" src="https://user-images.githubusercontent.com/101574457/217613720-db8aecaf-b386-4749-a036-75943dc0c76d.png">

### Django ORM and Our First Model
 - ORM คือ Object-Relational Mapper คือ การ map ระหว่าง ข้อมูลที่มีความสัมพันธ์ (Relational Database) ให้มาอยู่ในรูปแบบ Object-Oriented Language และ แปลงข้อมูลที่ในรูป Object-Oriented Language กลับไปเป็น ข้อมูลที่รูปแบบข้อมูลที่มีความสัมพัมธ์ (Relational Database) ซึ่งตัวแปลงข้อมูลนี้เราจะเรียกว่า ORM

 - โดยที่ Django มี ORM(Object Relational Mapping) เป็นของตัวเอง มีชื่อว่า Django ORM ซึ่งตัว ORM นี้ช่วยให้เราไม่ต้องเขียน SQL โดยสามารถติดต่อกับ Database โดยใช้ภาษาไพธอนได้เลย และไม่ต้องใช้ตัว ORM จากภายนอก

 - สร้างคราสใหม่ใน lists/tests.py ชื่อ ItemModelTest
<img width="574" alt="image" src="https://user-images.githubusercontent.com/101574457/217616709-b5e84d99-dcdb-4a9f-a24d-5b3ae2e6b583.png">

 -Django ให้ API แก่เราในการ Query database ผ่านแอตทริบิวต์คลาส .objects และเราจะใช้ Query ที่ง่ายที่สุด,.all(), ซึ่งดึงข้อมูลทั้งหมดใน table และผลลัพธ์จะถูกส่งกลับเป็น object แบบ lists ที่เรียกว่า QuerySet ซึ่งเราสามารถแยก object แต่ละรายการและเรียกใช้ฟังก์ชันเพิ่มเติม เช่น .count() จากนั้นเราจะตรวจสอบวัตถุตามที่บันทึกไว้ใน database พื่อตรวจสอบว่าได้บันทึกข้อมูลที่ถูกต้องหรือไม่
 
 - จางนั้นลอง run test ดู
 <img width="743" alt="image" src="https://user-images.githubusercontent.com/101574457/217620316-cc144db1-5539-4570-8d10-251f5dbb1f00.png">

 - ไปที่ model.py สร้างคลาส Item ที่เก็บ object และเมื่อมีการเรียกใช้ก็ให้ pass
 <img width="219" alt="image" src="https://user-images.githubusercontent.com/101574457/217621389-82e60d75-3539-4bd1-a4dc-b6f9c69b9909.png">

 - ผลลัพน์ที่ได้เมื่อ run test
 <img width="739" alt="image" src="https://user-images.githubusercontent.com/101574457/217621581-6682b84c-ef75-4357-8d93-88ddf4dc882f.png">

 -ให้ Method บันทึกคลาส Item และทำให้มันสืบทอดมาจาก class Model เพื่อให้เป็นโมเดล Django
 <img width="240" alt="image" src="https://user-images.githubusercontent.com/101574457/217621893-0b02bc7d-c931-4068-861c-df09a07a03c9.png">

### Our First Database Migration
 - ผลลัพน์ที่ได้คือ 
 <img width="446" alt="image" src="https://user-images.githubusercontent.com/101574457/217622352-bc83839b-7325-4323-bab5-05781fa9a8b8.png">

 - ใน Django, ORM มีหน้าที่ในการแบ่งปันฐานข้อมูล แต่มีระบบอีกระบบหนึ่งที่มีหน้าที่ในการสร้างฐานข้อมูลนั้นคือ migrations มีหน้าที่ให้คุณสามารถเพิ่มและลบตารางและคอลัมน์ตามการเปลี่ยนแปลงที่คุณทำในไฟล์ models.py
 - ทำการสร้างไฟล์ Migrations
 <img width="739" alt="image" src="https://user-images.githubusercontent.com/101574457/217623326-c1e3293f-b8e1-4bd0-ac6e-3aff823aedf8.png">

- และลองทดสอบอีกทีซึ่งผลทดสอบเป็นไปได้ดีอย่างมาก
<img width="743" alt="image" src="https://user-images.githubusercontent.com/101574457/217624466-3632c2ed-399f-41cf-ba72-3d5f029f3b8f.png">
