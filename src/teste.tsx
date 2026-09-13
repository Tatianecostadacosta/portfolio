import styled from 'styled-components'

const Botao = styled.button<{ principal: boolean; fontSize?: string }>`
  font-size: ${(props) => props.fontSize || '16px'};
  background-color: ${(props) => (props.principal ? 'blue' : 'transparent')};
  color: ${(props) => (props.principal ? '#fff' : 'blue')};
  padding: 16px;
  border: 1px solid blue;
  cursor: pointer;
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal>Enviar</Botao>

      <Botao fontSize="14px" principal={false}>
        Cancelar
      </Botao>

      <BotaoPerigo as="a" principal>
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
