var form_submit = document.querySelector('#form-submit')
form_submit.addEventListener('submit', (e)=>{
    e.preventDefault()
    var firstName = document.querySelector('[placeholder="First Name"]').value
    var lastName = document.querySelector('[placeholder="Last Name"]').value
    var Address = document.querySelector('[placeholder="Address"]').value
    var City = document.querySelector('[placeholder="City"]').value
    var pincode=document.querySelector('[placeholder="pincode"]').value
    var Gender = document.querySelector('[placeholder="Gender"]').value
    console.log('form submitted');
    console.log(firstName,lastName,Address,City,pincode,Gender);
    var count = [firstName,lastName,Address,City,pincode,Gender]
    var count_check = 0
    for(let i of count){
        if (i){
            count_check++
        }
    }
    if(count_check>=2){
        console.log("count_check",count_check)
    }
    var datas = [firstName,lastName,Address,City,pincode,Gender]

    var creating_tr=document.createElement('tr')

    for(i=0;i<6;i++){
        var creating_td = document.createElement('td')
        creating_td.innerText = datas[i]
        creating_tr.append(creating_td)
    }
    document.querySelector('tbody').append(creating_tr)
    for(let i of datas){
        i.value = ''
    }
    console.log()
})