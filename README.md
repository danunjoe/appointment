# Appointment Services
Appointment Services
1. List = รายการนัดหมาย
2. Retreive = รายเอียดการนัดหมาย
3. Comment = การเพิ่มความเห็นของการนัดหมาย
4. Archive = จัดเก็บการนัดหมาย
5. UpdateStatus = อัปเดทสถานะการนัดหมาย

Status Services
1. List = รายการสถานะทั้งหมด

User Services
1. Authen = ยืนยันตัวตนและ get token เพื่อใช้บันทึกข้อมูลผู้ดำเนินการในขั้นตอน Comment, Archive, UpdateStatus
2. List = รายการผู้ใช้งาน

Health Check Service
1. Health = ตรวจสอบสถานะการเชื่อมต่อฐานข้อมูล

# Build Docker Image
Database => docker build -f Dockerfile.db -t appointment-db .  
App => docker build -f Dockerfile.app -t appointment-app .  

# Run Docker Image
Database => \
docker run -d --name appointment-db -p 5432:5432 appointment-db  

App => \
docker run -d \
-e DB_DATABASE='appointment' \
-e DB_HOST='docker.for.mac.host.internal' \
-e DB_PORT='5432' \
-e DB_USER='root' \
-e DB_PASS='root' \
-p 3201:3200 \
--name appointment-app appointment-app

# For Testing
Using Postman and import "Appointments.postman_collection.json"

# Coding
auto generate models from database \ 
./node_modules/.bin/sequelize-auto -h localhost -d appointment -u root -x root -p 5432 -e postgres -o models