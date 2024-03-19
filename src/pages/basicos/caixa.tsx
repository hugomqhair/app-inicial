import Caixa from '@/components/basicos/Caixa'

export default function PaginaCaixa() {
    return (
        <div className='flex gap-7 p-7'>
            <Caixa>Teste 1</Caixa>
            <Caixa>Teste de caixa com muito código</Caixa>
            <Caixa>Caixa 3</Caixa>
        </div>
    )
}