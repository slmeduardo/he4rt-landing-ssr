import type { LinksFunction } from '@remix-run/node';
import Hea4rtSkills from '~/components/Hea4rtSkills';
import type { SkillsProps } from '~/components/Hea4rtSkills';
import UserCard from '~/components/UserCard';
import { users } from '~/mocks/users';

const Skills: SkillsProps[] = [
  {
    title: 'Desenvolvendo Habilidades',
    description:
      'Ajude, contribua e retire suas dúvidas em qualquer área da tecnologia com nossa comunidade!',
  },
  {
    title: 'Networking',
    description:
      'Tenha oportunidade de conhecer milhares de pessoas com o mesmo interesse que você.',
  },
  {
    title: 'Eventos',
    description:
      'Participe dos eventos exclusivos da comunidade e receba diversos prêmios por isso!',
  },
  {
    title: 'Projetos',
    description:
      'Aprimore e contribua com nossos projetos, evolua constantemente e mostre suas habilidades.',
  },
];

export const links: LinksFunction = () => {
  return [
    {
      rel: 'prefetch',
      as: 'image',
      href: '/imgs/discord-print.png',
      type: 'image/png',
    },
  ];
};

export default function FindAtHe4rt() {
  return (
    <>
      <div className='container mx-auto py-40'>
        <h3 className='font-dm font-bold text-4xl text-gray-700 text-center mb-2'>
          Venha conhecer a equipe da{' '}
          <span className='text-purple-500'>He4rt Devs.</span>
        </h3>
        <p className='font-dm text-xl	font-normal text-gray-750 text-center mb-12 max-w-4xl mx-auto'>
          Nós temos os recursos para levar qualquer ideia para frente, nenhum
          sonho é louco demais para nós. Descubra como desenvolver projetos que
          revolucionam a maneira de aprender.
        </p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-y-8 gap-x-11'>
          {users.map((user) => (
            <UserCard key={`user-key-${user.username}`} {...user} />
          ))}
        </div>
      </div>
      <div className='container mx-auto py-40 px-10'>
        <div className='mb-10'>
          <h2 className='text-gray-700 font-bold text-2xl'>
            O que eu encontrarei na{' '}
            <span className='text-purple-500'>He4rt?</span>
          </h2>
          <p className='text-[#737272] mt-3 font-dm max-w-5xl'>
            Nós temos os recursos para levar qualquer ideia para frente, nenhum
            sonho é louco demais para nós. Descubra como desenvolver projetos
            que revolucionam a maneira de aprender.
          </p>
        </div>
        <div className='flex justify-between flex-col md:flex-row'>
          <div className='flex flex-col gap-10'>
            {Skills.map((topic) => (
              <Hea4rtSkills key={topic.title} {...topic} />
            ))}
          </div>
          <div className='bg-gradient-to-r h-fit from-[#782BF1] to-[#A62BF1] mt-10 md:mt-0 py-10 rounded-xl md:rounded-l-xl px-10 md:relative -right-36'>
            <img
              className='w-[584px]'
              src='/images/discord-print.png'
              alt='discord-print'
            />
            <div className='text-[#f3f3f3] px-3'>
              <h3 className='font-spline text-semibold'>
                Venha participar do nosso Discord
              </h3>
              <p className='font-dm mt-3 max-w-[584px]'>
                Nós temos os recursos para levar qualquer ideia para frente,
                nenhum sonho é louco demais para nós.
              </p>
              <button className='bg-white text-base py-2 px-4 rounded-xl text-[#782BF1] font-semibold font-dm mt-5'>
                Entrar no Discord
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
