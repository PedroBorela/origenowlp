import apoloImg from '../../atendemos/apolo.png'
import calpenImg from '../../atendemos/calpen.png'
import realceImg from '../../atendemos/realce.png'
import topImg from '../../atendemos/top.png'

const clients = [
  { name: 'CALPEN', logo: calpenImg },
  { name: 'APOLO', logo: apoloImg },
  { name: 'REALCE', logo: realceImg },
  { name: 'TOP', logo: topImg },
]

export default function Clients() {
  return (
    <section className="py-16 relative bg-surface-100">
      <div className="container-custom px-5 sm:px-8 lg:px-12">
        <div className="text-center mb-12">
          <span className="section-label">Parceiros</span>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-surface-900 tracking-tight">
            Sellers que Atendemos
          </h2>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 lg:gap-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className="glass-card-hover flex items-center justify-center h-28 sm:h-32 w-40 sm:w-48 cursor-default group p-4 bg-white/50"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-h-full max-w-full object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
