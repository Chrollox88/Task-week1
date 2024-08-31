function sendEmail (event) {
    event.preventDefault();
        const inputname = document.getElementById("name").value;
        const inputemail = document.getElementById("email").value;
        const inputphonenumber = document.getElementById("phonenumber").value;
        const inputsubject = document.getElementById("subject").value;
        const inputmessage = document.getElementById("message").value;

        if(!inputname.length) {
            return alert(`Nama tidak boleh kosong`) 
        }   else if(!inputemail.length) {
            return alert(`Email tidak boleh kosong`)
        }   else if(!inputphonenumber.length) {
            return alert(`Phone Number tidak boleh kosong`)
        }   else if(!inputsubject.length) {
            return alert(`Subject tidak boleh kosong`)
        }   else if(!inputmessage.length) {
            return alert(`Message tidak boleh kosong`)
        }

        // alert(
        //     `Name: ${inputname}\nEmail: ${inputemail}\nPhone Number: ${inputphonenumber}\nSubject: ${inputsubject}\nMessage: ${inputmessage}`)
        const link = document.createElement("a");
        link.href = `mailto:${inputemail}?subject=${inputsubject}&body=Nama: ${inputname}
        \nNomor HP: ${inputphonenumber}\nMessage: ${inputmessage}` ;

        link.click();
        const contact = {
            name: inputname,
            email: inputemail,
            PhoneNumber: inputphonenumber,
            subject: inputsubject,
            message: inputmessage,
        };

        console.log(contact);
}