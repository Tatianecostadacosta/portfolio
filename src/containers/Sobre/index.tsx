import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { GithubSecao } from './styles'

const Sobre = () => {
  return (
    <section>
      <Titulo fontSize={16}>Sobre mim</Titulo>

      <Paragrafo tipo="principal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis iste
        reprehenderit.
      </Paragrafo>

      <GithubSecao>
        <img
          src="https://github-readme-stats-tau-nine-45.vercel.app/api?username=Tatianecostadacosta&show_icons=true&theme=radical"
          alt="GitHub Stats"
        />

        <img
          src="https://github-readme-stats-tau-nine-45.vercel.app/api/top-langs/?username=Tatianecostadacosta&layout=compact&theme=radical"
          alt="Linguagens mais usadas"
        />
      </GithubSecao>
    </section>
  )
}

export default Sobre
