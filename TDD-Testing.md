
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
 
 <img width="850" alt="image" src="https://user-images.githubusercontent.com/101574457/213193086-4761a32b-0958-4c7a-89dc-53d52da5a0ee.png">




 <img width="840" alt="image" src="https://user-images.githubusercontent.com/101574457/213187894-0edc1052-8609-4a2e-9c9a-a256f6737ef7.png">

 

 


## แก้ไข “Could not get lock /var/lib/dpkg/lock” Error ใน Ubuntu

 link : https://snappytux.com/how-to-fix-e-could-not-get-lock-var-lib-dpkg-lock-error-on-ubuntu/
 
<img width="576" alt="image" src="https://user-images.githubusercontent.com/101574457/213108314-b2c410b4-f834-41d0-9673-bd4341397f2c.png">

จากนั้นก้ทำการ python3 -m venv projectenv และ sudo apt install python3.10-venv ใหม่อีกรอบ

<img width="732" alt="image" src="https://user-images.githubusercontent.com/101574457/213108851-c7423a81-c335-4bdc-8fd7-0a2df7ecb562.png">




