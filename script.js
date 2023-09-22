function home(){
    document.getElementById('homes').style.color="goldenrod";
    document.getElementById('plans').style.color="white";
    document.getElementById('programs').style.color="white";
    document.getElementById('contacts').style.color="white";
    document.getElementById('blogs').style.color="white";
}

function plan(){
    document.getElementById('plans').style.color="goldenrod";
    document.getElementById('homes').style.color="white";
    document.getElementById('programs').style.color="white";
    document.getElementById('contacts').style.color="white";
    document.getElementById('blogs').style.color="white";
}

function program(){
    document.getElementById('program').style.color="goldenrod";
    document.getElementById('plans').style.color="white";
    document.getElementById('homes').style.color="white";
    document.getElementById('contacts').style.color="white";
    document.getElementById('blogs').style.color="white";
}
function blog(){
    document.getElementById('blogs').style.color="goldenrod";
    document.getElementById('plans').style.color="white";
    document.getElementById('programs').style.color="white";
    document.getElementById('contacts').style.color="white";
    document.getElementById('homes').style.color="white";
}
function contact(){
    document.getElementById('contacts').style.color="goldenrod";
    document.getElementById('plans').style.color="white";
    document.getElementById('programs').style.color="white";
    document.getElementById('homes').style.color="white";
    document.getElementById('blogs').style.color="white";
}

function submit(){
    let name = document.getElementById('name')
    let number = document.getElementById('number');

    if(name.value == ''){
        alert('please enter Your name');
    }else if(number.value == ''){
        alert('pleae enter number');
    }else{
        alert('Thanx For Join : ' + name.value);
    }
}