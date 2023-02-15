# The testing goat CH7

#ครึ่งแรก
## Small Design When Necessary
 -เราลองมาคิดเกี่ยวกับว่าเราจะทำอย่างไรเม่ือเราอยากที่จะสนับสนุนให้ Functional Test รองรับหลายรายการ
 
### New design
 - อยากให้ผู้ใช้แต่ละคนสามารถจัดเก็บรายการของตนเองได้ อย่างน้อยหนึ่งรายการในสำหรับตอนนี้
   - จัดการ list ที่มีหลาย item   
   - ต้องบันทึก lists เมื่อมีการกดเข้ามาดูอีกครั้งและเราจะให้ url เข้ามาที่หน้า To-Do lists เฉพาะของแต่ละคนที่สร้าง แต่จะทำสิ่งนี้ในภายหลัง

### YAGNI!
- YAGNI หมายความว่า You ain’t gonna need it! 
   - เป็นเหมือน


### REST (ish)
   - REST มาจาก Representational State Transfer เป็นการออกแบบ Web API เพื่อตรวจสอบ API GET&POST
   - โดยRESTเนี่ยจะจะนิยามให้ Lists ทุก Lists จะมี URL เป็นของตัวเอง   /lists/<list identifier>/
   - และเมื่อสร้าง To-do Lists ใหม่ก็จะสร้างURLขึ้นมา เพื่อตอบรับ POSTRequest     /lists/new
   - และเพื่อเพิ่ม Item จะ separate URL ที่สามารถส่ง POSTRequest REST-API ออกไปได้ /lists/<list identifier>/add_item
  
 - และนี่เป็นรายการสิ่งที่เราต้องทำใน chapter 7 นี้
 <img width="333" alt="image" src="https://user-images.githubusercontent.com/101574457/218654118-ceeec5b7-5723-4299-9cfd-9b02b1bebf1e.png">

 - Implement design โค๊ดใหม่ ที่เราจะทำใน TDD
  https://www.obeythetestinggoat.com/book/images/twp2_0701.png![image](https://user-images.githubusercontent.com/101574457/218654361-2c638d02-260d-407f-bcba-68a920a76f3d.png)

## Regression Test
  - โดยเราจะปรับ Model Database เพื่อให้เชื่อมโยงกับ Lists ต่างๆ ขั้นแรกไปที่ functional_tests/tests.py จากนั้นเปลี่ยน test_can_start_a_list_and_retrieve_it_later เป็น test_can_start_a_list_for_one_user เพื่อให้เรารู้ว่าต่อไปในส่วน method นี้จะใช้ FT เฉพาะ one user
  - เพิ่ม method test_multiple_users_can_start_lists_at_different_urls ไว้สำหรับการ test multiple url โดยข้างใน method จะทำการ็ค AssertRegex ก็คือเช็คว่า Regular expression ของedith_list_url ที่เพิ่มเข้ามามีการรับ currenturl unique-url เป็น '/lists/.+' หรือเปล่า 
  <img width="476" alt="image" src="https://user-images.githubusercontent.com/101574457/218656466-f8fa1181-5ba2-4b40-85fc-93b5e6238f6f.png">

  - และสร้างFT ไว้เช็คเมื่อ Francis เข้าไปที่ home_page จะไม่เจอข้อมูลของ Edith
  <img width="594" alt="image" src="https://user-images.githubusercontent.com/101574457/218659144-4a319b4d-32eb-4be8-ae14-56061a2e3747.png">

  - เมื่อรันเทสแล้วผลลัพน์ที่ได้คือ AssertionError: Regex didn't match: '/lists/.+' not found in 'http://localhost:44783/' 
  regular expression ไม่ตรกับ เพราะไม่เจอ expression url ใหม่ ใน localhost:44783
  <img width="741" alt="image" src="https://user-images.githubusercontent.com/101574457/218659616-f4d1c1da-a5bb-4b96-b5e2-146cc0af01a6.png">
  
