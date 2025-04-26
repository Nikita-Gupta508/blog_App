import Image from 'next/image';
//import img from '../../'
import profilePic from '@/app/about/profile.jpg';
export default function About() {
  return (
    <div>
           <div className="flex flex-col items-center justify-center py-32 bg-gray-100 dark:bg-gray-700 ">
        <div className="w-full max-w-4xl p-8 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex justify-center items-center mb-8 md:mb-0 ">
              <div className="relative w-48 h-48 rounded-full overflow-hidden">
                <Image
                  src={profilePic}
                  alt="Profile"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center ">
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-4">About Me</h1>
              <p className="text-gray-600 dark:text-gray-50 text-lg mb-4">
                Hello! I'm Nikita, a passionate software developer and tech enthusiast. 
                I created this blog to share my experiences, tips on various 
                programming languages and technologies. 
                I believe that learning should be a continuous 
                journey, and I'm here to work hard and study on their path to mastering the art of coding.
              </p>
              <p className="text-gray-600 dark:text-gray-50 text-lg">
                Whether you're just starting out or looking to sharpen your skills, 
                you'll find a variety of resources and insights here. Let's explore the world of programming together!
              </p>
            </div>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50 dark:bg-gray-800 dark:text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white">Nikita's Journey as a Coder</h2>
            <p className="mt-4 text-lg text-gray-600 dark:text-gray-50">
            From curious beginner to seasoned developer, here's how I navigated the world of programming.
            </p>
          </div>
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img src="https://images.pexels.com/photos/2781195/pexels-photo-2781195.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Nikita as a beginner" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">The Spark of Curiosity</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                My coding journey began in high school when I discovered 
                my first programming language—C++. What started as a simple 
                curiosity quickly transformed into a passion, as I dedicated 
                countess hours to experimenting with code, building small 
                projects, and mastering the fundamentals of software development. 
                This initial spark ignited a desire to explore the vast world of 
                programming, leading me to delve deeper into various languages 
                and technologies.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <img src="https://images.pexels.com/photos/7988742/pexels-photo-7988742.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Nikita learning new skills" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Diving Deeper</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                After mastering the basics, my thirst for knowledge grew. 
                I began exploring more complex topics such as data structures, 
                algorithms, and web development. Enrolling in online courses 
                and attending coding bootcamps, I quickly expanded my skill set. 
                I actively sought out opportunities to apply my knowledge in 
                real-world scenarios by taking on internships and collaborative 
                projects with fellow students, allowing me to gain practical 
                experience and deepen my understanding of software development.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/3">
                <img src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Nikita working on a big project" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pl-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Taking on Challenges</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                With several years of study and hands-on experience, 
                I have begun tackling more significant challenges in 
                my computer science journey. From contributing to 
                open-source projects to developing my own applications, 
                I continuously push my limits, always seeking opportunities 
                to learn and grow. My journey has not been without its 
                setbacks, but each obstacle has served as a valuable 
                stepping stone toward becoming the skilled developer 
                I aspire to be.
                </p>
              </div>
            </div>

            <div className="flex flex-col md:flex-row-reverse items-center">
              <div className="md:w-1/3">
                <img src="https://images.pexels.com/photos/5212701/pexels-photo-5212701.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Other's mentor" className="w-full rounded-lg shadow-lg" />
              </div>
              <div className="md:w-2/3 md:pr-8 mt-8 md:mt-0">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">Giving Back</h3>
                <p className="mt-4 text-gray-600 dark:text-gray-50">
                Today, as a dedicated software student, I am not only focused on 
                mastering coding skills but also eager to support my peers. 
                I actively engage with the programming community by sharing 
                my learning experiences through tutorials, participating 
                in study groups, and assisting fellow students in navigating 
                the challenges of software development. For me, coding is 
                more than just a field of study—it is a continuous journey 
                of exploration and collaboration, 
                where sharing knowledge enhances our collective growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}