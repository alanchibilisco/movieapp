const regExpEmail =/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const regExpPass=/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;

export const testEmail=(field)=>{
    if (regExpEmail.test(field)&&field.trim()!=="") {
        return true;
    }else{
        return false;
    }
};


export const testPass=(field)=>{
    if (regExpPass.test(field)&&field.trim()!=="") {
        return true;
    }else{
        return false;
    }
};