## Iterating Towards the New Design
  - จากปัญหาที่ Regexp นั้นไม่ตรงกัน งั้นเรามาลองมาแก้ไข unittest เพื่อจะเช็คให้มัน redirect ไปจุดที่เราต้องการกันใน lists/tests.py ใน method test_redirects_after_POST โดยเปลี่ยนให้มัน redirect ไปที่ '/lists/the-only-list-in-the-world/'
  <img width="581" alt="image" src="https://user-images.githubusercontent.com/101574457/218662446-75f28c24-168a-4329-b8d2-0a22cc89dfdd.png">

  - ผลลัพน์ที่ได้ก็คือ url ซึ่งเป็นจริงเพราะตอนนี้เรายังไม่ได้สร้าง/กำหนดให้มัน redirect ไปที่อื่น
  <img width="721" alt="image" src="https://user-images.githubusercontent.com/101574457/218662594-373cb366-27d6-4f0d-a7fb-3dcd1405def5.png">

  - งั้นราวนี้เรามอลอง Redirect ให้ home_page ไปที่ '/lists/the-only-list-in-the-world/' ดูบ้าง
  <img width="453" alt="image" src="https://user-images.githubusercontent.com/101574457/218665050-ea1d5cc5-6d5e-4177-9926-aa32ee5090f6.png">

  - ผลลัพน์ที่ได้เมื่อรัน FT ก็คือไม่ใช่แค่ test ใหม่นั้น error แต่ test เก่าก็ error ด้วยงั้นเรามาลองสร้าง URL ใหม่กันดู
  <img width="484" alt="image" src="https://user-images.githubusercontent.com/101574457/218665401-7768b22f-b0be-4526-ae92-56b9a5839e0f.png">
  <img width="745" alt="image" src="https://user-images.githubusercontent.com/101574457/218665972-28811bf5-6f45-4dd2-b5a7-33f0ca244953.png">
  
## Create New URL
  - ไปที่ list/tests.py สร้างคราสใหม่ที่ชื่อว่า ListViewTest และtest ใน method test_displays_all_list_items มาทดลองจาก HomePageTest 
  โดยเราจะใช้ assertContains ที่เป็น Unittest ของทาง Django ที่ใช้งานง่ายและสดวกกว่าการ assertIn/response.content.decode()
  <img width="534" alt="image" src="https://user-images.githubusercontent.com/101574457/218667762-1e14b464-a31b-4d26-ab02-78e51e48e470.png">

  - ผลลัพน์ที่ได้คือ เป็น ERROR type 404 จึงไม่เท่ากับ 200 ที่เป็นรหัสตอบรับมาตรฐานสำหรับการร้องขอที่สำเร็จ [OK]
  <img width="743" alt="image" src="https://user-images.githubusercontent.com/101574457/218668110-b83ecc8b-3f10-4cfd-9db5-1e7dde04bb54.png">

## New URL
  - เราจะไปที่ superlists/urls.py เพิ่มเพิ่ม url(r'^lists/the-only-list-in-the-world/$', views.view_list, name='view_list'),
  <img width="688" alt="image" src="https://user-images.githubusercontent.com/101574457/218668959-f504d193-a4a3-43d2-b329-5f1cd608add6.png">

  - แต่เมื่อลองรันแล้วไม่เจอ view_list เพราะเรายังไม่ได้ทำการสร้าง method view_list
  <img width="625" alt="image" src="https://user-images.githubusercontent.com/101574457/218669124-b2892678-044b-46c0-8321-0ab8369b203c.png">

  - เราจึงไปที่ lists/views.py และเพิ่ม method view_list และเมื่อมีการเรียกใช้ให้มันส่ง pass ไว้ก่อน
