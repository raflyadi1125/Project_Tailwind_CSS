import HeroImage from '../assets/images/hero.svg';
import AboutImage from '../assets/images/about.svg';

import proyek1 from '../assets/images/proyek-1.webp';
import proyek2 from '../assets/images/proyek-2.webp';
import proyek3 from '../assets/images/proyek-3.webp';
import proyek4 from '../assets/images/proyek-4.webp';
import proyek5 from '../assets/images/proyek-5.webp';

const Homepage = () => {
  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-20 pt-32">
          <div className="box">
            <h1 className="lg:text-5xl/tight text-3xl/tight font-medium mb-7">
              belajar membuat wesite dengan  <span className="font-bold text-amber-700 underline">tailwind CSS</span>
            </h1>
            <p className="text-base/8 mb-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatibus molestiae doloribus,
              consequatur provident quod voluptatum explicabo laborum ducimus eos velit esse error pariatur odio
              maxime veritatis repellat illum. Autem.</p>
            <a href="#" className="bg-gray-500 hover:bg-gray-600 transition-all py-2 px-4 text-black shadow rounded-full">
              Tentang Kami
              <i className="ri-eye-line ms-1"></i>
            </a>
          </div>
          <div className="box">
            <img src={HeroImage} alt="Hero Image" className="md:w-full w-[400px] mx-auto md:m-0" />
          </div>
        </div>

        <div className="about grid md:grid-cols-2 grid-cols-1 items-center md:gap-20 gap-10  md:pt-20 pt-32" id="about">
          <div className="box md:order-1 order-2">
            <img src={AboutImage} alt="About Image" className="lg:w-[500px] w-[400px] mx-auto md:m-0" />
          </div>
          <div className="box md:order-2 order-1">
            <h1 className="lg:text-5xl/tight text-3xl/tight font-medium mb-7">
              belajar membuat wesite dengan  <span className="font-bold text-amber-700 underline">tailwind CSS</span>
            </h1>
            <p className="text-base/loose">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid voluptatibus molestiae doloribus,
              consequatur provident quod voluptatum explicabo laborum ducimus eos velit esse error pariatur odio
              maxime veritatis repellat illum. Autem.</p>
          </div>
        </div>

        <div className="services pt-32" id="services">
          <h1 className="text-center lg:text-5xl/tight text-3xl/tight font-medium mb-2">layanan</h1>
          <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          <div className="services-box pt-12 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box bg-gray-800 rounded-lg shadow p-4">
              <i className="ri-number-1 text-3xl text-black"></i>
              <h3 className="text-xl font-bold mt-6 mb-2">service name 1</h3>
              <p className="text-black text-base/loose">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem iste illum esse magni rem. Maiores!</p>
            </div>
            <div className="box bg-gray-800 rounded-lg shadow p-4">
              <i className="ri-number-2 text-3xl text-black"></i>
              <h3 className="text-xl font-bold mt-6 mb-2">service name 2</h3>
              <p className="text-black text-base/loose">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem iste illum esse magni rem. Maiores!</p>
            </div>
            <div className="box bg-gray-800 rounded-lg shadow p-4">
              <i className="ri-number-3 text-3xl text-black"></i>
              <h3 className="text-xl font-bold mt-6 mb-2">service name 3</h3>
              <p className="text-black text-base/loose">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Autem iste illum esse magni rem. Maiores!</p>
            </div>
          </div>
        </div>

        <div className="proyek pt-32" id="proyek">
          <h1 className="text-center lg:text-5xl/tight text-3xl/tight font-medium mb-2">proyek</h1>
          <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
          <div className="proyek-box pt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div className="box p-2 bg-gray-800 rounded-b-2xl shadow">
              <img src={proyek1} alt="proyek image" className="w-full h-[220px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">proyek name 1</h3>
              <p className="text-black text-base/loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum officia facere quisquam quaerat ducimus recusandae!</p>
            </div>
            <div className="box p-2 bg-gray-800 rounded-b-2xl shadow">
              <img src={proyek2} alt="proyek image" className="w-full h-[220px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">proyek name 2</h3>
              <p className="text-black text-base/loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum officia facere quisquam quaerat ducimus recusandae!</p>
            </div>
            <div className="box p-2 bg-gray-800 rounded-b-2xl shadow">
              <img src={proyek3} alt="proyek image" className="w-full h-[220px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">proyek name 3</h3>
              <p className="text-black text-base/loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum officia facere quisquam quaerat ducimus recusandae!</p>
            </div>
            <div className="box p-2 bg-gray-800 rounded-b-2xl shadow">
              <img src={proyek4} alt="proyek image" className="w-full h-[220px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">proyek name 4</h3>
              <p className="text-black text-base/loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum officia facere quisquam quaerat ducimus recusandae!</p>
            </div>
            <div className="box p-2 bg-gray-800 rounded-b-2xl shadow">
              <img src={proyek5} alt="proyek image" className="w-full h-[220px]" />
              <h3 className="text-xl font-bold mt-6 mb-2">proyek name 5</h3>
              <p className="text-black text-base/loose">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum officia facere quisquam quaerat ducimus recusandae!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage