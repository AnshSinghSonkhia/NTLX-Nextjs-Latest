import Image from "next/image"
 
interface LogoItemProps {
    logo: string;
    name: string;
}

const LogoItem = ({ logo, name }: LogoItemProps) => {
return (
    <div className="p-1 sm:p-2 md:p-4 rounded-lg group">
        <Image 
            src={logo} 
            width={100} 
            height={60} 
            alt={name} 
            className="h-2 sm:h-5 md:h-6 lg:h-10 w-auto ease-linear duration-300 grayscale group-hover:!grayscale-0 group-hover:scale-105" 
        />
    </div>
)
}
const logos = [
{
    id: 1,
    logo:"/brands/Microsoft.png",
    name:"Spotify"
},
{
    id: 2,
    logo:"/brands/Microsoft.png",
    name:"Paypal Logo"
},
{
    id: 3,
    logo:"/brands/Microsoft.png",
    name:"Spotify"
},
{
    id: 4,
    logo:"/brands/Microsoft.png",
    name:"Spotify"
},
]
const LogoCloud = () => {
return (
    <section className="py-5 lg:-mt-20 lg:mb-10">
        <div className="max-w-7xl mx-auto px-2 sm:px-10 md:px-12 lg:px-5 space-y-2">
            <div className="flex justify-center flex-wrap gap-1 md:gap-4">
                {
                    logos.map(
                        logo=>(
                            <LogoItem key={logo.id} {...logo}/>
                        )
                    )
                }
            </div>
        </div>
    </section>
)
}
export default LogoCloud