<img width="193" alt="image" src="https://user-images.githubusercontent.com/101574457/218669778-fe49ad1a-4025-47d9-bad4-33458c69d377.png">
<img width="743" alt="image" src="https://user-images.githubusercontent.com/101574457/218669926-89e864ab-6a59-4065-a548-eb1acfc3e57f.png">

  - งั้นคราวนี้เราลองก็อป method ใน home_page มาลองใส่ในนี้ดุบ้างเผื่อจะรันผ่าน
  <img width="423" alt="image" src="https://user-images.githubusercontent.com/101574457/218675980-dcfe3fd0-a8a2-4c33-ba9f-e5d86c13ad23.png">

  - ผลลัพน์ที่ได้ก็จะผ่าน
  <img width="745" alt="image" src="https://user-images.githubusercontent.com/101574457/218676058-473314a6-ae35-47d5-a9f0-b2b9e34b2b34.png">

  - แต่เมื่อลอง FT
  <img width="745" alt="image" src="https://user-images.githubusercontent.com/101574457/218677325-68f9a926-8386-4622-ac88-ca877b9b1c6a.png">
 
  - สาเหตุมันเพราะใน template/home.html นั้นไม่ได้ specify URL ที่จะทำการ POST ตึงต้องเพิ่ม action เพื่อมันทำงานได้
  <img width="238" alt="image" src="https://user-images.githubusercontent.com/101574457/218678362-be2421e7-57c1-42db-954d-5fcc442b1ec0.png">

  - ลอง FT อีกรอบเพื่อดูการตอบกลับ
  <img width="744" alt="image" src="https://user-images.githubusercontent.com/101574457/218678675-2ef947b0-baa7-41dc-b6ba-484352dbc5cc.png">

  - เมื่อเราลอง ใช้ grep -E "class|def" lists/tests.py เพื่อดู class และ def ของ lists/tests.py จะเห็นว่ามี method ที่ทำว่นเหมือนกันอยู่ 2 ที่ เราแปลว่าไฟเขียว Refactor มันเลยโดยการลด method test_displays_all_list_items ที่อยุ่ใน home_page ออกและทดลองรัน unit test
  <img width="752" alt="image" src="https://user-images.githubusercontent.com/101574457/218681758-86d9ab07-0940-41c5-bba5-7f9789d54c2f.png">

  - ผลลัพน์ที่ได้ก็คือ รันผ่าน 6Test จากเดิมมี 7Test เพราะเราลบออกไป 1 test
  <img width="744" alt="image" src="https://user-images.githubusercontent.com/101574457/218682404-a85ed1a8-6e96-4bac-9974-d6dbf82542ef.png">

 #ครื่งหลัง
 ## Separate Template for Viewing Lists
  - เราจะสร้าง unit test ใหม่เนื่องจาก home_page และ list_view จะเป็น page ที่ค่อนข้างแตกต่างจึงควรใช้เทมเพลต HTML ที่แตกต่างกัน home.html สามารถมีช่องอินพุตช่องเดียว ในขณะที่เทมเพลตใหม่ list.html สามารถดูแลการแสดงตารางของรายการที่มีอยู่
  <img width="536" alt="image" src="https://user-images.githubusercontent.com/101574457/218944376-dcda2fb4-3270-4706-9e4e-807eb0269ee3.png">
 - เมื่อรัน unittest
 <img width="744" alt="image" src="https://user-images.githubusercontent.com/101574457/218956267-41fcfe24-a92a-4a26-b311-b25da590f4ef.png">

 - เรามาเปลี่ยน view กันบ้างให้method view_list responce ไปที่ list.html
  <img width="438" alt="image" src="https://user-images.githubusercontent.com/101574457/218956769-f167ab55-243f-4888-91e0-a72e3d73495a.png">

 - ผลลัพน์ที่ได้ป็นแบบนี้เพรราะเรายังไม่สร้าง list.html
 <img width="438" alt="image" src="https://user-images.githubusercontent.com/101574457/218956922-8d2289b7-7759-4204-8b5b-5c5483253f92.png">
 - สร้าง list.html
 <img width="740" alt="image" src="https://user-images.githubusercontent.com/101574457/218957241-150a10d0-5b34-4461-9976-c5fb709ddf89.png">
 - แต่สิ่งที่ได้มาจะเป็นกระดาษเปล่า
 <img width="193" alt="image" src="https://user-images.githubusercontent.com/101574457/218957481-3a312108-9673-4f65-af2d-e96be9174ab1.png">
 - ใช้ cp เพื่อให้เอาข้อมูล home.html มาเพิ่มใน list.html ด้วย
 <img width="742" alt="image" src="https://user-images.githubusercontent.com/101574457/218957704-aeb7fce2-74a3-41f1-8c28-3b865126a892.png">

 - ไปแก้ไขที่ home.html และเอา table list ออกเพราะเราจะย้ายมันไปไว้ที่อื่นแทน
 <img width="722" alt="image" src="https://user-images.githubusercontent.com/101574457/218958680-77fd23d3-7a8c-4617-839f-0bef61e624ba.png">

 - ทดสอบดูอีกครั้งก็ไม่เกิดอะไรขึ้น เยี่ยมงั้นเราไปกันต่อ
 <img width="362" alt="image" src="https://user-images.githubusercontent.com/101574457/218959340-cbc6c671-65e9-4192-85f0-e4a421f4b3b8.png">

 - เราไม่ต้องการให้ home_page ส่งค่าออกไปทั้งหมดจึงแก้ไขเป็น
 <img width="449" alt="image" src="https://user-images.githubusercontent.com/101574457/218959492-1be2e086-ff66-4475-8aeb-00657c3f451e.png">
 - แล้วเรามาลอง run functional_test ดู
 <img width="449" alt="image" src="https://user-images.githubusercontent.com/101574457/218960139-7036725c-819a-4a7e-9e76-8c5b566b8752.png">

