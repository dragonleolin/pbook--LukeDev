import encryption from '../models/encryption'

class Member{
    constructor(name, email, password){
        this.MR_name = name
        this.MR_email = email
        //進行加密
        this.MR_password = encryption(password)
        console.log(this.MR_name, this.MR_email, this.MR_password)
    }

    //進行加密
    

     //判斷email格式
     checkEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const result = re.test(email);
        return result;
    }

    queryEmail(){
        let sql = `SELECT MR_email FROM mr_information WHERE MR_email = '${this.MR_email}'`
        return sql
    }
    
    getAddMemberSql(){
        //塞入資料
        let sql = `INSERT INTO mr_information(MR_name, MR_email, MR_password, MR_createdDate) 
                        VALUES('${this.MR_name}', '${this.MR_email}', '${this.MR_password}', now()) `
        return sql
    }

    getLoginSql(){
        let sql = `SELECT * FROM 'mr_information' WHERE MR_email = '${this.MR_email}' && MR_password = '${this.MR_password}'`
        return sql
    }


}

export default Member