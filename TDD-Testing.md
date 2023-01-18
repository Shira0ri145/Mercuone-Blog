
# TDD Test Downloading

 - ทำการสร้าง mkdir python-tdd เพื่อเป็นโพลเดอร์เก็บข้อมูล
 - จากนั้นใช้ python3 -m venv projectenv ในการสร้างfloder เก็บ virtual environment ที่ชื่อว่า projectenv
 แต่ในเรายังไม่ได้ติดตั้ง python3 -venv จึงแจ้งว่าให้ทำการ sudo apt install python3.10-venv ก่อน
 - ทำการ sudo apt install python3.10-venv                               

<img width="595" alt="image" src="https://user-images.githubusercontent.com/101574457/213105822-0d45d354-0925-4f73-8acb-ef3051ad5020.png">
 -  หากเจอกรณี Could not get lock/ver/lib/dpkg/lock ให้ไปดูวิธีการแก้ไขที่หัวข้างด้านล่าง
 - เมื่อทำการ install python3.10-venv เสร็จ จะมี activate และ pip ต่างๆขึนมาใน bin
 
 <img width="889" alt="image" src="https://user-images.githubusercontent.com/101574457/213185792-1b52eb21-c0b3-47be-8209-1f35e551c73f.png">
 
 - ทำการ source projectenv/bin/activate เพิ่ิอ ------
 - ทำการโหลด library selenium และเก็บไว้ในไฟล์ reqiorments.txt ใน python โดยการ pip install selenium && pip freeze > requirments.txt
 
 - สามารถใช้ cat {ชื่อไฟล์.txt} เพื่อเปิดดูข้อมูลใน ไฟล์ requirments.txt ได้
 <img width="834" alt="image" src="https://user-images.githubusercontent.com/101574457/213189032-74ef93b5-e0e4-46f0-98c7-1bc9672bf69c.png">
 
 - จากนั้นทำการลง django โดยการ python3 -m pip install Django     
 - ใช้คำสั่ง vi functional_test.py ในการสร้างและเปิดไลฟ์ function_test.py
 
 <img width="850" alt="image" src="https://user-images.githubusercontent.com/101574457/213193086-4761a32b-0958-4c7a-89dc-53d52da5a0ee.png">

 - เมื่อเข้ามาในไฟล์ function_test.py จะสามารถเขียนโค๊ด python ในนี้ได้ หากต้องการออกจากไฟล์ ให้ทำการพิม :wq เพื่อออกจากไฟล์
 
 <img width="850" alt="image" src="https://user-images.githubusercontent.com/101574457/213193671-efa4556d-07b5-4d78-bdf0-db55d8f2ab8e.png">
 
 - ทำการเขียน โค๊ดเปิด firefox ให้ลิ้งไปที่ localhost:8000 ใน functional_tests.py
 <img width="334" alt="image" src="https://user-images.githubusercontent.com/101574457/213198415-c086e452-c0fd-4de6-a7c9-a02185e1b5b6.png">

 - พิมคำสั่ง python3 functional_tests.py ใน terminal จะทำการรันไฟล์ functional_tests.py และทำการเปิด firefox ที่ลิ้ง localhost:8000 แต่จะยัง Error 
 <img width="858" alt="image" src="https://user-images.githubusercontent.com/101574457/213202050-23b98d4f-e530-4af9-9151-5d541e1a4a6d.png">
 
<img width="858" alt="image" src="https://user-images.githubusercontent.com/101574457/213202152-81a33258-0926-4fd3-900f-b9862aec7e1a.png">

 - ทำการรันคำสั่ง django-admin startproject superlists .
 และรันคำสั่ง python manage.py runserver
  จะมี Error ขึ้นมาให้เรา apply migrate ก่อนถึงจะเริ่มทำงาน
 <img width="858" alt="image" src="https://user-images.githubusercontent.com/101574457/213206208-ef09e837-ab5c-4de3-b18c-7e348cebbf9d.png">
 
 - พิมคำสั่ง python manage.py migrate
 <img width="880" alt="image" src="https://user-images.githubusercontent.com/101574457/213207363-59f77efc-92a1-4d1e-b289-bceda80987d5.png">

 - จากนั้นพิม python manage.py runserver อีกครั้ง
<img width="880" alt="image" src="https://user-images.githubusercontent.com/101574457/213207566-0444aa1f-7403-45d9-936d-7ae84b51c4f9.png">

<img width="880" alt="image" src="https://user-images.githubusercontent.com/101574457/213208906-add8eb86-209c-4942-bbf7-ed2de70e5393.png">

## นำข้อมูลทั้งหมดที่ทำลง Github                                 
 - สร้างไฟล์ README.md ที่เขียนข้างในว่า TDD-Tesing
 - จากนั้น git init จะเห็นว่าเรายังไม่ได้ลง git
<img width="864" alt="image" src="https://user-images.githubusercontent.com/101574457/213214273-40eb7ed1-1277-40cc-b36c-70489df7bd77.png">
 - ทำการ sudo apt install git
 <img width="864" alt="image" src="https://user-images.githubusercontent.com/101574457/213216235-7c1c4853-f55a-4b65-b294-6616196d8c9b.png">
 
 - จากนั้น git init อีกรอบ                                    
 <img width="864" alt="image" src="https://user-images.githubusercontent.com/101574457/213217185-50c3be9f-d7f0-4ec0-8854-f8c65fa54a3f.png">
 - เพิ่ม gitignore
 <img width="864" alt="image" src="https://user-images.githubusercontent.com/101574457/213232944-dae5ff8f-6ddd-4992-9052-3c9ad52e8f9b.png">

 - เพิ่ม gitignore




## แก้ไข “Could not get lock /var/lib/dpkg/lock” Error ใน Ubuntu

 link : https://snappytux.com/how-to-fix-e-could-not-get-lock-var-lib-dpkg-lock-error-on-ubuntu/
 
<img width="576" alt="image" src="https://user-images.githubusercontent.com/101574457/213108314-b2c410b4-f834-41d0-9673-bd4341397f2c.png">

จากนั้นก้ทำการ python3 -m venv projectenv และ sudo apt install python3.10-venv ใหม่อีกรอบ

<img width="732" alt="image" src="https://user-images.githubusercontent.com/101574457/213108851-c7423a81-c335-4bdc-8fd7-0a2df7ecb562.png">




