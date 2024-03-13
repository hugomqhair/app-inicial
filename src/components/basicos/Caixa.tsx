export default function Caixa(props: any) {
    return (
        <div className={`
            bg-purple-500 rounded-md p-2 w-64 h-64 text-5xl
            flex justify-center items-center
        `}>
            {props.children}
        </div>
    )
}