- ผลที่ได้คือ เราไม่เจอ Buy milk ในอันที่1 แต่มันมาอยู่อันที่สองแทน
<img width="744" alt="image" src="https://user-images.githubusercontent.com/101574457/218960295-b594f22b-8445-486d-8f95-585fcc64e246.png">

- ในตอนนี้ถือว่าเราทำมาได้ค่อนข้าง Ok แล้วเหลือติดแค่ปัญหาก็คือ Francis ยังมี item ของ Edith ติดมาอยู่บ้าง

## A URL for Adding List Items
- สิ่งที่เราจะต้องทำในตอนนี้
  - ปรับให้โมเดลเชื่อมโยงกับ list ต่างๆ
  - เพิ่ม URL ที่ไม่ซ้ำกัน
  - เพิ่ม URL สำหรับรายการใหม่โดยการ POST
  - เพิ่ม URL ที่มีการ Add item เข้าไปใน To-Do ผ่านการ POST
<img width="326" alt="image" src="https://user-images.githubusercontent.com/101574457/218960774-74f3097e-331f-4b04-811f-c5e97438432f.png">

## Test Class for New List Creation
- ไปที่ lists/tests.py และย้าย method test_can_save_a_POST_request and test_redirects_after_POST ในคลาส HomePageTest ไปที่ คลาสใหม่ชื่อว่า NewListTest



- เราจะใช้ Django Test Client method ที่ชื่อว่า assertRedirects ในการทดสอบการ redirect
<img width="651" alt="image" src="https://user-images.githubusercontent.com/101574457/218963057-fd1c0382-e452-4aea-8cdb-255f5e81ea88.png">

<img width="744" alt="image" src="https://user-images.githubusercontent.com/101574457/218963602-4972929d-cf6c-402c-a88c-6b188b0b085d.png">

## URL and View for New List Creation
- ไปที่ superlists/urls.py และสร้าง url ใหม่ขึ้นมา
<img width="744" alt="image" src="https://user-images.githubusercontent.com/101574457/218963698-f5191ae4-bb15-47a0-bfc3-27efda6a135e.png">

- เราเมื่อลองก็จะพบว่าเรายังไม่เจอ attribute new_list  ลองไปแก้ที่ lists/views.py
<img width="182" alt="image" src="https://user-images.githubusercontent.com/101574457/218964029-acad5ea2-b8ef-48cc-a994-127eba22f2c3.png">

