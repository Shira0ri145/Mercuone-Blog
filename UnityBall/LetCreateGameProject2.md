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
