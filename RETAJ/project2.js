
        var register = document.getElementById("register")
        register.addEventListener("submit", async function (e) {
            e.preventDefault()
            var name = document.querySelector("input[type = 'text']").value ="" ;
            var email = document.querySelector("input[type = 'email']").value ="";
            var password = document.querySelector("input[type = 'password']").value ="";
            var password2 = document.querySelector("input[type = 'password']").value ="";
            var info = document.querySelector("input[type = 'text']").value ="";

            var data = {

                name: name.value, email: email.value, password: password.value, password2: password2.value, info: info.value

            }
            stringdata = JSON.stringify(data)

            var result = await fetch("https://mohamed12345abdullah.github.io/level2-Group/index.html", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: stringdata
            })

            var res = await res.json()
            console.log(res);


        })
       var x=true;
        function changeColor(){
            console.log(x);
            outback=document.getElementById("back");
            if(x==true){
                outback.classList.add("dark-mode");
                outback.classList.remove("light-mode");
                x=false;
            }else{
                outback.classList.remove("dark-mode");
                outback.classList.add("light-mode");
                x=true;
            }
        }