- สร้าง method new_list ใน view
<img width="740" alt="image" src="https://user-images.githubusercontent.com/101574457/218964207-8326a501-68b7-490a-88e8-adc43b1674e8.png">
- จะเห็นว่าที่เป็นปัญหาผ่านเรียบร้อยแล้วคราวนี้คือมันไม่ return HttpResponse กลับมา
<img width="469" alt="image" src="https://user-images.githubusercontent.com/101574457/218964574-accf0586-7c00-47c2-9497-a74b01d2b0c1.png">

- เราจึงทำให้ view_list return กลับมาเป็น redirect('/lists/the-only-list-in-the-world/')
<img width="741" alt="image" src="https://user-images.githubusercontent.com/101574457/219037573-d1bc7a5a-bcec-48e5-a713-5da434794da6.png">
- ผลลัพน์ที่ได้
<img width="741" alt="image" src="https://user-images.githubusercontent.com/101574457/219037628-e43af124-3a29-4dba-bb0c-e64921324feb.png">
- งั้นคราวนี้ก็ลองก็อปของ home_page มาใช้ทดลองดูอีกรอบ
<img width="741" alt="image" src="https://user-images.githubusercontent.com/101574457/219038026-ea0e4c4f-3453-4b40-ab05-5c98f42790d8.png">
<img width="741" alt="image" src="https://user-images.githubusercontent.com/101574457/219038079-8b8f99b9-2c4a-47f6-b936-130495c6299b.png">

- งั้นลอง FT กันดูบ้าง
 <img width="741" alt="image" src="https://user-images.githubusercontent.com/101574457/219038296-0854e5d6-c599-41b8-89c0-b0c8823966b5.png">

 
## Removing Now-Redundant Code and Tests
- ราสามารถลบส่วน if request.method == 'POST' ทั้งหมดได้หรือไม่  ซึ่งรันผ่าน OK!                          
 <img width="305" alt="image" src="https://user-images.githubusercontent.com/101574457/219038786-baf78df3-4b54-42c3-a0e3-cd5f58345bc7.png">
- และในขณะที่เราดำเนินการ เราสามารถลบการทดสอบที่ซ้ำซ้อนในขณะนี้_only_saves_items_when_necessary test ได้อีกด้วย!                        
 <img width="407" alt="image" src="https://user-images.githubusercontent.com/101574457/219039387-6052967a-4d5a-4806-9f5d-4d3f189767b3.png">                                                                   
<img width="407" alt="image" src="https://user-images.githubusercontent.com/101574457/219039431-542c64cd-1014-455b-a0bd-9401227afb32.png">        
 
## A Regression! Pointing Our Forms at the New URL
- แล้วถ้าเราลองอันเมื่อกี้แต่เป็น FT บ้างหล่ะ Oh shit!
<img width="743" alt="image" src="https://user-images.githubusercontent.com/101574457/219039873-b6ac0117-debc-411d-8e73-d2b42f604cd0.png">

- แบบฟอร์มของเรายังคงชี้ไปที่ URL เก่า ทั้งใน home.html และlists.html งั้นมาลองเปลี่ยนมันกันไปที่ lists/templates/home.html, lists/templates/list.html
 เพิ่ม action="/lists/new"
 <img width="743" alt="image" src="https://user-images.githubusercontent.com/101574457/219040324-ef8dfe20-c7f0-4874-a108-4ced119900bc.png">
 
- และผลลัพน์ที่ได้ก็กลับมาเป็นแบบเดิมแล้ว
 <img width="743" alt="image" src="https://user-images.githubusercontent.com/101574457/219040466-1303b066-c468-4ce5-b0c7-c58923d7e19e.png">

- ในตอนนี้เราก็ทำเสร็จไปได้แล้ว 1
<img width="336" alt="image" src="https://user-images.githubusercontent.com/101574457/219040635-b44130de-ce3b-49cd-a472-d28d952982b5.png">

