function submitform(e) {
     e.preventDefault();
     console.log("hii");
     const image_url = document.querySelector("#image-url").value
     const name = document.querySelector("#name-field").value
     const address = document.querySelector("#address-field").value
     const phone = document.querySelector("#phone-field").value
     const email = document.querySelector("#email-field").value
     const website = document.querySelector("#website-field").value
     //change image
     const img_element = document.querySelector(".image-section img")
     img_element.src = image_url
     //change name
     const name_element = document.querySelector(".name")
     name_element.textContent = name;
     //address
     const address_element = document.querySelector(".address-value")
     address_element.innerText = address;
     //phone
     const phone_element = document.querySelector(".phone-value")
     phone_element.textContent = phone;
     //email
     const email_element = document.querySelector(".email-value")
     email_element.textContent = email
     //website
     const web_element = document.querySelector(".website-value")
     web_element.textContent = website
     //skill
     const skills = document.querySelector("#skills-field").value

     const skillsarr = skills.split(',')
     let str = ""
     for (let i = 0; i < skillsarr.length; i++) {
          str = str + `<div class="value">${skillsarr[i]} </div>`
     }
     document.querySelector(".skill-details").innerHTML = str;
     //objective
     const objectives = document.querySelector("#objective-field").value
     console.log(objectives);
     const objective_element = document.querySelector(".objective")
     objective_element.innerHTML = objectives;

     //experience
     const experience_element = document.getElementsByClassName("experience-field")
     console.log(experience_element);
     const experiencesholder = document.getElementById("experiences-holder");
     experiencesholder.innerHTML = ""
     for (let i = 0; i < experience_element.length; i++) {
          const exp = experience_element[i].value
          const newDiv = document.createElement("div")
          newDiv.style.fontSize='20px'
     newDiv.innerHTML = exp;

          experiencesholder.appendChild(newDiv)

     }
          
   //education
     const education_element = document.getElementsByClassName("education-field")
     console.log(experience_element);
     const educationholder = document.getElementById("education-holder");
     educationholder.innerHTML=""
     for (let i = 0; i < education_element.length; i++) {
          const exp = education_element[i].value
          const newDiv = document.createElement("div")
          newDiv.style.fontSize='20px'
          
     newDiv.innerHTML = exp;

          educationholder.appendChild(newDiv)

     }
}
function education() {
     const input_ele = document.createElement("input")
     input_ele.type = "text"

     input_ele.className = "education-field"

     document.querySelector(".education-container-form").append(input_ele)
}
function experience() {
     const input_ele = document.createElement("input")
     input_ele.type = "text"

     input_ele.className = "experience-field"

     document.querySelector(".experience-conatainer-form").append(input_ele)
}


document.getElementsByTagName("form")[0].addEventListener("submit", submitform)