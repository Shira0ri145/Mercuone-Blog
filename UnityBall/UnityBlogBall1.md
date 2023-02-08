# UnityBlogBall

 - สร้าง 3D Projet ขึ้นมาโดยผมตั้งชื่อว่า Myballs ที่แปลว่า ไ*่ของฉัน 5555
 ![image](https://user-images.githubusercontent.com/101574457/217548279-e56639ac-a64b-4ac8-97dc-4bb7a333a99b.png)

 - การสร้าง OBJECT เป็นอะไรที่นานมาก !! 
 ![image](https://user-images.githubusercontent.com/101574457/217549288-f7995d79-7e50-42d1-92a9-b838fee40282.png)

 - เมื่อเปิดมาแล้วหน้าตาจะเป็นแบบนี้
 ![image](https://user-images.githubusercontent.com/101574457/217549546-6bf3cf5a-077f-482d-b97c-5dc6a067daed.png)

## เบื้องต้นของ Unity
 - Main Camera จะเป็นมุมมอง POV ของผู้เล่น                                                           
 ![image](https://user-images.githubusercontent.com/101574457/217550826-d6343afc-a49e-46d5-b6ad-b2a35105b298.png)
 
 - Directional Light เป็นตัวปรับแสงคล้ายๆกับ Blender
![image](https://user-images.githubusercontent.com/101574457/217551036-10d05637-9f98-4e48-92ad-f5c2e43f9093.png)

 - เพิ่ม 3D Object - Plane และตึ้งชื่อว่า Ground                                                       
![image](https://user-images.githubusercontent.com/101574457/217551447-2e2523de-3c1d-4c16-9310-cb2f421720a2.png)
![image](https://user-images.githubusercontent.com/101574457/217551786-d78ca310-4dc1-4ad9-85c5-dcb8d2607b41.png)

 - เพิ่ม 3D Object - Sphere และตึ้งชื่อว่า BallPlayer                                             
 ![image](https://user-images.githubusercontent.com/101574457/217552276-b5e6f568-145a-4c6c-9889-c4e494473e4f.png)
 ![image](https://user-images.githubusercontent.com/101574457/217552662-7f20a9ff-8277-4a99-97a2-66a809e7ad3d.png)

 - ตั้ง MainCamera เป็น X:0 Y:10 Z:-10 และ Rotation X:45
 ![image](https://user-images.githubusercontent.com/101574457/217553126-609b2e2d-3110-4bd2-886f-2295d02a89b1.png)

 - สร้างไฟล์ Materials ในการเก็บพวก Assets ของ Object ในเกม
 ![image](https://user-images.githubusercontent.com/101574457/217555386-92ec99e2-0a07-405f-9606-2bb436e986fa.png)

 - ลาก Materials มาลงใน Ground                                                                                                                                 
 ![image](https://user-images.githubusercontent.com/101574457/217555881-b2a48b30-56d4-4e33-aca3-2ac92df47bb6.png)
 
 - สร้าง Materials Player และลากมาลงใน BallPlayer                                 
![image](https://user-images.githubusercontent.com/101574457/217556844-291eaad2-c4c2-4392-92d3-252bf3847a7a.png)

 - สร้าง กำแพงทั้ง 4 ด้านโดนใช้ Cube                                                                                                          
 ![image](https://user-images.githubusercontent.com/101574457/217558625-2e61e692-da7c-43f9-a660-24a2988686f4.png)
## Rigid a balls ()
 - เลือกที่ Player Ball และ Add Component                                                                                                                      
![image](https://user-images.githubusercontent.com/101574457/217560808-fb2f93c9-ff42-4307-8b6b-6d224d17b19d.png)
 
 -เพิ่ม Rigidbody                                                                       
 ![image](https://user-images.githubusercontent.com/101574457/217561335-2387804e-7a4e-4c8b-a42d-92a45c2ed331.png)

 ## Install the Input System package
  - ไปที่ Window > Package Manager                                                                                     
  ![image](https://user-images.githubusercontent.com/101574457/217561720-2a91209f-5c7a-43df-a53d-33f20a0c6584.png)

  - ไปที่ Unity Registry                                                                          
  ![image](https://user-images.githubusercontent.com/101574457/217562284-3ce80c67-f44d-42cc-be81-7aa9e0bafae2.png)

  - เลือก Input System และ install                                                        
  ![image](https://user-images.githubusercontent.com/101574457/217562572-316c8abf-fbde-4a9f-bdbf-eefb86047446.png)
  
  ![image](https://user-images.githubusercontent.com/101574457/217562868-34349891-6ec4-4a3b-abe2-a7c952527ea8.png)

  - สร้าง component อีกรอบโดยเลือกไปที่ Player Input                                                           
   ![image](https://user-images.githubusercontent.com/101574457/217563628-bf160f49-fc58-4853-aaff-78f701ff1106.png)

  - กด CreateAction เพื่อสร้าง Action สำหรับ Player                                                                                                        
  ![image](https://user-images.githubusercontent.com/101574457/217564033-2770cb52-b951-4a34-ac29-04b3b450e5ec.png)
  
  - และเซฟไปที่ INput/InputAction ไว้สำหรับเก็บ Action ของ PLayer
  ![image](https://user-images.githubusercontent.com/101574457/217564311-3340ddb2-8584-49bf-bb36-bb032c043d06.png)

  - สร้างไฟล์ Controller ไว้เก็บ C#                                                              
![image](https://user-images.githubusercontent.com/101574457/217566747-47dd0325-7fb3-4cdf-9b68-17a1863b59a1.png)


  - ไปที่ BallPlayer และเพิ่ม Component New Scripts และเพิ่ม PlayerController.cs                                                                    
  ![image](https://user-images.githubusercontent.com/101574457/217566312-0bbc31f4-c0dc-4a33-a5a8-6685422497c5.png)

  - เมื่อเพิ่ม PlayerController แล้วมันจะไปอยูที่ Assets ให้เราลากไปที่ Controller เพื่อจัดระเบียบ
![image](https://user-images.githubusercontent.com/101574457/217567363-81179255-832e-4a6c-921f-a0f556468d05.png)

  - เมื่อคลิกที่ไฟล์สามารถดูว่าข้างในเขียนอะไรได้                                                         
 ![image](https://user-images.githubusercontent.com/101574457/217568199-a849005d-a7a0-4898-b7c0-82a40bb8195b.png)

  - จากนั้นให้เราเปิดไฟล์ไปที่ Visual Studio และพิมโค๊ด
![image](https://user-images.githubusercontent.com/101574457/217577496-c2c24344-b21a-4306-813a-93879316f9ae.png)

  - เมื่อพิมเสร็จก็ลองรันเกมผ่าน Unity                                                                                                                              
![ezgif-3-b3ce3a74e2](https://user-images.githubusercontent.com/101574457/217581932-2687d0e5-ae9f-461a-b417-ee1a6d55097c.gif)


  - ผลที่ได้คือบอลนั้นค่อนข้างช้าให้เราเพิ่ม speed เข้าไปในโค๊ด เพื่อให้ขึ้นใน Inspector
  ![image](https://user-images.githubusercontent.com/101574457/217578462-591014f0-2b5b-4180-b555-d91a7cc770c9.png)
 
  - เพิ่ม attribute speed และนำ speed ไปคูณกับ movement                                                                                                             
  ![image](https://user-images.githubusercontent.com/101574457/217579102-dfc84954-99e7-4d94-8146-eea853d3a86a.png)

  - จากนั้นก็จะมี Speed มาเพิ่มโดยเริ่มที่ 0                                                                                                                        
 ![image](https://user-images.githubusercontent.com/101574457/217579560-115141bc-5785-418a-8264-bd53a55f7229.png)

  - ให้เราปรับไปสักประมาณ 70 แล้วลองกดเล่นดู ผลที่ได้ :                                                                                       
![ezgif-3-3e38afd842](https://user-images.githubusercontent.com/101574457/217582339-e805dc59-c125-462c-9256-bebe93e11b53.gif)

## ทำ Camera Controller
  - ไปที่ Maincamera และกด Add Component จากนั้นเพิ่ม CameraController script                                                                                 
 ![image](https://user-images.githubusercontent.com/101574457/217583085-8048c8b2-9f06-4de1-a9a2-5d72cb48f551.png)

  - เปิด CameraController และพิมคำสั่งตามนี้                                                                                                                             
 ![image](https://user-images.githubusercontent.com/101574457/217585812-30d31399-792c-4968-8a9f-8256c612c694.png)
  - จากนั้นก็จะมี Ballplayer ปรากฏขึ้นให้เลือก Gameobject และเราก็เลือก BallPlayer                                                                                         
 ![image](https://user-images.githubusercontent.com/101574457/217586077-a0b8227b-a7f9-4ab9-bcd0-422b600f1113.png)

  - เมื่อทดสอบโดยการเล่นก็จะได้ผลลัพน์ดังนี้                                                                                                           
 ![asdq](https://user-images.githubusercontent.com/101574457/217586836-90dd06ac-579c-4c78-8f88-097db751b0a4.gif)
