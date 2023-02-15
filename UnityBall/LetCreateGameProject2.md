# Let change Movement to Rigidbody
 - ก่อนหน้านี้มีปัญหาคือสามารถเดินได้ปกติแต่ไม่มี physic การตกตอนเราเดินลงวัตถุที่เต่ากว่าตัวเองเราเลยจะมาเปลี่ยน Scripts ใหม่ของตัว MovementController กัน

 - ทำการวาง Object เช่นพวก player หรือ terrain
![image](https://user-images.githubusercontent.com/101574457/218835970-a3012656-ce93-4dc6-82ea-5d24b3cab437.png)

 - ปรับมุมกล้องให้เป็น Isometric 60องศา ที่มีลักษณะคล้ายๆ Bird-eye view
 ![image](https://user-images.githubusercontent.com/101574457/218836033-b4e3efdd-18f3-46e3-b88f-1fee4943cffc.png)

 - สร้าง Script MovementController เพื่อเขียนโค๊ดในการควบคุม                                                     
 ![image](https://user-images.githubusercontent.com/101574457/218837171-4a84ab4d-93c8-45aa-9709-1e1d8ca19a63.png)

 - ผลลัพน์ที่ได้ก็คือ                                                                              
![ez8](https://user-images.githubusercontent.com/101574457/218837832-68f38c5d-eb29-482d-8575-f46381dc746d.gif)

## นำ Scripts CameraController ที่ใช้ตอนทำลูกบอลมาใส่ Player แทน                
 - ผลลัพน์ที่ได้คือ                                                                                      
![ez9](https://user-images.githubusercontent.com/101574457/218839179-10470542-dede-420e-a868-1d96b66cecbe.gif)


##  ลองสร้าง Object ใน Blender
<img width="1464" alt="image" src="https://user-images.githubusercontent.com/101574457/218924299-9f1d6a18-ba84-4668-9c98-02d234d10670.png">

## เพิ่ม JoyStick
- เพิ่ม Canvas                                                                                     
![image](https://user-images.githubusercontent.com/101574457/218999215-7d8e0d58-531f-46ce-9d78-2860afedf6cc.png)
![image](https://user-images.githubusercontent.com/101574457/218999533-9db81c26-19ee-4a76-9a4e-0076016df665.png)

- เพิ่ม Fix JoyStick เข้าไปใน GroupCanvas
![image](https://user-images.githubusercontent.com/101574457/219000485-6f9651a2-4760-4fe4-8c0a-e08b03d92eec.png)
- ไปที่ PlayerMovementController.cs เพิ่มที่สำหรับ assign Fixedjoystick มาใช้ โดยตั้งชื่อว่า movement                                                                
![image](https://user-images.githubusercontent.com/101574457/219033560-b1a81d91-a837-4c5e-b891-5c9c5709f196.png)                                                
![image](https://user-images.githubusercontent.com/101574457/219033850-4d9a78a8-966f-43a3-b899-9d772ed7afde.png)                                                    
                                                            
- เปลี่ยนจากการรีบ Inputผ่านคีบอร์ด wasd เป็น จาก Direction ของแกน x และ y ของ joystick
![image](https://user-images.githubusercontent.com/101574457/219034135-86c707f6-84a7-476b-b7ad-e2c7bf61bf3a.png)
- Assign ตัว Fixed Joystick เข้ามา                                                                                                   
![image](https://user-images.githubusercontent.com/101574457/219034396-a7745b43-c29b-40f3-9e3f-f0cfb27ea152.png)
 - ผลลัพน์ที่ได้                                                               
 ![ez10](https://user-images.githubusercontent.com/101574457/219034999-e2194bc2-95d3-42e2-89cc-bd0a976b45e5.gif)