## Biting the Bullet: Adjusting Our Models
- ถึงเวลาเปลี่ยนโมเดลของเราแล้ว มาปรับ model unit test กัน
 
- เราสร้าง 'List object' ใหม่และกำหนดให้แต่ละ 'item' มีการอ้างอิงไปยัง 'List object' นี้โดยการกำหนดค่าเป็น property ชื่อ .list ของแต่ละ 'item' นั้น และตรวจสอบว่า 'List object' ถูกบันทึกไว้อย่างถูกต้อง และตรวจสอบว่าสอง 'item' นั้นได้รับการบันทึกความสัมพันธ์ของตัวเองกับ 'List object' ที่ถูกกำหนดให้ โดยเราสามารถเปรียบเทียบ 'List object' กับกันโดยตรง (saved_list และ list_) โดยในพื้นหลังของการเปรียบเทียบนี้ จะมีการเปรียบเทียบ primary key (คือ attribute .id) ว่าเหมือนกันหรือไม่
 <img width="637" alt="image" src="https://user-images.githubusercontent.com/101574457/219044258-4c54ed1f-f4a6-493f-a643-ec59dd05bf1f.png">
<img width="741" alt="image" src="https://user-images.githubusercontent.com/101574457/219046652-381fce91-374f-471f-bbeb-2e4abbf918f3.png">

- และก็แก้เป็น Stepๆ เหมือนเดิม
 <img width="160" alt="image" src="https://user-images.githubusercontent.com/101574457/219047120-4d423997-e4a8-4711-a82f-d586e68cb984.png">
 <img width="741" alt="image" src="https://user-images.githubusercontent.com/101574457/219047688-fd210c57-9952-4f8a-a410-3982fc91753a.png">

- แก้ AttributeError: 'List' object has no attribute 'save'
<img width="203" alt="image" src="https://user-images.githubusercontent.com/101574457/219047874-0a2ed904-fbaa-4f65-b2cc-72b2e5003f2d.png">
 <img width="453" alt="image" src="https://user-images.githubusercontent.com/101574457/219047924-139d9d0b-5c43-4a00-aa00-d8425de907cc.png">

 - แก้ OperationalError: no such table: lists_list
 <img width="739" alt="image" src="https://user-images.githubusercontent.com/101574457/219048127-cb5ae2e7-9e5a-4e96-b5a6-07c30ce5863a.png">
 <img width="739" alt="image" src="https://user-images.githubusercontent.com/101574457/219049462-feedb801-8a49-4225-ba0a-2f19cfe4df4e.png">



 - รันอีกรอบ
 <img width="739" alt="image" src="https://user-images.githubusercontent.com/101574457/219048212-26c7acf3-fb8a-4a05-9a72-8353f9600174.png">
<img width="739" alt="image" src="https://user-images.githubusercontent.com/101574457/219048752-8fe212b1-7445-4c81-8535-bea21aae276e.png">

- แก้
 <img width="739" alt="image" src="https://user-images.githubusercontent.com/101574457/219049006-fffffaa6-7671-4227-88e0-da44b9a88f18.png">

- รันอีกรอบ
 <img width="739" alt="image" src="https://user-images.githubusercontent.com/101574457/219049078-b18b9042-fc51-4085-a2b7-619f942eb991.png">

- แก้ AssertionError: 'List object (1)' != <List: List object (1)>
<img width="739" alt="image" src="https://user-images.githubusercontent.com/101574457/219049633-db97b4f0-5556-4559-8c1f-29a2b8ac3bf5.png">

- แก้เพราะ django แม่งใหม่เกิน
 <img width="739" alt="image" src="https://user-images.githubusercontent.com/101574457/219063319-bed197bb-8d80-48cd-9510-60e1dcd1c8d1.png">
 <img width="739" alt="image" src="https://user-images.githubusercontent.com/101574457/219063219-772c9da0-8ff1-4cab-94d9-257cc687a67f.png">

## Adjusting the Rest of the World to Our New Models
- 
 พอเลิกทำขก


 
 
