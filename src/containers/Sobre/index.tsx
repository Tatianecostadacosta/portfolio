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
          src="https://github-readme-stats.vercel.app/api?username=Tatianecostadacosta&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
          alt="GitHub Stats"
        />

        <img
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=Tatianecostadacosta&layout=compact&langs_count=7&theme=dracula"
          alt="Linguagens mais usadas"
        />
      </GithubSecao>
    </section>
  )
}

export default Sobre
