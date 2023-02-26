const  addForm=document.querySelector('.add');
const list=document.querySelector('.todos');
const search=document.querySelector('.search input');//arama işlemi için
// const generateTemplate=(todo)=>{
//
// }
//kısa
const generateTemplate=todo=>{
const html=`
   <li class="list-group-item d-flex justify-content-between align-items-center">
      <span>${todo}</span>
      <i class="far fa-trash-alt delete"></i>
    </li>
`;
list.innerHTML+=html;//ul ekleneğimiz iiçin yukarda seçtiğimiz ulya  li ekleme
}


addForm.addEventListener('submit',e=>{
    e.preventDefault();//sayfanın yenilmesini
    const todo=addForm.add.value.trim();//inputtaki değere ulaşma //trimStart başındaki boşluklar trimEndSonundan boşukları kaldırır trim hepsi
    // console.log(todo);
    if (todo.length){//karakteri varsa
        generateTemplate(todo)//generateTemplate fonksiyana değeri göndereceki eklme yapsın
        addForm.reset();//form gönderildikten sonra kalan inputtaki metni temizler
    }

})

list.addEventListener('click',e=>{
    if (e.target.classList.contains('delete')){//Formun ul etiketi içinde li deki çöp kutusunu seçmeye yarıyorconsole.log(e.target.classList.contains('delete'));
        e.target.parentElement.remove();//linin içindeki çöp kutusunundaki li kaldıracağımız için parenti li oluyor
    }
})

const filterTodos=term=>{
    //console.log(term)
    // console.log(list.children)//ul içindeki lileri göçsteriri //bunu yaptığımızda döndüremiyorduk
    // console.log(Array.from(list.children))//bunu değerleri döndürmek için yaptık
    Array.from(list.children)//ul içindeki li leri dödürüp
        .filter(todo=>!todo.textContent.toLowerCase().includes(term))// lilerin içermediğine bakar todo.textContent.includes(term)->lideki yazılar eşleşiyormu diye bakar
        .forEach(todo=>todo.classList.add('filtered'));//eğer inputta eşleşen değer yoksa liye class ekledik gözükmemesi için

    Array.from(list.children)//ul içindeki li leri dödürüp
        .filter(todo=>todo.textContent.includes(term))// lideki yazılar eşleşiyormu diye bakar
        .forEach(todo=>todo.classList.remove('filtered'));//eğer inputta eşleşen değer varsa gösterme


}

search.addEventListener('keyup',()=>{//keyp klavyeye tıklanıp elimi kaldıdığımda
const term=search.value.trim().toLowerCase();//eskiden formu seçipte yapardık ama burda inputu seçmiğiniz için böyle yaptık
//toLowerCase harfleri küçülterek gönderiyoruz ki filter büyük küçlük değeri kontrol ettiği için
//trimde baştaki ve sondaki boşlukları kaldırıyor

//console.log(term)
   filterTodos(term);//inputtaki değeri lide aranmak iiçin fonkisyon oluşturduk

});















