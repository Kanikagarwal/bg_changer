function Color({name,setColor}) {
    return(
        <>
        
            <button onClick={()=> setColor(name.toLowerCase())} className="p-3 bg-black text-white ml-3">{name}</button>
        
        </>
    )
}

export default Color