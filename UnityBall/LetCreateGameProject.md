# Testing View and Player
 - จาก week ที่แล้ว เราทำวงกลมหมุนได้ไปครางนีเรามาเปลี่ยนวงกลมให้เป็นตัวละครกันเถอะ!
 - สร้างโปรเจคใหม่ที่ชื่อ MobileGameTest
![image](https://user-images.githubusercontent.com/101574457/218524266-efb7d901-933e-4677-b325-c25677f245c1.png)

 - ทำการวาง Object เช่นพวก player หรือ terrain
![image](https://user-images.githubusercontent.com/101574457/218714070-1a13767a-d19e-417b-95aa-f5d78e785106.png)
 - ปรับมุมกล้องให้เป็น Isometric 60องศา ที่มีลักษณะคล้ายๆ Bird-eye view
![image](https://user-images.githubusercontent.com/101574457/218714009-0ecf26ae-a885-4aff-98b8-1555bf62325f.png)
 - Group Player กับดาบเพื่อจะทำให้มันขยับไปพร้อมกัน
![image](https://user-images.githubusercontent.com/101574457/218723777-9b4d2433-ff51-4baa-920b-b7c56e4aec0f.png)
 - สร้าง Component Character Contoller ใน Group เพื่อใช้คุมทุกส่วนการขยับ
![image](https://user-images.githubusercontent.com/101574457/218723973-977b53fa-0e28-4300-9ee6-0e1376c2ec57.png)

 - สร้าง Script ชื่อว่า PlayerMovementController.cs ไว้สำหรับเขียนคำสั่งเคลื่อนที่                                                             
 ![image](https://user-images.githubusercontent.com/101574457/218728363-b2578c48-caa2-42b5-ad15-071ff74044e9.png)
    - ทำการสร้าง attribute ชื่อ Controller ที่เป็น CharactoerController และ speed ที่เอาไว้เก็บความเร็วของผู้เล่น
    ![image](https://user-images.githubusercontent.com/101574457/218728918-b1214bca-8f11-4ed8-8e29-2b66e9529306.png)
    - กำหนด horizontal และ vertical และสร้างตัวแปรที่ใช้เก็บค่าตำแหน่งแบบ 3 มิติ(แนวนอน,แนวตั้ง ,แนวลึก) ชื่อว่า direction  
    - ถ้า direction.magnitude >= 0.1 ก็ให้ขยับได้                                                                            
    ![image](https://user-images.githubusercontent.com/101574457/218732556-ee8580f2-bac0-4bfb-87e2-3fe48f2ac07b.png)
    - ให้ขยับ * ด้วยความเร็ว                                                                                               
 
 - ผลลัพน์ที่ได้                                                                                     
 ![ez1](https://user-images.githubusercontent.com/101574457/218733486-56ccad10-0638-4435-b0db-cc9737f3b166.gif)

 - จากนั้นเราก็จะให้ตัวละครเปลี่ยนทิศทางตามที่เราหันหน้าตาม WASD                                                                          
  ![image](https://user-images.githubusercontent.com/101574457/218733660-a7fb22cd-0090-4e1f-a253-35d2ca1c4040.png)
    - ทำการสร้างตัวแปร targetAngle ใช้ฟังค์ชั่นทางคณิตศาสาตร์ atan2 เป็นการ RETURN ค่ามุมเป็นเรเดียนที่มีค่า Tan เป็น direction.x/direction.z ค่าที่ได้จะเป็น radiant 
    ![image](https://user-images.githubusercontent.com/101574457/218735174-60946d6c-b11d-48ad-9b4f-7918f10ec484.png)                         
    - https://docs.unity3d.com/ScriptReference/Mathf.Atan2.html                                                             
    ![image](https://user-images.githubusercontent.com/101574457/218735423-b57e8806-23ca-41db-a103-ac716d641798.png)
    - และถ้าเราคูณด้วย Rad2Deg จะกลายเป็นองศา                       
    https://docs.unity3d.com/ScriptReference/Mathf.Rad2Deg.html                                                                                             
    ![image](https://user-images.githubusercontent.com/101574457/218736034-48802840-8a8b-4885-9143-f28d6555bbf8.png)
    - จากนั้นให้การtransform เปลี่ยน rotation ไปตาม Quaternion.Euler
    ![image](https://user-images.githubusercontent.com/101574457/218737120-1d87e816-a6a9-48de-8310-f3624d3f6f4c.png)
    - Quaternion.Euler คือ RETURN การหมุนที่หมุน องศา x รอบแกน x ,องศา y รอบแกน y และ องศา z รอบแกน z ซึ่งเราจะให้ player ขยับแค่แกนนั่นก็คือขยับตามแกน z จึงให้ xy เป็น 0
    https://docs.unity3d.com/ScriptReference/Quaternion.Euler.html
    ![image](https://user-images.githubusercontent.com/101574457/218737533-243a98c3-8342-4569-a12f-259323247c5a.png)
 - ผลลัพน์ที่ได้                                                                                                       
 ![ez3](https://user-images.githubusercontent.com/101574457/218739540-e1ea02c2-8456-4a2b-a92a-3d0acb4c4338.gif)

 - ถ้าเกิดเราเปลี่ยนเป็น Z -> Y มันแกน Z มันก็จะไม่หันหันแค่ข้างหน้าเพราะตอนแรกเราวาง OBJECT ไปทางหน้าแกน Z
 ![image](https://user-images.githubusercontent.com/101574457/218735631-af9df625-ba96-4129-8c20-46f0e3cc7ad7.png)
![ez2](https://user-images.githubusercontent.com/101574457/218739549-d3b4b55a-78b9-4010-a4c3-775e11e66005.gif)

## ทำให้การขยับ Smooth มากขึ้น
 - เพิ่ม SmoothTime ไว้สำหรับกรอกค่าความ smooth โดยให้เริ่มที่ 0.1 และให้เก็บReferenceไว้ที่ Smoothvelocity เพราะในการใช้ Mathf.SmoothDampAngle จำเป็นต้องมี                                                              
![image](https://user-images.githubusercontent.com/101574457/218742297-c30de3cc-6c31-4f0c-8679-eda20d82796d.png)

 - สร้างตัวแปร angle ที่เก็บค่า SmoothDampAngle(float current, float target, ref float currentVelocity, float smoothTime, float maxSpeed = Mathf.Infinity, float deltaTime = Time.deltaTime); แต่เราจะใช้แค่  SmoothDampAngle(current, target, ref currentVelocity, smoothTime);
 - และให้ transform.rotation เปลี่ยนจาก targetangle มาเป็น angle แทน
 ![image](https://user-images.githubusercontent.com/101574457/218744022-d34203ab-2d8d-49a0-9e0a-d5ac4828e7df.png)

 - ผลลัพน์ที่ได้การเคลื่อนที่ก็จะดูลื่นมากขึ้น                                                                                                       
 ![ez4](https://user-images.githubusercontent.com/101574457/218745131-22ca3429-72e0-421e-a98a-e00913d1416f.gif)

 - งั้นถ้าลองเพิ่มให้มากกว่า 0.1 ดูหล่ะ เอาเป็น 1เลยก็แล้วกัน                                                                                    
 ![image](https://user-images.githubusercontent.com/101574457/218745277-e149c4f6-02b8-4ab7-83b0-becc1f1ed06a.png)

 - ผลลัพน์ที่ได้ก็คือกว่าจะหมุนไปแต่ละทีอืดกันเลยทีเดียว                                                                                                          
![ez5](https://user-images.githubusercontent.com/101574457/218745597-0f756aee-b562-455c-9f3e-2851ccf56db5.gif)

