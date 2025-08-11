import React from 'react'

const Hero = () => {
  return (
    <section className='min-h-screen bg-gray-900 text-zinc-300 flex items-center'>
        <div className='mx-auto max-w-7xl px-6 w-full'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
                {/* kiri text */}
                <div>
                    <h1 className='text-4xl md:text-5xl font-mono leading-tight'>
                        Temukan <span className='text-cyan-500'></span> Talenta Terbaik
                    </h1>
                    <p className='mt-4 text-gray-600 max-w-lg'>
                        poting lowongan kerja anda hari ini dan dapatkan
                        kandidat berkualitas hanya dalam hitungan hari, jam, menit, dan detik
                    </p>
                    <div className='mt-6 flex flex-wrap gap-4'>
                        <button className='bg-blue-950/70 hover:bg-blue-700 text-black font-mono px-6 py-3 rounded-lg'>
                            post a job
                        </button>
                        <button className='border-blue-950 bg-blue-950/70 hover:bg-blue-700 px-6 py-3 rounded-lg font-mono text-black transition'>
                            Browse Talent
                        </button>
                    </div>
                </div>
            {/* bagian kanan gambar */}
            <div>
                <img src="animation.png" alt='animation' width="600"/>
            </div>

            </div>
        </div>
    </section>
  )
}

export default Hero