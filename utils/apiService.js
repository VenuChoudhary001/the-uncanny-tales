export const getData=async ()=>{
    let res=await fetch('api/posts');
    let {data}=await res.json();
    console.log(data);
    // fetch('api/hello').then(res=>res.json()).then((data)=>console.log(data))
}