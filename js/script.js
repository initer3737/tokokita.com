let tglstatus=false;
let login=false;

function tahun(){
  let tahun=new Date().getFullYear();
  document.getElementById('tahun').innerHTML=tahun;
}

function cache(){
  let p=document.getElementById("loginData").value;
  localStorage.setItem('username',p);
}

let userIcon=document.getElementById("userIcon");
function logOut(){
 localStorage.removeItem('username');
 userIcon.style.opacity="0";
 location.reload();
}

function UserLogin(){
  let name=localStorage.getItem('username');
  let t=document.getElementById("username");
  //ketika user sudah login
  t.innerHTML=name;
  if(name){
    Headers.location('pages/products.html');
  }
}


function empty(){
    let t=document.querySelector("input[name=textView]");
     eval(t.value+7);
  };
  function tambah(){
    let t=document.querySelector("input[name=textview]");
    let nplus=eval(t.value++);
    return nplus;
  }

  function kurang(){
    let t=document.querySelector("input[name=textview]");
    let minus=eval(t.value--);
    if(t.value < 0 ){
      t.value=0;
    }
    return minus;
  }

  function Tampil(){
    let t=document.getElementById('hilangkan');
    let tbutton=document.getElementById('buttonTampil');
      if( !tglstatus ){
          t.className='row g-4 bg-light d-flex justify-content-center mt-4';
          tbutton.value='Tampilkan Lebih Sedikit';
          tglstatus=true;
          return;
      }if(tglstatus){
        tglstatus=false;
        t.className='d-none mt-4';
        tbutton.value='Tampilkan Lebih Banyak';
        return;
      }
}

// const tampil=e=>e.parentElement.getElementById('hilangkan').classList.toggle('d-block');

function gantigambar(){
  let t= document.getElementById('gambarku');
  if (t.src.match('ceri') ){
    t.src='../img/daging.jpg';
  }else{
    t.src='../img/ceri.jpg';
  }
}
// t.className='d-none';
// t.style.display='none';
// t.style.display='block';
//event js
addEventListener('click',function(){

})

//panggil fungsi
tahun();
UserLogin();

// localStorage.setItem menyimpan data di local storage
// localStorage.getItem mengambil data di localStorage
// localStorage.removeItem menghapus item tertentu
// localStorage.clear menghapus semua data di localStorage