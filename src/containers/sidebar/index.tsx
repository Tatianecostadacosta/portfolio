import Titulo from '../../components/Titulo'

const Sidebar = () => {
  return (
    <aside>
      <img
        src="https://github.com/Tatianecostadacosta.png"
        alt="Foto de perfil"
        style={{
          width: '100%',
          height: '128px',
          objectFit: 'cover',
          borderRadius: '8px'
        }}
      />

      <Titulo fontSize={20}>Tatiane Costa</Titulo>
    </aside>
  )
}

export default Sidebar
