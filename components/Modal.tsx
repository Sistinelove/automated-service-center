export const Modal = ({ Active, setActive,children}) => {
    return (
        <div className={`flex items-center justify-center bg-opacity-50 h-screen w-screen bg-slate-400 fixed top-0 left-0 duration-700
         ${Active ? 'opacity-100 pointer-events-all  ' : 'opacity-0 pointer-events-none'}`} onClick={() => setActive(false)}>
            <div className="p-5 items-center rounded-md bg-white w-[50vw] scale-40 duration-400 transition-all active:scale-100" onClick={e => e.stopPropagation()}>
                 {children}
            </div>
        </div>
    )
}
